
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock courses data
const courses = [
  {
    id: 1,
    title: "Fundamentos de Cybersegurança",
    description: "Aprenda os conceitos básicos e fundamentais para iniciar sua carreira em segurança digital.",
    level: "Iniciante",
    duration: "20 horas",
    modules: 8,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Análise de Vulnerabilidades",
    description: "Técnicas avançadas para identificar e explorar vulnerabilidades em sistemas e aplicações.",
    level: "Intermediário",
    duration: "30 horas",
    modules: 12,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Resposta a Incidentes",
    description: "Aprenda a detectar, responder e recuperar-se de incidentes de segurança de forma eficiente.",
    level: "Avançado",
    duration: "25 horas",
    modules: 10,
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const CourseShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Cursos em <span className="text-cyber-purple">Destaque</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore nossos cursos mais populares e comece sua jornada no mundo da cybersegurança.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="glass-card rounded-xl overflow-hidden hover-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-cyber-dark/80 backdrop-blur-sm text-cyber-green px-3 py-1 text-sm rounded-full">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {course.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyber-purple mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm text-white/70">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyber-purple mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                    <span className="text-sm text-white/70">{course.modules} Módulos</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-cyber-purple hover:bg-cyber-purple-dark text-white"
                >
                  <Link to={`/courses/${course.id}`}>
                    Ver Detalhes
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20"
          >
            <Link to="/courses">
              Ver Todos os Cursos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
