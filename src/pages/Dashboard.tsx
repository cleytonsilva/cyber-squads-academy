
import React from "react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/dashboard/CourseCard";
import ProgressStats from "@/components/dashboard/ProgressStats";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const enrolledCourses = [
  {
    id: 1,
    title: "Fundamentos de Cybersegurança",
    description: "Aprenda os conceitos básicos e fundamentais para iniciar sua carreira em segurança digital.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    progress: 65,
    totalLessons: 24,
    completedLessons: 16,
  },
  {
    id: 2,
    title: "Análise de Vulnerabilidades",
    description: "Técnicas avançadas para identificar e explorar vulnerabilidades em sistemas e aplicações.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    progress: 30,
    totalLessons: 36,
    completedLessons: 11,
  },
  {
    id: 3,
    title: "Resposta a Incidentes",
    description: "Aprenda a detectar, responder e recuperar-se de incidentes de segurança de forma eficiente.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    progress: 0,
    totalLessons: 20,
    completedLessons: 0,
  },
];

const progressStats = {
  completedCourses: 2,
  totalCourses: 8,
  studyTimeHours: 48,
  earnedBadges: 12,
};

const nextMissions = [
  {
    id: 1,
    title: "Identificar Vulnerabilidades XSS",
    description: "Completar o laboratório prático de vulnerabilidades XSS",
    difficulty: "Intermediário",
    points: 150,
  },
  {
    id: 2,
    title: "Configuração de Firewall",
    description: "Implementar e configurar um firewall em ambiente virtual",
    difficulty: "Iniciante",
    points: 100,
  },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Olá, Estudante!</h1>
          <p className="text-white/70">
            Continue sua jornada de aprendizado em cybersegurança.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <ProgressStats {...progressStats} />
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Próximas Missões</h2>
            
            <div className="space-y-4">
              {nextMissions.map((mission) => (
                <div key={mission.id} className="bg-cyber-dark/40 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{mission.title}</h3>
                    <span className="text-xs bg-cyber-purple/20 text-cyber-purple px-2 py-0.5 rounded">
                      {mission.points} pts
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{mission.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/60">Dificuldade: {mission.difficulty}</span>
                    <Button size="sm" className="bg-cyber-purple hover:bg-cyber-purple-dark text-white">
                      Iniciar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Seus Cursos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-white">Precisa de ajuda?</h2>
              <p className="text-white/70">Nosso assistente virtual pode responder suas dúvidas.</p>
            </div>
            <Button className="bg-cyber-green hover:bg-cyber-green-dark text-white">
              Conversar com o Assistente IA
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
