import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const items = [
  {
    company: "Freelance / Personal Project · eMyShop",
    role: "Full Stack Developer",
    period: "May 2026 - Present",
    location: "Navsari, India",
    highlights: [
      "Designed and built an e-commerce and inventory management platform from scratch using Angular, ASP.NET Core Web API, SQL Server, and Microsoft Azure.",
      "Developed 50+ APIs and core product, category, inventory, customer, and order management modules.",
      "Implemented authentication and authorization, plus dashboard and reporting features.",
      "Continue to enhance functionality and integrate frontend screens with backend APIs.",
    ],
    tags: ["Angular", "ASP.NET Core Web API", "SQL Server", "Microsoft Azure fundamentals"],
    active: true,
  },
  {
    company: "Megaminds Tech Private Limited",
    role: "Full Stack Developer · Angular & .NET",
    period: "May 2025 - April 2026",
    location: "Surat, India",
    highlights: [
      "Developed and maintained Angular screens and 30+ ASP.NET Core REST APIs for PilotBird, an insurance analytics platform serving the US, UK, and Canada.",
      "Focused on the Utility and Workbench modules, including frontend-backend integration.",
      "Implemented customer-data processing, verification, and publishing workflows, including review screens.",
      "Investigated application issues and supported production fixes while collaborating with a five-developer team, Team Lead, and Project Manager.",
    ],
    tags: ["Angular", "ASP.NET Core Web API", "SQL Server"],
  },
  {
    company: "Freelance · Atual Trader",
    role: "Full Stack Developer",
    period: "September 2024 - April 2025",
    highlights: [
      "Developed a wholesale trading and inventory management web application using ASP.NET Core MVC and SQL Server.",
      "Implemented product, stock, inventory, and vendor management workflows.",
      "Reduced API response time from approximately two minutes to two seconds and improved page loading through optimization and UI redesign.",
    ],
    tags: ["ASP.NET Core MVC", "SQL Server", "API Optimization"],
  },
  {
    company: "Vision Infotech",
    role: "Full Stack Developer · Angular, React & .NET",
    period: "April 2022 - September 2024",
    location: "Navsari, India",
    highlights: [
      "GHI Portal: Built service-management screens and APIs, integrated Google Maps for location tracking and service validation, and delivered DevExpress dashboards, reports, and data grids.",
      "Cloud Labs: Maintained an event-management application supporting 40+ events, with registration and automated email notifications.",
      "Amazon Tools: Built data analysis features and SQL Server Excel imports for 10,000+ records; improved bulk insertion and applied the Repository Pattern and role-based access.",
      "AquaFish: Maintained fish and aquarium e-commerce features, improving API and page responsiveness, responsive layouts, and SEO.",
      "Hana: Enhanced an MVC flower-sales and vendor-management application, delivering vendor, customer, product, order, and sales workflows and improving page performance.",
    ],
    tags: ["Angular", "React UI maintenance", "ASP.NET Core MVC", ".NET Web API", "SQL Server", "DevExpress"],
  },
  {
    company: "Goldenmace IT Solutions",
    role: "Web Designer & Frontend Developer",
    period: "April 2021 - March 2022",
    location: "Navsari, India",
    highlights: [
      "Designed and developed responsive websites and WordPress themes using WordPress, HTML5, CSS3, JavaScript, and Tailwind CSS.",
      "Created 20+ premium WordPress themes sold on ThemeForest.",
      "Built responsive layouts to improve usability across screen sizes.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "UI/UX Design"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="03" title="Experience" subtitle="// career history" />

        <div className="mt-12 md:mt-16 relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Node */}
                <div className="absolute left-3 md:left-1/2 top-1.5 md:top-2 -translate-x-1/2 z-10">
                  <div
                    className={`size-2 md:size-3 rounded-full ${
                      item.active ? "bg-glow shadow-[0_0_12px_var(--color-glow)]" : "bg-border"
                    }`}
                  />
                  {item.active && (
                    <div className="absolute inset-0 size-2 md:size-3 rounded-full bg-glow animate-ping opacity-50" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`glass p-4 md:p-5 lg:p-6 hover:border-glow/40 transition-all ${
                    i % 2 === 0 ? "md:mr-4 lg:mr-8" : "md:ml-4 lg:ml-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap gap-2">
                    <span className="font-mono text-[9px] md:text-[10px] text-glow uppercase tracking-widest">
                      {item.period}
                    </span>
                    {item.active && (
                      <span className="font-mono text-[8px] md:text-[9px] px-1.5 md:px-2 py-0.5 bg-glow/10 text-glow border border-glow/30 uppercase tracking-widest">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-medium text-foreground">{item.company}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 font-mono">{item.role}</p>
                  {item.location && (
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-2">{item.location}</p>
                  )}
                  <ul className="mt-3 md:mt-4 space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-glow" aria-hidden="true">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-mono text-muted-foreground border border-border"
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
