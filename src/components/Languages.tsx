import { Section } from "./Section";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const languages = [
  {
    name: "Arabic",
    level: "Native",
    proficiency: 100,
  },
  {
    name: "English",
    level: "Professional",
    proficiency: 90,
  },
  // Add more languages here
];

export const Languages = () => {
  return (
    <Section id="languages" title="Languages">
      <div className="grid gap-6 md:grid-cols-2">
        {languages.map((lang, index) => (
          <Card key={index} className="p-6 glass-card">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">{lang.name}</h3>
              <span className="text-sm text-muted-foreground">{lang.level}</span>
            </div>
            <Progress value={lang.proficiency} className="h-2" />
          </Card>
        ))}
      </div>
    </Section>
  );
};