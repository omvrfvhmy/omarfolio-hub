import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Facebook, Instagram, MessageCircle } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/omvrfvhmy",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/omar-fahmy-5a7787255",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/omvrfvhmy",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/omvrfvhmy",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/omvrfvhmy",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/+201274712755",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:omaffhj@gmail.com",
    },
  ];

  return (
    <section id="social" className="section-container relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <h2 className="section-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Let's Connect</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-full bg-muted/10 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 transition-all duration-300 group-hover:text-primary group-hover:scale-110 group-hover:rotate-12" />
                </Button>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};