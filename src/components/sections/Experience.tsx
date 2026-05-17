import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const items = [
  {
    company: "MegaMinds Technologies",
    role: "Full Stack Developer",
    period: "2025 — Present",
    detail:
      "Leading development of the PilotBird platform — building Angular dashboards and .NET APIs for aviation data workflows.",
    tags: ["Angular", ".NET Core", "SQL Server", "PilotBird"],
    active: true,
  },
  {
    company: "Vision Infotech",
    role: "Angular + .NET Developer",
    period: "2022 — 2024",
    detail:
      "Delivered full-stack web apps for clients in healthcare and e-commerce. Built reusable Angular component libraries and REST APIs.",
    tags: ["Angular", ".NET Web API", "Entity Framework"],
  },
  {
    company: "Goldenmace IT Solutions",
    role: "Web Designer",
    period: "2020 — 2022",
    detail:
      "Designed and developed responsive marketing sites and dashboards. Bridged design and engineering with pixel-perfect handoffs.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="03" title="Archive" subtitle="// experience timeline" />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div
                    className={`size-3 rounded-full ${
                      item.active ? "bg-glow shadow-[0_0_12px_var(--color-glow)]" : "bg-border"
                    }`}
                  />
                  {item.active && (
                    <div className="absolute inset-0 size-3 rounded-full bg-glow animate-ping opacity-50" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`glass p-6 hover:border-glow/40 transition-all ${
                    i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-glow uppercase tracking-widest">
                      {item.period}
                    </span>
                    {item.active && (
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-glow/10 text-glow border border-glow/30 uppercase tracking-widest">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{item.company}</h3>
                  <p className="text-sm text-muted-foreground mt-1 font-mono">{item.role}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {item.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
