
import React from "react";
import { Shield, Award, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-cyber-purple" />,
    title: "Cursos Especializados",
    description: "Conteúdo estruturado por especialistas em cybersegurança, atualizado constantemente com as últimas tendências e ameaças.",
  },
  {
    icon: <Shield className="h-10 w-10 text-cyber-purple" />,
    title: "Laboratórios Práticos",
    description: "Ambiente seguro para praticar técnicas de segurança ofensivas e defensivas em cenários reais.",
  },
  {
    icon: <Award className="h-10 w-10 text-cyber-purple" />,
    title: "Certificações Reconhecidas",
    description: "Obtenha certificados que validam suas habilidades e conhecimentos no mercado de trabalho.",
  },
  {
    icon: <Users className="h-10 w-10 text-cyber-purple" />,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros profissionais e estudantes para compartilhar conhecimentos e experiências.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Por que escolher a <span className="text-cyber-purple">ESQUADS</span>?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Nossa plataforma oferece uma experiência de aprendizado única, combinando teoria,
            prática e gamificação para tornar seu aprendizado eficiente e divertido.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-cyber-dark/50 p-3 rounded-full inline-block mb-4 cyber-border">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
