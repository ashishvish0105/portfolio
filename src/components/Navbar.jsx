import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Archive" },
  { id: "projects", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-xs md:text-sm tracking-widest text-foreground">
          VISHWAKARMA<span className="text-glow">_</span>LOG
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-glow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 border border-border text-xs font-mono uppercase tracking-widest text-foreground hover:border-glow hover:text-glow transition-all whitespace-nowrap"
        >
          <span className="size-1.5 rounded-full bg-glow animate-pulse-soft" />
          Hire Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-glow"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 px-3 py-1.5 border border-glow text-xs font-mono uppercase tracking-widest text-glow mt-2"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

