import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "History Verse",
    description: "a mobile application serving as an automatic museum guide",
    technologies: ["jetpack compose","AR",   "Firebase", "REST APIs",".net Framework" ,  "Django" ,"Flask" ,"Google Cloud" ,  "Yolo", "TensorFlow","LLaMa","Gemini", "LangChain + Chroma", "Hugging Face", "VPS" ,"EC2" ,"S3" ,"Route 53" , ],
    githubUrl: "https://github.com/yassenRamadan1/HistoryVerse",
    liveUrl: "https://www.canva.com/design/DAF96GA77sg/OYadVyZRb9aq8eY-flpN1g/view?utm_content=DAF96GA77sg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdc6cbc1e79",
  },
  {
    title: "POS system",
    description: "Web Application For a Complete POS System for restaurants",
    technologies: ["Flutter", "Firebase", "laravel"],
    githubUrl: "#",
    liveUrl: "#",
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 glass-card hover:translate-y-[-8px] transition-all duration-300 bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-lg border-primary/20">
              <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 transition-colors">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 transition-colors">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Live
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};