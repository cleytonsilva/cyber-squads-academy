
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Shield, 
  ChevronDown, 
  User, 
  Book 
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in real app
  const [userRole, setUserRole] = useState<string>("student"); // This would come from auth context in real app

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // For demo purposes only
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    // Cycle through roles for demo
    if (!isLoggedIn) {
      setUserRole(prevRole => 
        prevRole === "student" ? "creator" : 
        prevRole === "creator" ? "admin" : "student"
      );
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-purple/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-cyber-purple animate-pulse-glow" />
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            E<span className="text-cyber-purple">SQUADS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/courses" className="text-white/80 hover:text-cyber-purple transition-colors">
            Cursos
          </Link>
          <Link to="/about" className="text-white/80 hover:text-cyber-purple transition-colors">
            Sobre Nós
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-white/80 hover:text-cyber-purple transition-colors">
              <span>Comunidade</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-cyber-dark border border-cyber-purple/20 hidden group-hover:block animate-fade-in">
              <div className="py-1">
                <Link to="/forum" className="block px-4 py-2 text-sm text-white/80 hover:bg-cyber-purple/20">
                  Fórum
                </Link>
                <Link to="/events" className="block px-4 py-2 text-sm text-white/80 hover:bg-cyber-purple/20">
                  Eventos
                </Link>
              </div>
            </div>
          </div>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Show these links based on user role */}
              {(userRole === "admin" || userRole === "creator") && (
                <Link 
                  to="/admin/dashboard" 
                  className="text-cyber-green hover:text-cyber-green-light transition-colors flex items-center"
                >
                  <Book className="h-4 w-4 mr-1" />
                  <span>Admin</span>
                </Link>
              )}
              <Link 
                to="/dashboard" 
                className="text-cyber-green hover:text-cyber-green-light transition-colors flex items-center"
              >
                <User className="h-4 w-4 mr-1" />
                <span>Dashboard</span>
              </Link>
              <Button 
                onClick={toggleLogin}
                variant="outline" 
                className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20"
              >
                Sair
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button 
                onClick={toggleLogin}
                variant="outline" 
                className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20"
              >
                Login
              </Button>
              <Button className="bg-cyber-purple hover:bg-cyber-purple-dark text-white">
                Registrar
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cyber-dark border-t border-cyber-purple/20 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/courses" 
              className="block text-white/80 hover:text-cyber-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Cursos
            </Link>
            <Link 
              to="/about" 
              className="block text-white/80 hover:text-cyber-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/forum" 
              className="block text-white/80 hover:text-cyber-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Fórum
            </Link>
            <Link 
              to="/events" 
              className="block text-white/80 hover:text-cyber-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Eventos
            </Link>

            {isLoggedIn ? (
              <>
                {(userRole === "admin" || userRole === "creator") && (
                  <Link 
                    to="/admin/dashboard" 
                    className="block text-cyber-green hover:text-cyber-green-light transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Painel Admin
                  </Link>
                )}
                <Link 
                  to="/dashboard" 
                  className="block text-cyber-green hover:text-cyber-green-light transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Button 
                  onClick={() => {
                    toggleLogin();
                    setIsOpen(false);
                  }}
                  variant="outline" 
                  className="w-full border-cyber-purple/50 text-white hover:bg-cyber-purple/20"
                >
                  Sair
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  onClick={() => {
                    toggleLogin();
                    setIsOpen(false);
                  }}
                  variant="outline" 
                  className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="bg-cyber-purple hover:bg-cyber-purple-dark text-white"
                >
                  Registrar
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
