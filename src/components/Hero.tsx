import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const TechIcon = ({ 
  name, 
  className,
  style 
}: { 
  name: string; 
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }} // Reduced from 0.5
    className={`p-4 glass-card hover:scale-105 transition-transform cursor-pointer ${className}`} // Reduced scale effect
    style={style}
  >
    <img src={`/tech/${name}.png`} alt={name} className="w-8 h-8" /> // Changed from .svg to .png
  </motion.div>
);

export const Hero = () => {
  const techIcons = [
    { name: "flutter", delay: 0 },
    { name: "kotlin", delay: 0.1 },
    { name: "swift", delay: 0.2 },
    { name: "android", delay: 0.3 },
    { name: "ios", delay: 0.4 },
  ];

  const scrollToConnect = () => {
    const element = document.getElementById('social');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{
              delay: tech.delay,
              duration: 0.3, // Reduced from 0.5
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4, // Increased from 2 to make animation less frequent
            }}
            className={`absolute ${
              index % 2 === 0 ? "left-[10%]" : "right-[10%]"
            } top-[${(index + 1) * 15}%]`}
          >
            <TechIcon name={tech.name} />
          </motion.div>
        ))}
      </div>

      <div className="text-center space-y-6 p-4 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-foreground"
        >
          Omar Fahmy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary"
        >
          Mobile Application Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {techIcons.map((tech, index) => (
            <TechIcon 
              key={tech.name} 
              name={tech.name} 
              className="animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Button 
            onClick={scrollToConnect}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Connect With Me
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};