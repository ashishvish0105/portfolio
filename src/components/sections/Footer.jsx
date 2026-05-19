import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-8 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="font-mono text-[9px] md:text-xs text-muted-foreground tracking-widest text-center sm:text-left">
          © {new Date().getFullYear()} ASHISH_VISHWAKARMA · ALL_SYSTEMS_OPERATIONAL
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="size-8 md:size-9 flex items-center justify-center border border-border text-muted-foreground hover:text-glow hover:border-glow transition-all"
          >
            <Github className="size-3.5 md:size-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="size-8 md:size-9 flex items-center justify-center border border-border text-muted-foreground hover:text-glow hover:border-glow transition-all"
          >
            <Linkedin className="size-3.5 md:size-4" />
          </a>
          <a
            href="mailto:ashish@example.com"
            aria-label="Email"
            className="size-8 md:size-9 flex items-center justify-center border border-border text-muted-foreground hover:text-glow hover:border-glow transition-all"
          >
            <Mail className="size-3.5 md:size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

