import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default Index;