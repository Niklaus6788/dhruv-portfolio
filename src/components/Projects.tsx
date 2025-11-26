import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React, Vite, and Tailwind CSS. Showcases my skills, projects, and content creation journey. Fully responsive and deployed online.",
    tags: ["React", "Tailwind", "Deployment"],
    image: "https://i.ibb.co/JjRK5PhX/website.png"
  },
  {
    title: "Content Creation & Editing Workflow",
    description:
      "A workflow demonstrating my process of creating and editing YouTube and Instagram content using mobile tools like Kinemaster, CapCut, and VN Editor. Includes storytelling, transitions, and creative editing techniques.",
    tags: ["Content Creation", "Video Editing", "Mobile Editing"],
    image: "https://i.ibb.co/qY07z8bB/yt.jpg"
  },
  {
    title: "Python & SQL Practice Projects",
    description:
      "Beginner-friendly Python scripts for automation and SQL practice exercises, including CRUD queries, table creation, and simple problem-solving tasks to strengthen programming fundamentals.",
    tags: ["Python", "SQL", "Beginner"],
    image: "https://i.ibb.co/p6myynSw/sqlwork1.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real projects that reflect my learning journey, creativity, and technical growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift hover:shadow-xl border-border/50 group"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-3 pb-4">
                  <button className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
