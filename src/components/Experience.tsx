import { Section } from "./Section";
import { Card } from "./ui/card";

const experiences = [
  {
    title: "Second Lead",
    company: "Google DSc BHI",
    period: "2023- 2024",
    description: "Led development of mobile applications using Flutter and Firebase.",
  },
  // Add more experiences here
];

export const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 glass-card hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-muted-foreground mb-2">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            <p className="text-sm">{exp.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};