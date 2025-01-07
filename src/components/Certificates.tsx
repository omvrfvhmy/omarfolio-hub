import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const certificates = [
  {
    title: "Certificate Name",
    issuer: "Issuing Organization",
    date: "2023",
    credential: "ABC123",
  },
  // Add more certificates here
];

export const Certificates = () => {
  return (
    <Section id="certificates" title="Certificates & Courses">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index} className="p-6 glass-card hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
            <div className="flex justify-between items-center">
              <Badge variant="outline">{cert.date}</Badge>
              <span className="text-xs text-muted-foreground">ID: {cert.credential}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};