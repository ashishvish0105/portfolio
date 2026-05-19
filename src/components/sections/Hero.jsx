import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import portrait from "@/assets/ashish-portrait.jpg";
import { TypingText } from "@/components/TypingText";

export function Hero() {
  return (
    <section id="top" className="relative min-h-dvh pt-24 md:pt-28 pb-12 md:pb-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg grid-bg-mask pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[500px] md:w-[900px] h-[300px] md:h-[400px] rounded-full bg-glow/10 blur-[100px] md:blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-border bg-surface/40 backdrop-blur-md mb-6 md:mb-8 text-center md:text-left">
            <span className="size-1.5 rounded-full bg-glow animate-pulse-soft flex-shrink-0" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-foreground/80 whitespace-nowrap">
              System Active · Open to Opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground tracking-tighter leading-[0.9]">
            Ashish
            <br />
            <span className="font-medium glow-text">Vishwakarma</span>
          </h1>

          <div className="mt-4 md:mt-6 font-mono text-sm md:text-base text-muted-foreground">
            <span className="text-glow">$</span>{" "}
            <TypingText
              words={[
                "Full Stack Developer",
                "Angular Specialist",
                ".NET Engineer",
                "AI-assisted Builder",
              ]}
              className="text-foreground"
            />
          </div>

          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-[40ch] leading-relaxed">
            Building modern, scalable web applications with{" "}
            <span className="text-foreground">Angular</span> on the front and resilient{" "}
            <span className="text-foreground">.NET</span> on the back.
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-widest hover:bg-glow transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Hire Me
              <ArrowRight className="size-3 md:size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 border border-border text-foreground font-mono text-xs font-semibold uppercase tracking-widest hover:border-glow hover:text-glow transition-all duration-300 whitespace-nowrap"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 text-muted-foreground font-mono text-xs uppercase tracking-widest hover:text-glow transition-colors whitespace-nowrap"
            >
              <Download className="size-3 md:size-3.5" />
              <span className="hidden sm:inline">Resume.pdf</span>
              <span className="sm:hidden">Resume</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-6 lg:gap-12 border-t border-border pt-6 md:pt-8 max-w-xl">
            <div>
              <div className="font-mono text-xl md:text-2xl lg:text-3xl text-foreground tabular-nums">5+</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-mono text-xl md:text-2xl lg:text-3xl text-foreground tabular-nums">20+</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                Projects Shipped
              </div>
            </div>
            <div>
              <div className="font-mono text-xl md:text-2xl lg:text-3xl text-glow tabular-nums">99.9%</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                Reliability
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="col-span-12 lg:col-span-5 relative"
        >
          <div className="corner-frame relative p-2 md:p-3 border border-border bg-surface/30 backdrop-blur-md group transition-all duration-500 hover:border-glow/30">
            <div className="bg-surface aspect-[4/5] overflow-hidden scanline">
              <img
                src={portrait}
                alt="Ashish Vishwakarma — Full Stack Developer"
                width={800}
                height={1024}
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Telemetry */}
            <div className="absolute -right-2 md:-right-3 top-12 md:top-16 hidden sm:block bg-background border border-border p-2 md:p-3 font-mono text-[9px] md:text-[10px] space-y-2 shadow-xl">
              <div className="flex justify-between gap-4 md:gap-6">
                <span className="text-muted-foreground">LOC:</span>
                <span className="text-foreground">India</span>
              </div>
              <div className="flex justify-between gap-4 md:gap-6">
                <span className="text-muted-foreground">ROLE:</span>
                <span className="text-glow">FULL_STACK</span>
              </div>
              <div className="flex justify-between gap-4 md:gap-6">
                <span className="text-muted-foreground">STATUS:</span>
                <span className="text-glow flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-glow animate-pulse-soft" />
                  ONLINE
                </span>
              </div>
            </div>

            <div className="mt-2 md:mt-4 flex justify-between items-center px-1">
              <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
                <Sparkles className="inline size-2 md:size-3 text-glow mr-1" />
                signature.v3.0.4
              </span>
              <div className="flex gap-1">
                <div className="size-1 bg-glow" />
                <div className="size-1 bg-border" />
                <div className="size-1 bg-border" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

