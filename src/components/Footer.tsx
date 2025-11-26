import { Github, Linkedin, Mail, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Footer Text */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dhruv Vijay Singh. Built with React, Tailwind & TypeScript.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            
            {/* GitHub */}
            <a
              href="https://github.com/Niklaus6788"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dhruv-vijay-singh-15002029a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mainly_dhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@pureevil34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:manhasdhruv16@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
