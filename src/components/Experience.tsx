import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "B.Tech Student – CSE (AI & ML)",
    company: "MIET Jammu (Autonomous), Kot Bhalwal",
    period: "October 2023 – Present",
    description:
      "Currently pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning. Learning Python, HTML, CSS, JavaScript, and SQL while working on beginner projects like portfolio websites, SQL schema designs, and basic automation scripts."
  },
  {
    title: "Content Creator (YouTube)",
    company: "Madara Gaming – Personal Channel",
    period: "2021 – Present",
    description:
      "Create gaming and montage content using mobile editing tools such as Kinemaster, CapCut, and VN Editor. Developed skills in storytelling, transitions, syncing clips with music, and online audience engagement."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <p className="text-muted-foreground text-lg">
            My learning journey as a student and content creator
          </p>
        </div>
        
        <div className="relative space-y-8">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 space-y-2 group">
              <div className="absolute left-0 md:left-6 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform"></div>
              
              <div className="space-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary font-medium flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </p>
                <p className="text-muted-foreground leading-relaxed pt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
