import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const groups = [
  {
    label: "Frontend",
    items: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "React (UI maintenance)",
      "HTML5",
      "CSS3 / SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
    ],
  },
  {
    label: "Backend",
    items: ["C#", "ASP.NET Core", ".NET Web API", "ASP.NET MVC", "Entity Framework Core", "LINQ", "Dapper", "MediatR"],
  },
  {
    label: "Database",
    items: ["SQL Server", "MySQL", "Stored Procedures", "Indexing", "Query Optimization", "Excel Bulk Import"],
  },
  {
    label: "Architecture",
    items: ["Clean Architecture", "Repository Pattern", "SOLID", "CQRS concepts", "Dependency Injection"],
  },
  {
    label: "Authentication",
    items: ["JWT", "ASP.NET Core Identity", "Claims-based authorization", "Role-based authorization"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Microsoft Azure (fundamentals)", "Docker (running .NET APIs)", "CI/CD (fundamentals)"],
  },
  {
    label: "Tools & Integrations",
    items: ["Git", "GitHub", "GitLab", "Visual Studio", "VS Code", "DevExpress", "Google Maps API", "ChatGPT", "Claude", "GitHub Copilot", "Cursor"],
  },
  {
    label: "Additional",
    items: ["WordPress theme development", "Responsive web design"],
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
