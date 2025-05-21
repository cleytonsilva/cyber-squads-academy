
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "@/components/admin/Sidebar";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Users, 
  BookOpen, 
  Award, 
  ArrowUp, 
  ArrowDown 
} from "lucide-react";

const AdminDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const userRole = "admin"; // In a real app, this would come from auth context
  
  // Mock data for demonstration
  const statsData = [
    {
      title: "Usuários Ativos",
      value: "1,254",
      change: 12.5,
      trend: "up",
      icon: <Users className="h-5 w-5" />,
      color: "bg-cyber-purple/20 text-cyber-purple",
    },
    {
      title: "Cursos",
      value: "48",
      change: 8.2,
      trend: "up",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-cyber-blue/20 text-cyber-blue",
    },
    {
      title: "Certificados",
      value: "512",
      change: 15.3,
      trend: "up",
      icon: <Award className="h-5 w-5" />,
      color: "bg-cyber-green/20 text-cyber-green",
    },
    {
      title: "Receita",
      value: "R$ 25,800",
      change: -3.2,
      trend: "down",
      icon: <BarChart className="h-5 w-5" />,
      color: "bg-red-400/20 text-red-400",
      adminOnly: true,
    },
  ];
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  return (
    <div className="flex h-screen bg-cyber-dark/90">
      <AdminSidebar 
        isCollapsed={sidebarCollapsed} 
        toggleCollapse={toggleSidebar} 
        userRole={userRole}
      />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Painel Administrativo</h1>
              <p className="text-white/70">
                Bem-vindo de volta! Aqui está um resumo da plataforma.
              </p>
            </div>
            
            {userRole === "admin" && (
              <Button 
                asChild
                className="mt-4 lg:mt-0 bg-cyber-purple hover:bg-cyber-purple-dark text-white"
              >
                <Link to="/admin/courses/new">
                  Criar Novo Curso
                </Link>
              </Button>
            )}
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsData
              .filter(stat => !stat.adminOnly || userRole === "admin")
              .map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 rounded-xl hover-scale"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/70 text-sm mb-1">{stat.title}</p>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{stat.value}</h3>
                    </div>
                    <div className={`p-2 md:p-3 rounded-full ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center text-sm">
                    {stat.trend === "up" ? (
                      <ArrowUp className="h-3 w-3 text-cyber-green mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-red-400 mr-1" />
                    )}
                    <span 
                      className={stat.trend === "up" ? "text-cyber-green" : "text-red-400"}
                    >
                      {Math.abs(stat.change)}%
                    </span>
                    <span className="text-white/60 ml-1">desde o mês passado</span>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2 glass-card p-4 rounded-xl">
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">Atividade da Plataforma</h2>
              <div className="border border-cyber-purple/20 rounded-lg p-4 md:p-6 h-[200px] flex items-center justify-center">
                <p className="text-white/50">Gráfico de atividades aqui</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">Cursos Populares</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-cyber-dark/40 rounded-lg p-3 flex items-center">
                    <div className="bg-cyber-purple/20 h-8 w-8 rounded flex items-center justify-center text-cyber-purple font-bold mr-2">
                      #{i}
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">
                        {i === 1 && "Fundamentos de Cybersegurança"}
                        {i === 2 && "Análise de Vulnerabilidades"}
                        {i === 3 && "Pentest Profissional"}
                      </h4>
                      <p className="text-white/60 text-xs">
                        {120 - (i * 20)} alunos ativos
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Dashboard Widgets - Can be expanded as needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl">
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">Últimas Atividades</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-cyber-dark/30 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-white text-sm">Usuário {100 + i} completou um curso</p>
                      <span className="text-white/40 text-xs">{i} hora{i > 1 ? 's' : ''} atrás</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">Certificados Emitidos</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-cyber-dark/30 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-white text-sm">Certificado em Pentest - ID #{1000 + i}</p>
                      <span className="text-white/40 text-xs">{i + 1} dia{i > 0 ? 's' : ''} atrás</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
