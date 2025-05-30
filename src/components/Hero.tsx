import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const scrollToConnect = () => {
    const element = document.getElementById('social');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-background via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(155,135,245,0.1),rgba(155,135,245,0)_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),rgba(14,165,233,0)_50%)] animate-pulse" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),rgba(139,92,246,0)_50%)] animate-pulse" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="text-center space-y-6 p-4 z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Avatar className="w-64 h-64 mx-auto border-4 border-primary/50 animate-glow">
            <AvatarImage src="/lovable-uploads/b04ffcec-f1dd-46e7-844f-45ddc191035c.png" alt="Omar Fahmy" />
            <AvatarFallback className="bg-muted">OF</AvatarFallback>
          </Avatar>
        </motion.div>

        <TypeAnimation
          sequence={[
            'Omar Fahmy',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={0}
          className="text-5xl md:text-7xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        />

        <TypeAnimation
          sequence={[
            'Mobile Application Developer',
            1000,
          ]}
          wrapper="p"
          speed={50}
          repeat={0}
          className="text-xl md:text-2xl text-muted-foreground"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-8"
        >
          <Button 
            onClick={scrollToConnect}
            className="bg-primary hover:bg-primary/90 text-primary-foreground group px-6 py-3 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Connect With Me
            <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};