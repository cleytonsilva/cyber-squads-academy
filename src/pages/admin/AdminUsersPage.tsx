
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdminSidebar from "@/components/admin/Sidebar";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Trash2, 
  Edit, 
  Search, 
  ShieldCheck, 
  Shield, 
  UserCog, 
  User
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import UserRoleBadge from "@/components/admin/UserRoleBadge";

export type UserProfile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: 'admin' | 'creator' | 'instructor' | 'student' | 'basic';
  created_at: string;
}

const AdminUsersPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: users, isLoading, error, refetch } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
      if (authError) throw new Error(authError.message);
      
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("*");
        
      if (profilesError) throw new Error(profilesError.message);
      
      // Merge the auth users with their profiles
      const mergedUsers = authUsers.users.map(user => {
        const profile = profiles?.find(p => p.id === user.id);
        return {
          id: user.id,
          email: user.email || 'No email',
          full_name: profile?.full_name || 'No name',
          avatar_url: profile?.avatar_url,
          role: profile?.role || 'student',
          created_at: new Date(user.created_at).toLocaleDateString()
        };
      });
      
      return mergedUsers as UserProfile[];
    }
  });
  
  const filteredUsers = users?.filter(user => {
    return (
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (user.full_name && user.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  // Function to get the appropriate icon for a user role
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <ShieldCheck className="h-4 w-4" />;
      case 'creator':
        return <Shield className="h-4 w-4" />;
      case 'instructor':
        return <UserCog className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex h-screen bg-cyber-dark/90">
      <AdminSidebar 
        isCollapsed={sidebarCollapsed} 
        toggleCollapse={toggleSidebar}
        userRole="admin"
      />
      
      <div 
        className={`flex-1 transition-all duration-300 ml-${sidebarCollapsed ? '20' : '64'}`}
      >
        <div className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Gerenciamento de Usuários</h1>
              <p className="text-white/70">
                Visualize, edite e gerencie os usuários da plataforma.
              </p>
            </div>
            
            <Button 
              className="mt-4 lg:mt-0 bg-cyber-purple hover:bg-cyber-purple-dark text-white"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Adicionar Usuário
            </Button>
          </div>
          
          {/* Search and Filters */}
          <Card className="bg-cyber-dark/50 border-cyber-purple/20 mb-6 p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Buscar por nome ou email..."
                  className="w-full pl-10 pr-4 py-2 bg-cyber-dark border border-cyber-purple/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-white/10 text-white hover:bg-white/20 cursor-pointer">Todos</Badge>
                <Badge className="bg-cyber-purple/20 text-cyber-purple hover:bg-cyber-purple/30 cursor-pointer">Admin</Badge>
                <Badge className="bg-cyber-blue/20 text-cyber-blue hover:bg-cyber-blue/30 cursor-pointer">Creator</Badge>
                <Badge className="bg-cyber-green/20 text-cyber-green hover:bg-cyber-green/30 cursor-pointer">Instructor</Badge>
                <Badge className="bg-white/5 text-white/70 hover:bg-white/10 cursor-pointer">Student</Badge>
              </div>
            </div>
          </Card>
          
          {/* Users Table */}
          <Card className="bg-cyber-dark/50 border-cyber-purple/20 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-cyber-purple/20 hover:bg-transparent">
                    <TableHead className="text-white">Usuário</TableHead>
                    <TableHead className="text-white">Email</TableHead>
                    <TableHead className="text-white">Role</TableHead>
                    <TableHead className="text-white">Data de Criação</TableHead>
                    <TableHead className="text-white text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4 text-white/70">
                        Carregando usuários...
                      </TableCell>
                    </TableRow>
                  ) : error ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4 text-red-400">
                        Erro ao carregar usuários: {error.toString()}
                      </TableCell>
                    </TableRow>
                  ) : filteredUsers && filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <TableRow 
                        key={user.id} 
                        className="border-b border-cyber-purple/10 hover:bg-cyber-purple/5"
                      >
                        <TableCell className="py-3">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple font-bold">
                              {user.full_name ? user.full_name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div>
                              <p className="text-white font-medium">{user.full_name || 'Sem nome'}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-white/70">{user.email}</TableCell>
                        <TableCell>
                          <UserRoleBadge role={user.role} />
                        </TableCell>
                        <TableCell className="text-white/70">{user.created_at}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="icon" className="h-8 w-8 border-cyber-purple/20 hover:bg-cyber-purple/10">
                              <Edit className="h-4 w-4 text-cyber-blue" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 border-cyber-purple/20 hover:bg-red-400/10">
                              <Trash2 className="h-4 w-4 text-red-400" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4 text-white/70">
                        Nenhum usuário encontrado.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersPage;
