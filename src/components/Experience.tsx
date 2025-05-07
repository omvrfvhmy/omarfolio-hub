import { Section } from "./Section";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const experiences = [

  {
    title: "Founder& CEO",
    company: "Integr8",
    period: "2025-Present",
  },

  {
    title: "Operations Manager& PR Sponsor",
    company: "Remooz",
    period: "2025",
  },

  {
    title: "Program Manager& EventPlanner& Organizer",
    company: "Google Developer Groups New Cairo",
    period: "2024- Present",
  },
  
  {
    title: "Founder& Campus Director",
    company: "Hult Prize at BHI",
    period: "2023- 2025",
  },

  {
    title: "Founder& Leader",
    company: "Project G",
    period: "2024",
  },

  {
    title: "Second Lead",
    company: "Google DSc BHI",
    period: "2023- 2024",
  },
  // Add more experiences here
  {
    title: "Co-Organizer",
    company: "TensorFlow Alexandria User Group",
    period: "2023- 2024",
  },

  {
    title: "Head Of Academic Committee",
    company: "HackerRank, AUFS",
    period: "2022- 2023",
  },

];

export const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 glass-card hover:scale-105 transition-transform bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-lg border-primary/20 shadow-lg hover:shadow-primary/20">
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{exp.title}</h3>
              <p className="text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};