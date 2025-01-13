import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-primary/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-64 -right-64 bg-secondary/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        
        {/* Secondary floating elements */}
        <div className="absolute w-96 h-96 top-1/3 left-1/4 bg-accent/20 rounded-full filter blur-2xl animate-float" style={{ animationDelay: "-2s" }}></div>
        <div className="absolute w-96 h-96 bottom-1/3 right-1/4 bg-primary/20 rounded-full filter blur-2xl animate-float" style={{ animationDelay: "-4s" }}></div>
        
        {/* Additional animated elements */}
        <div className="absolute w-72 h-72 top-1/2 left-1/2 bg-secondary/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: "-1s" }}></div>
        <div className="absolute w-64 h-64 bottom-1/4 left-1/3 bg-accent/10 rounded-full filter blur-xl animate-float" style={{ animationDelay: "-5s" }}></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};