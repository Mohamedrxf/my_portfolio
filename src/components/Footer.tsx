import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="mailto:mohamedrafeeqkhanrafeeq@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mohamed Rafeeq Khan A. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="rounded-full"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
