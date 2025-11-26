import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    category: "Frontend Basics",
    technologies: ["HTML", "CSS", "JavaScript (Basic)"]
  },
  {
    category: "Programming",
    technologies: ["Python (Beginner)", "SQL (Beginner)"]
  },
  {
    category: "Tools & Platforms",
    technologies: ["Git", "GitHub", "VS Code"]
  },
  {
    category: "Deployment",
    technologies: ["GitHub Pages", "Vercel"]
  },
  {
    category: "Content Creation",
    technologies: ["Kinemaster", "CapCut", "VN Editor"]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I currently work with
          </p>
        </div>
        
        <div className="space-y-10">
          {techCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
