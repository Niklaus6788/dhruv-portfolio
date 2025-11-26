import { Camera, Video, Code, BookText, Mic, Globe, Image, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Skilled in mobile editing using Kinemaster, CapCut, VN Editor – transitions, timing, and YouTube/Instagram short-form edits."
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Creative mobile photography, color correction, portrait shots, and aesthetic composition."
  },
  {
    icon: Code,
    title: "Web Development (Basics)",
    description: "HTML, CSS, JavaScript basics. Built and deployed a personal portfolio website using modern tools."
  },
  {
    icon: BookText,
    title: "Python (Beginner)",
    description: "Basic scripting, problem-solving, and understanding of programming fundamentals."
  },
  {
    icon: Database,
    title: "SQL (Basics)",
    description: "Basic CRUD operations, table management, and relational database understanding."
  },
  {
    icon: Globe,
    title: "Content Creation",
    description: "YouTube content creation, editing, thumbnails, social media branding, and growth strategy."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">My Skillset</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of technical knowledge, creativity, and hands-on content creation experience.
          </p>
        </div>
        
        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover-lift hover:shadow-lg border-border/50 bg-card transition"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
