
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Shield, UserCog, User } from "lucide-react";

type UserRole = 'admin' | 'creator' | 'instructor' | 'student' | 'basic';

interface UserRoleBadgeProps {
  role: UserRole;
}

const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role }) => {
  const getBadgeStyles = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return {
          className: "bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30",
          icon: <ShieldCheck className="h-3.5 w-3.5 mr-1" />
        };
      case 'creator':
        return {
          className: "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30",
          icon: <Shield className="h-3.5 w-3.5 mr-1" />
        };
      case 'instructor':
        return {
          className: "bg-cyber-green/20 text-cyber-green border-cyber-green/30",
          icon: <UserCog className="h-3.5 w-3.5 mr-1" />
        };
      case 'student':
        return {
          className: "bg-white/10 text-white/70 border-white/20",
          icon: <User className="h-3.5 w-3.5 mr-1" />
        };
      case 'basic':
        return {
          className: "bg-white/5 text-white/50 border-white/10",
          icon: <User className="h-3.5 w-3.5 mr-1" />
        };
      default:
        return {
          className: "bg-white/10 text-white/70 border-white/20",
          icon: <User className="h-3.5 w-3.5 mr-1" />
        };
    }
  };

  const { className, icon } = getBadgeStyles(role);

  return (
    <Badge variant="outline" className={`flex items-center px-2 py-0.5 ${className}`}>
      {icon}
      <span className="capitalize">
        {role}
      </span>
    </Badge>
  );
};

export default UserRoleBadge;
