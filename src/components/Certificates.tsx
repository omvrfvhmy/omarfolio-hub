import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const certificates = [
 

  {
    title: "The complete Dart Learning Guide",
    issuer: "Udemy",
    date: "2023",
    credential: "UC-06111bc1-9b5d-4fa1-b1f5-7d32ca6495663",
  },

  {
    title: "Complete Flutter & Dart Development Course",
    issuer: "Udemy",
    date: "2023",
    credential: "UC-9a56593a-530e-4b59-8c68-96e77fcf7151",
  },

 
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "2025",
    credential: "f574a033d0a58ab6d7c8f0b1ac0af77f07845d73",
  },

  {
    title: "Best graduate from Mobile application development track",
    issuer: "HackerRank, AUFC",
    date: "2022",
    credential: "N/A",
  },
  {
    title: "Certificate of Completion HackerRank AUFS Head of Academic Committee ",
    issuer: "HackerRank, AUFC",
    date: "2023",
    credential: "N/A",
  },
  {
    title: "Certificate of Completion 2023 - 2024 GDSC Second Lead",
    issuer: "Google DSC",
    date: "2024",
    credential: "N/A",
  },
  // Add more certificates here
];

export const Certificates = () => {
  return (
    <Section id="certificates" title="Certificates & Courses">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 glass-card hover:scale-105 transition-transform bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-lg border-primary/20 shadow-lg hover:shadow-primary/20">
              <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="border-primary/20 bg-primary/10">{cert.date}</Badge>
                <span className="text-xs text-muted-foreground">ID: {cert.credential}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};