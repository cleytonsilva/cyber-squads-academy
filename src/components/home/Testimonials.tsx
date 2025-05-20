
import React from "react";

const testimonials = [
  {
    content: "Os cursos da ESQUADS mudaram completamente minha carreira. O conteúdo prático e os laboratórios me deram confiança para aplicar o conhecimento no mundo real.",
    author: "Carlos Silva",
    position: "Analista de Segurança, Tech Solutions",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    content: "A abordagem gamificada tornou o aprendizado divertido e envolvente. Consegui aprender conceitos complexos de forma natural graças às missões e desafios.",
    author: "Mariana Oliveira",
    position: "Estudante de Ciência da Computação",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    content: "Como instrutor, tenho acesso a ferramentas incríveis para criar conteúdo envolvente. Meus alunos adoram a interatividade e os desafios práticos.",
    author: "Rafael Mendes",
    position: "Especialista em Segurança Ofensiva",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            O que dizem sobre a <span className="text-cyber-purple">ESQUADS</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Nossa comunidade de estudantes e profissionais compartilha suas experiências.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-cyber-purple opacity-20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-white/80 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full border-2 border-cyber-purple/30"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-white/60">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
