import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Google Cloud Fundamentals (Coursera)",
    issuer: "Google Cloud",
    year: "Nov 6, 2025",
    credential: "Verified Certificate"
  },
  {
    title: "Google Cloud Study Jams: Cloud Computing Foundations",
    issuer: "Google Cloud Skills Boost",
    year: "May 2024",
    credential: "Completion Certificate"
  },
  {
    title: "AICTE Metaverse Creators Program (VR Phase 1)",
    issuer: "AICTE | Eduskills",
    year: "April 2024",
    credential: "Participation Certificate"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certifications and programs I have completed as part of my learning journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift hover:shadow-lg border-border/50 bg-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="secondary" className="text-xs">
                  {cert.year}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
              <Badge variant="outline" className="text-xs">
                {cert.credential}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
