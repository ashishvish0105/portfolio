import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const groups = [
  {
    label: "Frontend",
    items: [
      { name: "Angular", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SCSS / CSS / HTML", level: 95 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: ".NET Core", level: 90 },
      { name: "Web API", level: 88 },
      { name: "SQL Server", level: 85 },
      { name: "Entity Framework", level: 80 },
    ],
  },
  {
    label: "Tools & AI",
    items: [
      { name: "GitHub", level: 92 },
      { name: "Cursor", level: 88 },
      { name: "Claude", level: 86 },
      { name: "ChatGPT / Copilot", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="02" title="Stack" subtitle="// technical capabilities" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-background p-4 md:p-6 lg:p-8 hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <span className="font-mono text-[9px] md:text-[10px] text-glow tracking-widest">
                  0{gi + 1}
                </span>
                <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground">
                  {g.label}
                </h3>
              </div>

              <div className="space-y-4 md:space-y-5">
                {g.items.map((item, i) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1.5 md:mb-2">
                      <span className="text-xs md:text-sm text-foreground">{item.name}</span>
                      <span className="font-mono text-[9px] md:text-[10px] text-muted-foreground tabular-nums">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-px bg-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                        className="h-full bg-glow shadow-[0_0_8px_var(--color-glow)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

