import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "History Verse",
    description: "a mobile application serving as an automatic museum guide",
    technologies: ["jetpack compose", "Firebase", "REST APIs", "Gemini" , "AWS EC2"],
    githubUrl: "https://github.com/yassenRamadan1/HistoryVerse",
    liveUrl: "#",
  },
  {
    title: "POS system",
    description: "Web Application For a Complete POS System for restaurants",
    technologies: ["Flutter", "Firebase", "laravel"],
    githubUrl: "https://github.com/yassenRamadan1/HistoryVerse",
    liveUrl: "#",
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="p-6 glass-card flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Live
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};