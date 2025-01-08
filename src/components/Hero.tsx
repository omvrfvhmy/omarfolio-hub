import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToConnect = () => {
    const element = document.getElementById('social');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div className="text-center space-y-6 p-4 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-foreground"
        >
          Omar Fahmy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary"
        >
          Mobile Application Developer
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-8"
        >
          <Button 
            onClick={scrollToConnect}
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Connect With Me
            <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};