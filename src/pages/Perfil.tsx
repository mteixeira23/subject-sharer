import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { NotificationSettings } from '@/components/NotificationSettings';
import { useToast } from '@/hooks/use-toast';
import { User, KeyRound, Trash2, ArrowLeft, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface UserInfo {
  id: string;
  email: string;
  created_at: string;
  display_name: string | null;
}

export default function Perfil() {
  const { user, signOut, session } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Admin
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Profile
  const [displayName, setDisplayName] = useState('');
  const [savingName, setSavingName] = useState(false);

  // Password
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [savingPassword, setSavingPassword] = useState(false);

  // Delete
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('profiles')
      .select('display_name')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.display_name) setDisplayName(data.display_name);
      });

    // Check admin role
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

  const loadUsers = async () => {
    if (!session?.access_token) return;
    setLoadingUsers(true);
    try {
      const { data, error } = await supabase.functions.invoke('admin-list-users', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (error) throw error;
      setUsers(data || []);
    } catch (err: any) {
      toast({ title: 'Erro ao carregar usuários', description: err.message, variant: 'destructive' });
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleDeleteUser = async (targetId: string) => {
    if (!session?.access_token) return;
    setDeletingId(targetId);
    try {
      const { data, error } = await supabase.functions.invoke('admin-delete-user', {
        headers: { Authorization: `Bearer ${session.access_token}` },
        body: { user_id: targetId },
      });
      if (error) throw error;
      toast({ title: 'Usuário excluído!' });
      setUsers((prev) => prev.filter((u) => u.id !== targetId));
    } catch (err: any) {
      toast({ title: 'Erro ao excluir', description: err.message, variant: 'destructive' });
    } finally {
      setDeletingId(null);
    }
  };

  const handleSaveName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !displayName.trim()) return;
    setSavingName(true);
    const { error } = await supabase
      .from('profiles')
      .update({ display_name: displayName.trim() })
      .eq('id', user.id);
    setSavingName(false);
    if (error) {
      toast({ title: 'Erro ao salvar nome', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Nome atualizado!' });
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({ title: 'Erro', description: 'As senhas não coincidem.', variant: 'destructive' });
      return;
    }
    setSavingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setSavingPassword(false);
    if (error) {
      toast({ title: 'Erro ao trocar senha', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Senha atualizada!' });
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    setDeleting(true);
    await supabase.from('profiles').delete().eq('id', user.id);
    await signOut();
    toast({ title: 'Conta excluída.' });
    setDeleting(false);
  };

  const settingsContent = (
    <div className="space-y-6">
      {/* Display Name */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <User className="h-4 w-4" />
            Nome de Exibição
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveName} className="flex gap-3">
            <Input
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              placeholder="Seu nome"
              className="flex-1"
              required
            />
            <Button type="submit" disabled={savingName}>
              {savingName ? 'Salvando...' : 'Salvar'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <NotificationSettings />

      {/* Change Password */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <KeyRound className="h-4 w-4" />
            Alterar Senha
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="new-pw">Nova senha</Label>
              <Input id="new-pw" type="password" required minLength={6} value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Mínimo 6 caracteres" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-pw">Confirmar senha</Label>
              <Input id="confirm-pw" type="password" required minLength={6} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Repita a senha" />
            </div>
            <Button type="submit" disabled={savingPassword}>
              {savingPassword ? 'Salvando...' : 'Alterar Senha'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2 text-destructive">
            <Trash2 className="h-4 w-4" />
            Zona de Perigo
          </CardTitle>
          <CardDescription>Ações irreversíveis</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={deleting}>
                {deleting ? 'Excluindo...' : 'Excluir minha conta'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Essa ação é irreversível. Todos os seus dados serão apagados permanentemente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Sim, excluir conta
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );

  const usersContent = (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            Usuários Ativos
          </CardTitle>
          <Button size="sm" onClick={loadUsers} disabled={loadingUsers}>
            {loadingUsers ? 'Carregando...' : 'Atualizar'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {users.length === 0 && !loadingUsers ? (
          <p className="text-sm text-muted-foreground">Clique em "Atualizar" para carregar a lista.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Cadastro</TableHead>
                <TableHead className="w-[80px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="text-xs">{u.email}</TableCell>
                  <TableCell className="text-xs">{u.display_name || '—'}</TableCell>
                  <TableCell className="text-xs">{format(new Date(u.created_at), 'dd/MM/yyyy')}</TableCell>
                  <TableCell>
                    {u.id !== user?.id ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" disabled={deletingId === u.id}>
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Excluir usuário?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Excluir {u.email}? Essa ação é irreversível.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteUser(u.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                              Sim, excluir
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <Badge variant="outline" className="text-xs"><Shield className="h-3 w-3 mr-1" />Você</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="flex-1 p-4 md:p-6 max-w-2xl mx-auto w-full space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Perfil & Configurações</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>

      {isAdmin ? (
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="users" className="flex-1 gap-1.5">
              <Users className="h-4 w-4" />
              Usuários
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 gap-1.5">
              <User className="h-4 w-4" />
              Configurações
            </TabsTrigger>
          </TabsList>
          <TabsContent value="users">{usersContent}</TabsContent>
          <TabsContent value="settings">{settingsContent}</TabsContent>
        </Tabs>
      ) : (
        settingsContent
      )}
    </div>
  );
}
