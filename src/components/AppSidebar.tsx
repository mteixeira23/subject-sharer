import {
  LayoutDashboard,
  GraduationCap,
  CheckSquare,
  Wallet,
  Heart,
  Target,
  MessageCircle,
  LogOut,
  Settings,
  Crown,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { NavLink } from '@/components/NavLink';
import { Badge } from '@/components/ui/badge';
import { useTasks } from '@/contexts/TaskContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { BrandLogo } from '@/components/BrandLogo';

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const { signOut } = useAuth();

  const { getPendingCount } = useTasks();
  const pendingCount = getPendingCount();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={`border-b border-sidebar-border ${collapsed ? 'p-2' : 'p-3'}`}>
        <div className="flex items-center justify-center">
          <BrandLogo size={collapsed ? 28 : 36} className="flex-shrink-0" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Hub */}
        <SidebarGroup>
          <SidebarGroupLabel>Hub</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <NavLink
                    to="/"
                    end
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Items sem agrupamento */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Conversa */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Chat">
                  <NavLink
                    to="/conversa"
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Metas */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Metas">
                  <NavLink
                    to="/metas"
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <Target className="h-5 w-5" />
                    <span>Metas</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Tarefas com badge */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Tarefas">
                  <NavLink
                    to="/tarefas"
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <CheckSquare className="h-5 w-5" />
                    <span className="flex-1">Tarefas</span>
                    {!collapsed && pendingCount > 0 && (
                      <Badge className="h-5 min-w-5 px-1 text-xs bg-primary text-primary-foreground">
                        {pendingCount}
                      </Badge>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Estudos */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Estudos">
                  <NavLink
                    to="/estudos"
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <GraduationCap className="h-5 w-5" />
                    <span>Estudos</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Finanças */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Finanças">
                  <NavLink
                    to="/financas"
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <Wallet className="h-5 w-5" />
                    <span>Finanças</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Saúde */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Saúde">
                  <NavLink
                    to="/saude"
                    className="flex items-center gap-3 hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Saúde</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Premium">
              <NavLink
                to="/assinatura"
                className="flex items-center gap-3 hover:bg-sidebar-accent"
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                <Crown className="h-5 w-5" />
                {!collapsed && <span>Premium</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Perfil & Configurações">
              <NavLink
                to="/perfil"
                className="flex items-center gap-3 hover:bg-sidebar-accent"
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                <Settings className="h-5 w-5" />
                {!collapsed && <span>Configurações</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => signOut()}
              tooltip="Sair"
              className="flex items-center gap-3 hover:bg-sidebar-accent cursor-pointer text-muted-foreground hover:text-destructive"
            >
              <LogOut className="h-5 w-5" />
              {!collapsed && <span>Sair</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
