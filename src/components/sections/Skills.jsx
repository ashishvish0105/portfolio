import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const groups = [
  {
    label: "Frontend",
    items: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "React (UI maintenance)",
      "HTML5",
      "CSS3 / SCSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    items: ["C#", "ASP.NET Core", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework Core", "LINQ", "Dapper", "MediatR"],
  },
  {
    label: "Database",
    items: ["SQL Server", "MySQL", "Stored Procedures", "Indexing", "Query Optimization", "Excel Bulk Import"],
  },
  {
    label: "Architecture & Auth",
    items: ["Clean Architecture", "Repository Pattern", "SOLID", "CQRS", "Dependency Injection", "JWT", "OAuth"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Microsoft Azure (fundamentals)", "Docker", "CI/CD (fundamentals)", "Git"],
  },
  {
    label: "Tools & Integrations",
    items: ["GitHub", "Visual Studio", "VS Code", "DevExpress", "Google Maps API", "ChatGPT", "Claude", "GitHub Copilot", "Cursor"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="02" title="Stack" subtitle="// technical capabilities" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
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

              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="border border-border px-2 py-1 text-[10px] md:text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
