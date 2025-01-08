import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <section id="social" className="section-container">
      <h2 className="section-heading">Let's Connect</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
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
                  className="w-12 h-12 rounded-full"
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                </Button>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};