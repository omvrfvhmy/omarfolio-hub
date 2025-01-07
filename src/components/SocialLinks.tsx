import { Section } from "./Section";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter, Facebook, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/omvrfvhmy",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/omar-fahmy-5a7787255/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/omvrfvhmy",
    icon: Twitter,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/omvrfvhmy/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/omvrfvhmy",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+2001274712755",
    icon: MessageCircle,
  },
  {
    name: "Email",
    url: "mailto:omaffhj@gmail.com",
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