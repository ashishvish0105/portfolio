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
    desc: "Aviation data platform with real-time flight monitoring dashboards.",
    tech: ["Angular", ".NET Core", "SQL Server"],
    image: pilotbird,
  },
  {
    name: "Amazon Tools",
    desc: "Seller analytics suite with product tracking and revenue insights.",
    tech: ["Angular", "Web API", "Charts"],
    image: amazon,
  },
  {
    name: "Cloud Labs",
    desc: "Browser-based virtual lab environment for cloud computing training.",
    tech: ["Angular", ".NET", "Docker"],
    image: cloudlabs,
  },
  {
    name: "GHI Portal",
    desc: "Government healthcare insurance portal with patient records and claims.",
    tech: ["Angular", ".NET Core", "SQL"],
    image: ghi,
  },
  {
    name: "AquaFish",
    desc: "Aquarium management app with species tracking and water quality alerts.",
    tech: ["Angular", "TypeScript", "PWA"],
    image: aquafish,
  },
  {
    name: "Portfolio Website",
    desc: "This website — built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer"],
    image: portfolio,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-8 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="04" title="Work" subtitle="// selected projects" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-background border border-border hover:border-glow/50 transition-all duration-500 overflow-hidden"
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
                <div className="absolute top-3 left-3 font-mono text-[10px] text-glow uppercase tracking-widest border border-glow/30 px-2 py-0.5 bg-background/60 backdrop-blur">
                  Case · 0{i + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground group-hover:text-glow transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground hover:text-glow transition-colors"
                  >
                    <ExternalLink className="size-3" />
                    Live
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-glow transition-colors"
                  >
                    <Github className="size-3" />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
