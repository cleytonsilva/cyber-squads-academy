
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, BookOpen } from "lucide-react";

interface ProgressStatsProps {
  completedCourses: number;
  totalCourses: number;
  studyTimeHours: number;
  earnedBadges: number;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({
  completedCourses,
  totalCourses,
  studyTimeHours,
  earnedBadges,
}) => {
  const courseProgress = Math.round((completedCourses / totalCourses) * 100);
  
  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">Seu Progresso</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70">Cursos Concluídos</span>
          <span className="text-cyber-purple font-semibold">{completedCourses}/{totalCourses}</span>
        </div>
        <Progress 
          value={courseProgress} 
          className="h-2 bg-white/20 [&>div]:bg-cyber-purple" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-cyber-dark/40 rounded-lg p-4 flex items-center">
          <div className="mr-3 bg-cyber-purple/20 p-2 rounded-full">
            <BookOpen className="h-5 w-5 text-cyber-purple" />
          </div>
          <div>
            <p className="text-white/60 text-sm">Cursos Concluídos</p>
            <p className="text-white font-bold">{completedCourses}</p>
          </div>
        </div>
        
        <div className="bg-cyber-dark/40 rounded-lg p-4 flex items-center">
          <div className="mr-3 bg-cyber-green/20 p-2 rounded-full">
            <Clock className="h-5 w-5 text-cyber-green" />
          </div>
          <div>
            <p className="text-white/60 text-sm">Tempo de Estudo</p>
            <p className="text-white font-bold">{studyTimeHours} horas</p>
          </div>
        </div>
        
        <div className="bg-cyber-dark/40 rounded-lg p-4 flex items-center">
          <div className="mr-3 bg-cyber-blue/20 p-2 rounded-full">
            <Award className="h-5 w-5 text-cyber-blue" />
          </div>
          <div>
            <p className="text-white/60 text-sm">Badges Conquistados</p>
            <p className="text-white font-bold">{earnedBadges}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
