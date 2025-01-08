import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const technicalSkills = [
  "Flutter", "Dart", "Firebase", "REST APIs", "Git",
  "Clean Architecture", "State Management", "UI/UX Design","MS Office , Google Spreadsheets",
];

const softSkills = [
  "Problem Solving", "Team Leadership", "Communication",
  "Time Management", "Adaptability", "Critical Thinking","Product Managment", 
  "Teamwork","Public Relations","Event Planning","Marketing","Community Development", "Critical Thinking", 
];

export const Skills = () => {
  return (
    <>
      <Section id="technical-skills" title="Technical Skills">
        <Card className="p-6 glass-card">
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </Section>

      <Section id="soft-skills" title="Non-Technical Skills">
        <Card className="p-6 glass-card">
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </Section>
    </>
  );
};