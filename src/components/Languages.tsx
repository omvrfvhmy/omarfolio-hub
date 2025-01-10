import { Section } from "./Section";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 glass-card bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-lg border-primary/20 shadow-lg hover:shadow-primary/20">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{lang.name}</h3>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
              <Progress value={lang.proficiency} className="h-2 bg-primary/10" indicatorClassName="bg-gradient-to-r from-primary to-secondary" />
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};