import { Section } from "./Section";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter, Facebook, Instagram, WhatsApp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourusername",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/yournumber",
    icon: WhatsApp,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
  },
];

export const SocialLinks = () => {
  return (
    <Section id="social" title="Connect With Me">
      <div className="flex flex-wrap gap-4 justify-center">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="lg"
            className="glass-card"
            asChild
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </a>
          </Button>
        ))}
      </div>
    </Section>
  );
};