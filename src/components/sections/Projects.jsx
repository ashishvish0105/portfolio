import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./About";
import pilotbird from "@/assets/project-pilotbird.jpg";
import amazon from "@/assets/project-amazon.jpg";
import cloudlabs from "@/assets/project-cloudlabs.jpg";
import ghi from "@/assets/project-ghi.jpg";
import aquafish from "@/assets/project-aquafish.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

const projects = [
  {
    name: "PilotBird",
    desc: "Developed an AI-powered insurance analytics platform for the US, UK, and Canadian markets, collecting and processing publicly available customer data from multiple online sources",
    tech: ["Angular", ".NET Core", "SQL Server", "Docker"],
    image: pilotbird,
    liveUrl: "https://www.pilotbird.com/",
  },
  {
    name: "Amazon Tools",
    desc: "Developed automated data extraction and reporting tools for Amazon sellers, processing over 5,000 product records daily.",
    tech: ["Angular", "Web API", "Charts"],
    image: amazon,
    liveUrl: "",
  },
  {
    name: "Cloud Labs",
    desc: "Built a full-stack event management platform supporting 40+ events, enabling seamless event registration and participant management.",
    tech: ["Angular", ".NET", "SQL Server"],
    image: cloudlabs,
    liveUrl: "",
  },
  {
    name: "GHI Portal",
    desc: "Developed a service management system for a US-based chimney repair company, streamlining service request and workforce operations.",
    tech: ["Angular", "DevExpress dashboard", ".NET Core", "SQL Server"],
    image: ghi,
    liveUrl: "",
  },
  {
    name: "AquaFish",
    desc: "Aquarium management app with selling fish and species tracking and water quality alerts.",
    tech: ["Angular", "TypeScript", "PWA"],
    image: aquafish,
    liveUrl: "https://aquafish.vercel.app/",
  },
  {
    name: "Portfolio Website",
    desc: "This website — built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer", "EmailJS"],
    image: portfolio,
    liveUrl: "https://your-portfolio-url.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="04" title="Work" subtitle="// selected projects" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-background border border-border hover:border-glow/50 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                <div className="absolute top-2 md:top-3 left-2 md:left-3 font-mono text-[9px] md:text-[10px] text-glow uppercase tracking-widest border border-glow/30 px-1.5 md:px-2 py-0.5 bg-background/60 backdrop-blur">
                  Case · 0{i + 1}
                </div>
              </div>

              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-glow transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>

                <div className="mt-3 md:mt-4 flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-mono text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 md:mt-6 flex items-center gap-4 pt-4 border-t border-border">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground hover:text-glow transition-colors"
                    >
                      <ExternalLink className="size-3" />
                      <span>Live</span>
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-glow transition-colors"
                    >
                      <Github className="size-3" />
                      <span>Code</span>
                    </a>
                  {/* <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground hover:text-glow transition-colors"
                  >
                    <ExternalLink className="size-3" />
                    <span className="hidden sm:inline">Live</span>
                    <span className="sm:hidden">Live</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-glow transition-colors"
                  >
                    <Github className="size-3" />
                    <span className="hidden sm:inline">Source</span>
                    <span className="sm:hidden">Code</span>
                  </a> */}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

