import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[ADMIN-MANAGE-PREMIUM] ${step}${detailsStr}`);
};

const safeResponse = (data: any, status = 200) =>
  new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status,
  });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started", { method: req.method });

    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return safeResponse({ error: "Unauthorized" }, 401);
    }

    const token = authHeader.replace("Bearer ", "");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return safeResponse({ error: "Unauthorized" }, 401);
    }

    const adminId = claimsData.claims.sub as string;
    logStep("Authenticated", { adminId });

    // Check admin role
    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { data: roleData } = await serviceClient
      .from("user_roles")
      .select("role")
      .eq("user_id", adminId)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      logStep("Not admin", { adminId });
      return safeResponse({ error: "Forbidden" }, 403);
    }

    if (req.method === "GET") {
      // List all users with subscription status
      const { data: { users }, error: usersError } = await serviceClient.auth.admin.listUsers({ perPage: 1000 });
      if (usersError) throw usersError;

      // Get all overrides
      const { data: overrides } = await serviceClient
        .from("premium_overrides")
        .select("user_id");
      const overrideSet = new Set((overrides || []).map(o => o.user_id));

      // Check Stripe subscriptions
      const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
      let stripeActiveEmails = new Set<string>();
      
      if (stripeKey) {
        const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });
        const activeSubs = await stripe.subscriptions.list({ status: "active", limit: 100 });
        
        for (const sub of activeSubs.data) {
          if (sub.customer && typeof sub.customer !== 'string') {
            const email = (sub.customer as any).email;
            if (email) stripeActiveEmails.add(email.toLowerCase());
          } else if (typeof sub.customer === 'string') {
            try {
              const customer = await stripe.customers.retrieve(sub.customer as string);
              if ('email' in customer && customer.email) {
                stripeActiveEmails.add(customer.email.toLowerCase());
              }
            } catch { /* skip */ }
          }
        }
      }

      const result = users.map(u => {
        const hasOverride = overrideSet.has(u.id);
        const hasStripe = u.email ? stripeActiveEmails.has(u.email.toLowerCase()) : false;
        let status = "pending";
        if (hasOverride) status = "free";
        else if (hasStripe) status = "active";

        return {
          id: u.id,
          email: u.email || "",
          display_name: (u.user_metadata as any)?.display_name || "",
          status,
          created_at: u.created_at,
        };
      });

      logStep("Listed users", { count: result.length });
      return safeResponse({ users: result });
    }

    if (req.method === "POST") {
      const { user_id, grant } = await req.json();
      if (!user_id) return safeResponse({ error: "user_id required" }, 400);

      if (grant) {
        const { error } = await serviceClient
          .from("premium_overrides")
          .upsert({ user_id, granted_by: adminId }, { onConflict: "user_id" });
        if (error) throw error;
        logStep("Granted free access", { user_id });
      } else {
        const { error } = await serviceClient
          .from("premium_overrides")
          .delete()
          .eq("user_id", user_id);
        if (error) throw error;
        logStep("Revoked free access", { user_id });
      }

      return safeResponse({ success: true });
    }

    return safeResponse({ error: "Method not allowed" }, 405);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return safeResponse({ error: errorMessage }, 500);
  }
});
