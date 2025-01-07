import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Languages } from "@/components/Languages";
import { SocialLinks } from "@/components/SocialLinks";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Languages />
      <SocialLinks />
      <ContactForm />
    </div>
  );
};

export default Index;