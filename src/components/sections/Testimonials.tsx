import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./About";

const testimonials = [
  {
    quote:
      "Ashish delivered our Angular dashboard ahead of schedule with code quality that's a pleasure to maintain. Easily one of the most reliable engineers I've worked with.",
    name: "Priya Sharma",
    role: "Engineering Lead, MegaMinds",
  },
  {
    quote:
      "He bridges design and engineering effortlessly — pixel-perfect UI backed by clean .NET APIs. Communication was crisp throughout the entire project.",
    name: "Rahul Mehta",
    role: "CTO, Vision Infotech",
  },
  {
    quote:
      "We hired Ashish for a complex healthcare portal. He scoped, built, and deployed it solo — and the client renewed for two more phases. Highly recommended.",
    name: "Anjali Kapoor",
    role: "Project Manager",
  },
  {
    quote:
      "Modern stack, modern thinking. Ashish leverages AI tools the right way — speed without sloppiness. A genuinely standout full-stack developer.",
    name: "Karan Patel",
    role: "Founder, AquaFish",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  const t = testimonials[i];

  return (
    <section className="relative py-32 px-6 lg:px-8 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="06" title="Signal" subtitle="// what people say" />

        <div className="mt-16 max-w-4xl mx-auto relative">
          <Quote className="absolute -top-6 -left-2 size-16 text-glow/10" />

          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-light text-foreground leading-snug tracking-tight">
                  "{t.quote}"
                </p>
                <div className="mt-10 flex flex-col items-center">
                  <div className="size-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-glow font-mono text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="mt-4 font-medium text-foreground">{t.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="size-10 flex items-center justify-center border border-border text-muted-foreground hover:text-glow hover:border-glow transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-px transition-all ${
                    idx === i ? "w-10 bg-glow" : "w-5 bg-border"
                  }`}
                  aria-label={`Go to ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="size-10 flex items-center justify-center border border-border text-muted-foreground hover:text-glow hover:border-glow transition-all"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
