import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or opportunities!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* EMAIL */}
          <Card className="p-6 text-center hover-lift hover:shadow-lg border-border/50">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">
              manhasdhruv16@gmail.com
            </p>
          </Card>
          
          {/* LINKEDIN */}
          <Card className="p-6 text-center hover-lift hover:shadow-lg border-border/50">
            <Linkedin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">
              dhruv-vijay-singh-15002029a
            </p>
          </Card>
          
          {/* GITHUB */}
          <Card className="p-6 text-center hover-lift hover:shadow-lg border-border/50">
            <Github className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground">
              Niklaus6788
            </p>
          </Card>

        </div>
        
        <Card className="p-8 border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input 
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border/50"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="border-border/50 resize-none"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full hover:scale-105 transition-transform">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
