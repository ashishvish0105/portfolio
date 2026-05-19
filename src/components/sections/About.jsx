import { motion } from "framer-motion";
import { Code2, Cpu, Zap } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "5+ Years Experience",
    body: "Building production-grade applications across enterprise, healthcare, and e-commerce.",
  },
  {
    icon: Cpu,
    title: "Full Stack Expertise",
    body: "Angular, .NET Core, SQL Server — end-to-end ownership from database to pixel.",
  },
  {
    icon: Zap,
    title: "AI-Assisted Workflow",
    body: "Leveraging Cursor, Claude, and Copilot to ship faster without sacrificing quality.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="01" title="About" subtitle="// who am i" />

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-snug tracking-tight">
              I architect{" "}
              <span className="text-glow">scalable web applications</span> that bridge clean
              user experiences with rock-solid backend systems.
            </p>
            <div className="mt-6 md:mt-8 space-y-4 md:space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Over the last <span className="text-foreground">five years</span>, I've shipped
                Angular interfaces and .NET APIs across aviation, healthcare, e-commerce, and
                cloud platforms — translating complex business rules into reliable software.
              </p>
              <p>
                I'm passionate about <span className="text-foreground">developer velocity</span>{" "}
                and the new wave of AI tooling. My workflow blends classical engineering rigor
                with modern AI assistants to ship faster without cutting corners.
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-5 grid gap-3 md:gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-4 md:p-6 group hover:border-glow/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="size-8 md:size-10 flex items-center justify-center flex-shrink-0 bg-surface-elevated border border-border text-glow group-hover:bg-glow/10 transition-colors">
                    <c.icon className="size-4 md:size-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  index,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-end justify-between border-b border-border pb-6"
    >
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-xs text-glow tracking-widest">{index}</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground">
          {title}
        </h2>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">
        {subtitle}
      </span>
    </motion.div>
  );
}

