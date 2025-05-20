
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Settings, 
  BarChart, 
  Bell, 
  Shield, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive?: boolean;
  isCollapsed?: boolean;
  hasAccess: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
  href, 
  icon, 
  children, 
  isActive = false, 
  isCollapsed = false,
  hasAccess = true 
}) => {
  if (!hasAccess) return null;
  
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center py-3 px-4 text-sm rounded-lg transition-colors",
        isActive 
          ? "bg-cyber-purple/20 text-cyber-purple" 
          : "text-white/70 hover:text-white hover:bg-white/5",
        isCollapsed && "justify-center"
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!isCollapsed && <span className="ml-3">{children}</span>}
    </Link>
  );
};

interface AdminSidebarProps {
  isCollapsed?: boolean;
  toggleCollapse?: () => void;
  userRole?: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  isCollapsed = false, 
  toggleCollapse, 
  userRole = "admin" 
}) => {
  const location = useLocation();
  const isAdmin = userRole === "admin";
  const isCreator = userRole === "creator" || userRole === "admin";
  
  return (
    <div 
      className={cn(
        "h-screen fixed left-0 top-0 z-40 bg-cyber-dark border-r border-cyber-purple/20 py-4 flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center px-4 mb-6">
        {!isCollapsed ? (
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-cyber-purple" />
            <span className="text-xl font-bold ml-2 text-white">
              E<span className="text-cyber-purple">SQUADS</span>
            </span>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <Shield className="h-8 w-8 text-cyber-purple" />
          </div>
        )}
        
        {toggleCollapse && (
          <button 
            className="ml-auto p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
            onClick={toggleCollapse}
          >
            <ChevronRight className={cn(
              "h-5 w-5 transition-transform",
              !isCollapsed && "rotate-180"
            )} />
          </button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto px-2">
        <nav className="space-y-1">
          <SidebarLink
            href="/admin/dashboard"
            icon={<LayoutDashboard className="h-5 w-5" />}
            isActive={location.pathname === "/admin/dashboard"}
            isCollapsed={isCollapsed}
            hasAccess={isAdmin}
          >
            Dashboard
          </SidebarLink>
          
          <SidebarLink
            href="/admin/courses"
            icon={<BookOpen className="h-5 w-5" />}
            isActive={location.pathname.startsWith("/admin/courses")}
            isCollapsed={isCollapsed}
            hasAccess={isCreator}
          >
            Cursos
          </SidebarLink>
          
          <SidebarLink
            href="/admin/users"
            icon={<Users className="h-5 w-5" />}
            isActive={location.pathname.startsWith("/admin/users")}
            isCollapsed={isCollapsed}
            hasAccess={isAdmin}
          >
            Usuários
          </SidebarLink>
          
          <SidebarLink
            href="/admin/analytics"
            icon={<BarChart className="h-5 w-5" />}
            isActive={location.pathname.startsWith("/admin/analytics")}
            isCollapsed={isCollapsed}
            hasAccess={isAdmin}
          >
            Análises
          </SidebarLink>
          
          <SidebarLink
            href="/admin/notifications"
            icon={<Bell className="h-5 w-5" />}
            isActive={location.pathname.startsWith("/admin/notifications")}
            isCollapsed={isCollapsed}
            hasAccess={isCreator}
          >
            Notificações
          </SidebarLink>
          
          <SidebarLink
            href="/admin/settings"
            icon={<Settings className="h-5 w-5" />}
            isActive={location.pathname.startsWith("/admin/settings")}
            isCollapsed={isCollapsed}
            hasAccess={isAdmin}
          >
            Configurações
          </SidebarLink>
        </nav>
      </div>
      
      <div className={cn(
        "mt-auto px-4 py-4 border-t border-cyber-purple/20",
        isCollapsed ? "text-center" : ""
      )}>
        <Link 
          to="/dashboard" 
          className="flex items-center text-sm text-white/70 hover:text-cyber-purple transition-colors"
        >
          {isCollapsed ? (
            <Shield className="h-5 w-5 mx-auto" />
          ) : (
            <>
              <Shield className="h-5 w-5 mr-2" />
              <span>Voltar para Aluno</span>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
