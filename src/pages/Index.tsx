import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Languages } from "@/components/Languages";
import { SocialLinks } from "@/components/SocialLinks";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-show');
        } else {
          entry.target.classList.remove('scroll-show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('section');
    hiddenElements.forEach((el) => {
      el.classList.add('scroll-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Languages />
      <SocialLinks />
    </div>
  );
};

export default Index;