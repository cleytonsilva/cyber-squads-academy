
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  image,
  progress,
  totalLessons,
  completedLessons,
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-scale">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
        
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold text-white line-clamp-1">{title}</h3>
          
          <div className="flex items-center space-x-2 mt-2">
            <Progress value={progress} className="h-2 bg-white/20 [&>div]:bg-cyber-green" />
            <span className="text-xs text-white/70 w-12">{progress}%</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-white/70 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-white/60 mb-4">
          <span>{completedLessons} de {totalLessons} aulas</span>
        </div>
        
        <Button
          asChild
          className="w-full bg-cyber-purple hover:bg-cyber-purple-dark text-white"
        >
          <Link to={`/courses/${id}`}>
            {progress > 0 ? "Continuar" : "Começar"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
