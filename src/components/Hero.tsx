import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Small Subtitle */}
        <p className="text-muted-foreground text-sm tracking-wide">
          Web Deployment Intern • CSE (AI & ML) Student
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Dhruv Vijay Singh</span>
          <br />
          I Build & Deploy Clean Websites
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I design and deploy simple, responsive websites. I also enjoy
          photography, video editing, content creation, and exploring creative ideas.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button variant="outline" onClick={() => scrollToSection("contact")}>
            Contact Me
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
