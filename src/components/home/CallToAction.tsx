
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-cyber-purple/10 filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-cyber-blue/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pronto para iniciar sua jornada em <span className="text-cyber-purple">Cybersegurança</span>?
          </h2>
          
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes e profissionais que estão transformando suas carreiras
            com os cursos e laboratórios práticos da ESQUADS.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-cyber-purple hover:bg-cyber-purple-dark text-white px-8 py-6 rounded-lg font-medium text-lg hover-scale"
            >
              <Link to="/register">
                Criar Conta Gratuita
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20 px-8 py-6 rounded-lg font-medium text-lg hover-scale"
            >
              <Link to="/pricing">
                Ver Planos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
