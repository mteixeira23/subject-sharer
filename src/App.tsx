import { lazy, Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useNotifications } from "@/hooks/useNotifications";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";

// Lazy-loaded pages
const HubDashboard = lazy(() => import("./pages/HubDashboard"));
const Conversa = lazy(() => import("./pages/Conversa"));
const Estudos = lazy(() => import("./pages/Estudos"));
const Financas = lazy(() => import("./pages/Financas"));
const Saude = lazy(() => import("./pages/Saude"));
const Tarefas = lazy(() => import("./pages/Tarefas"));
const Metas = lazy(() => import("./pages/Metas"));
const Perfil = lazy(() => import("./pages/Perfil"));
const Auth = lazy(() => import("./pages/Auth"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Install = lazy(() => import("./pages/Install"));
const Assinatura = lazy(() => import("./pages/Assinatura"));
const DownloadLogo = lazy(() => import("./pages/DownloadLogo"));
const Manual = lazy(() => import("./pages/Manual"));

function PageFallback() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>
  );
}

function NotificationListener() {
  useNotifications();
  return null;
}

function useIsAdmin() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      return;
    }
    supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle()
      .then(({ data }) => {
        setIsAdmin(!!data);
      });
  }, [user]);

  return isAdmin;
}

const appRoutes = (
  <Suspense fallback={<PageFallback />}>
    <Routes>
      <Route path="/" element={<HubDashboard />} />
      <Route path="/conversa" element={<Conversa />} />
      <Route path="/estudos" element={<Estudos />} />
      <Route path="/financas" element={<Financas />} />
      <Route path="/saude" element={<Saude />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/metas" element={<Metas />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/install" element={<Install />} />
      <Route path="/assinatura" element={<Assinatura />} />
      <Route path="/download-logo" element={<DownloadLogo />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/auth" element={<Navigate to="/" replace />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

const restrictedRoutes = (
  <Suspense fallback={<PageFallback />}>
    <Routes>
      <Route path="/" element={<HubDashboard />} />
      <Route path="/assinatura" element={<Assinatura />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/download-logo" element={<DownloadLogo />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Suspense>
);

function AppLayout({ hasAccess }: { hasAccess: boolean }) {
  const isMobile = useIsMobile();

  const routes = hasAccess ? appRoutes : restrictedRoutes;

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
        <div className="flex-1 flex flex-col pb-16">
          {routes}
        </div>
        {hasAccess && <MobileBottomNav />}
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {hasAccess && <AppSidebar />}
        <div className="flex-1 flex flex-col">
          {routes}
        </div>
      </div>
    </SidebarProvider>
  );
}

function AppRoutes() {
  const { session, loading } = useAuth();
  const { isPremium, loading: subLoading } = useSubscription();
  const isAdmin = useIsAdmin();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!session || (!subLoading && isAdmin !== null)) return;
    const timer = setTimeout(() => setTimedOut(true), 6000);
    return () => clearTimeout(timer);
  }, [session, subLoading, isAdmin]);

  const stillLoading = session && !timedOut && (subLoading || isAdmin === null);

  if (loading || stillLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!session) {
    return (
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/install" element={<Install />} />
          <Route path="/download-logo" element={<DownloadLogo />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    );
  }

  const hasAccess = true;

  return (
    <ErrorBoundary>
      <NotificationListener />
      <AppLayout hasAccess={hasAccess} />
    </ErrorBoundary>
  );
}

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
