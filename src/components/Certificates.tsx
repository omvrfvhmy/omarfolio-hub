import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const certificates = [
  {
    title: "Best graduate from Mobile application development track",
    issuer: "HackerRank, AUFC",
    date: "2023",
    credential: "N/A",
  },

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
    title: "Certificate of Completion 2023 - 2024 GDSC Core Member",
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