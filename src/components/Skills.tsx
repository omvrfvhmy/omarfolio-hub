import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const technicalSkills = [
  "Flutter", "Dart", "Firebase", "REST APIs", "Git",
  "Clean Architecture", "State Management", "UI/UX Design", "MS Office , Google Spreadsheets",
];

const softSkills = [
  "Problem Solving", "Team Leadership", "Communication",
  "Time Management", "Adaptability", "Critical Thinking (Technical)", 
  "Product Management", "Teamwork", "Public Relations",
  "Event Planning", "Marketing", "Community Development", 
  "Critical Thinking (Business)",
];

export const Skills = () => {
  return (
    <>
      <Section id="technical-skills" title="Technical Skills">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 glass-card bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-lg border-primary/20 shadow-lg hover:shadow-primary/20">
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={`tech-${index}-${skill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>

      <Section id="soft-skills" title="Non-Technical Skills">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 glass-card bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-lg border-primary/20 shadow-lg hover:shadow-primary/20">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={`soft-${index}-${skill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="outline" className="text-sm border-primary/20 hover:bg-primary/10">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>
    </>
  );
};