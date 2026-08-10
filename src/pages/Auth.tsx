import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrandLogo } from '@/components/BrandLogo';
import { useToast } from '@/hooks/use-toast';

export default function Auth() {
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupDone, setSignupDone] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(loginEmail, loginPassword);
    setLoading(false);
    if (error) {
      toast({ title: 'Erro ao entrar', description: error.message, variant: 'destructive' });
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signUp(signupEmail, signupPassword, signupName);
    setLoading(false);
    if (error) {
      toast({ title: 'Erro ao cadastrar', description: error.message, variant: 'destructive' });
    } else {
      setSignupDone(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <BrandLogo size={96} className="mx-auto" />
          <CardDescription>Vida Organizada</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              {forgotPassword ? (
                resetSent ? (
                  <div className="text-center py-6 space-y-2">
                    <p className="text-lg font-medium">Email enviado! 📧</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique sua caixa de entrada para redefinir sua senha.
                    </p>
                    <Button variant="link" onClick={() => { setForgotPassword(false); setResetSent(false); }}>
                      Voltar ao login
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
                      redirectTo: `${window.location.origin}/reset-password`,
                    });
                    setLoading(false);
                    if (error) {
                      toast({ title: 'Erro', description: error.message, variant: 'destructive' });
                    } else {
                      setResetSent(true);
                    }
                  }} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input id="reset-email" type="email" required value={resetEmail} onChange={e => setResetEmail(e.target.value)} placeholder="seu@email.com" />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Enviando...' : 'Enviar link de recuperação'}
                    </Button>
                    <Button type="button" variant="link" className="w-full" onClick={() => setForgotPassword(false)}>
                      Voltar ao login
                    </Button>
                  </form>
                )
              ) : (
                <form onSubmit={handleLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Senha</Label>
                    <Input id="login-password" type="password" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="••••••••" />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
                  </Button>
                  <Button type="button" variant="link" className="w-full text-sm" onClick={() => setForgotPassword(true)}>
                    Esqueci minha senha
                  </Button>
                </form>
              )}
            </TabsContent>

            <TabsContent value="signup">
              {signupDone ? (
                <div className="text-center py-6 space-y-2">
                  <p className="text-lg font-medium">Cadastro realizado! 🎉</p>
                  <p className="text-sm text-muted-foreground">
                    Verifique seu email para confirmar a conta antes de entrar.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Nome</Label>
                    <Input id="signup-name" required value={signupName} onChange={e => setSignupName(e.target.value)} placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" required value={signupEmail} onChange={e => setSignupEmail(e.target.value)} placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Senha</Label>
                    <Input id="signup-password" type="password" required minLength={6} value={signupPassword} onChange={e => setSignupPassword(e.target.value)} placeholder="Mínimo 6 caracteres" />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
