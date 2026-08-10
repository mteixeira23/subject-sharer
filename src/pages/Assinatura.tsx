import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, Crown, Loader2, ExternalLink, RefreshCw, Users } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { toast } from 'sonner';

const BENEFITS = [
  'Acesso completo a todos os módulos',
  'Chat com assistente IA ilimitado',
  'Relatórios avançados de finanças',
  'Backup automático dos dados',
  'Suporte prioritário',
];

interface AdminUser {
  id: string;
  email: string;
  display_name: string;
  status: 'active' | 'free' | 'pending';
  created_at: string;
}

function statusLabel(status: string) {
  switch (status) {
    case 'active': return <Badge className="bg-green-500/20 text-green-700 border-green-500/30">Ativo</Badge>;
    case 'free': return <Badge className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">Gratuito</Badge>;
    default: return <Badge variant="secondary">Pendente</Badge>;
  }
}

export default function Assinatura() {
  const { session } = useAuth();
  const { isPremium, subscriptionEnd, loading, refresh } = useSubscription();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [searchParams] = useSearchParams();

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [adminLoading, setAdminLoading] = useState(false);
  const [togglingUser, setTogglingUser] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast.success('Assinatura realizada com sucesso! 🎉');
      refresh();
    }
    if (searchParams.get('canceled') === 'true') {
      toast.info('Checkout cancelado.');
    }
  }, [searchParams, refresh]);

  // Check if admin
  useEffect(() => {
    if (!session?.user?.id) return;
    supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .maybeSingle()
      .then(({ data }) => {
        setIsAdmin(!!data);
      });
  }, [session?.user?.id]);

  const loadAdminUsers = useCallback(async () => {
    if (!session?.access_token || !isAdmin) return;
    setAdminLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-premium', {
        method: 'GET',
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setAdminUsers(data?.users || []);
    } catch (err: any) {
      toast.error('Erro ao carregar usuários: ' + (err.message || ''));
    } finally {
      setAdminLoading(false);
    }
  }, [session?.access_token, isAdmin]);

  useEffect(() => {
    if (isAdmin) loadAdminUsers();
  }, [isAdmin, loadAdminUsers]);

  const toggleFreeAccess = async (userId: string, grant: boolean) => {
    if (!session?.access_token) return;
    setTogglingUser(userId);
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-premium', {
        method: 'POST',
        headers: { Authorization: `Bearer ${session.access_token}` },
        body: { user_id: userId, grant },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success(grant ? 'Acesso gratuito concedido!' : 'Acesso gratuito revogado.');
      await loadAdminUsers();
    } catch (err: any) {
      toast.error('Erro: ' + (err.message || ''));
    } finally {
      setTogglingUser(null);
    }
  };

  const handleCheckout = async () => {
    if (!session) return;
    setCheckoutLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      toast.error('Erro ao iniciar checkout: ' + (err.message || 'Tente novamente'));
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handleManage = async () => {
    if (!session) return;
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      toast.error('Erro ao abrir portal: ' + (err.message || 'Tente novamente'));
    } finally {
      setPortalLoading(false);
    }
  };

  return (
    <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BrandLogo size={56} />
           Habitus Premium
         </h1>
         <p className="text-muted-foreground mt-1">
           Desbloqueie todo o potencial do Habitus
        </p>
      </div>

      <Card className={isPremium ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/10' : ''}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Plano Premium</CardTitle>
              <CardDescription>Acesso completo a todos os recursos</CardDescription>
            </div>
            {isPremium && (
              <Badge className="bg-yellow-500 text-yellow-950 hover:bg-yellow-500">
                Seu Plano
              </Badge>
            )}
          </div>
          <div className="mt-4">
            <span className="text-4xl font-bold">R$ 9,90</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          {loading ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : isPremium ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Assinatura ativa até{' '}
                <strong>
                  {subscriptionEnd
                    ? new Date(subscriptionEnd).toLocaleDateString('pt-BR')
                    : '—'}
                </strong>
              </p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleManage} disabled={portalLoading} className="flex-1">
                  {portalLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ExternalLink className="h-4 w-4" />}
                  Gerenciar Assinatura
                </Button>
                <Button variant="ghost" size="icon" onClick={refresh}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <Button onClick={handleCheckout} disabled={checkoutLoading} className="w-full" size="lg">
              {checkoutLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Crown className="h-4 w-4" />}
              Assinar Agora
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Admin: Gerenciar Usuários */}
      {isAdmin && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <CardTitle className="text-lg">Gerenciar Usuários</CardTitle>
              </div>
              <Button variant="outline" size="sm" onClick={loadAdminUsers} disabled={adminLoading}>
                <RefreshCw className={`h-4 w-4 ${adminLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            <CardDescription>Conceda ou revogue acesso gratuito ao Premium</CardDescription>
          </CardHeader>
          <CardContent>
            {adminLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Acesso Gratuito</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adminUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium text-sm">{user.email}</TableCell>
                      <TableCell className="text-sm">{user.display_name || '—'}</TableCell>
                      <TableCell>{statusLabel(user.status)}</TableCell>
                      <TableCell className="text-right">
                        <Switch
                          checked={user.status === 'free'}
                          disabled={togglingUser === user.id || user.status === 'active'}
                          onCheckedChange={(checked) => toggleFreeAccess(user.id, checked)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  {adminUsers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                        Nenhum usuário encontrado
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
