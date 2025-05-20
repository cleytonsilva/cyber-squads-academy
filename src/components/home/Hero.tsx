
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyber-purple/10 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyber-blue/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 glow-text">
            Domine a <span className="text-cyber-green glow-green">Cybersegurança</span> com a ESQUADS
          </h1>
          
          <p className="animate-fade-in [animation-delay:300ms] text-lg md:text-xl text-white/70 mb-8">
            A plataforma de aprendizado interativa que transforma iniciantes em especialistas 
            de segurança através de práticas reais, desafios e missões gamificadas.
          </p>
          
          <div className="animate-fade-in [animation-delay:600ms] flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-cyber-purple hover:bg-cyber-purple-dark text-white px-8 py-6 rounded-lg font-medium text-lg hover-scale"
            >
              <Link to="/courses">
                Explorar Cursos
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20 px-8 py-6 rounded-lg font-medium text-lg hover-scale"
            >
              <Link to="/about" className="inline-flex items-center">
                Saiba Mais
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in [animation-delay:900ms]">
          <div className="glass-card rounded-2xl p-4 md:p-6 max-w-4xl mx-auto overflow-hidden shadow-lg">
            <div className="relative">
              {/* Placeholder for the hero image/animation */}
              <div className="bg-cyber-dark rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="inline-block p-4 bg-cyber-dark rounded-full border-2 border-cyber-purple/50 animate-pulse-glow mb-4">
                    <div className="w-16 h-16 bg-cyber-purple/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Aprenda com Experiências Reais</h3>
                  <p className="text-white/70">Ambiente prático e seguro para testar suas habilidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
