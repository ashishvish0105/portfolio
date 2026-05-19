import { motion } from "framer-motion";
import { Code, Database, Layers, Palette, Sparkles } from "lucide-react";
import { SectionHeader } from "./About";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Pixel-perfect Angular & React interfaces with reactive state and smooth UX.",
  },
  {
    icon: Database,
    title: "Backend API Development",
    desc: ".NET Core APIs, SQL Server schemas, and authentication built for scale.",
  },
  {
    icon: Layers,
    title: "Full Stack Web Apps",
    desc: "End-to-end ownership from database design to production deployment.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Clean, modern interfaces translated directly into production code.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    desc: "Faster delivery using Cursor, Claude, and Copilot — without cutting corners.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="05" title="Services" subtitle="// what i do" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-background p-4 md:p-6 lg:p-8 hover:bg-surface/40 transition-all duration-300 min-h-[240px] md:min-h-[260px] flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="size-10 md:size-12 flex items-center justify-center flex-shrink-0 bg-surface-elevated border border-border text-glow group-hover:border-glow/40 group-hover:bg-glow/10 transition-all">
                  <s.icon className="size-4 md:size-5" />
                </div>
                <span className="font-mono text-[9px] md:text-[10px] text-muted-foreground tracking-widest">
                  /0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-auto pt-4 md:pt-6 h-px w-0 bg-glow group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
       

