import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { SectionHeader } from "./About";

const channels = [
  { icon: Mail, label: "Email", value: "ashish@example.com", href: "mailto:ashish@example.com" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/ashish-vishwakarma", href: "#" },
  { icon: Github, label: "GitHub", value: "@ashish-dev", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="07" title="Contact" subtitle="// open a connection" />

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-8 md:gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-5"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground tracking-tight">
              Let's build something
              <br />
              <span className="text-glow">remarkable.</span>
            </h3>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              I'm available for full-time roles and freelance projects. Drop a message and I'll
              get back within 24 hours.
            </p>

            <div className="mt-8 md:mt-10 space-y-px bg-border border border-border">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-3 md:gap-4 bg-background p-3 md:p-4 hover:bg-surface/40 transition-colors"
                >
                  <div className="size-8 md:size-10 flex items-center justify-center flex-shrink-0 bg-surface-elevated border border-border text-glow">
                    <c.icon className="size-3.5 md:size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-xs md:text-sm text-foreground truncate group-hover:text-glow transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="col-span-12 lg:col-span-7 glass p-4 md:p-6 lg:p-8 xl:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-4 md:mt-6">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-4 md:mt-6">
              <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-glow outline-none py-2 text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="mt-8 md:mt-10 flex items-center justify-between gap-4 flex-wrap">
              <span className="font-mono text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest">
                {sent ? (
                  <span className="text-glow">// message transmitted</span>
                ) : (
                  "// avg response · 24h"
                )}
              </span>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-widest hover:bg-glow transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                Send Message
                <Send className="size-3 md:size-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}) {
  return (
    <div>
      <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required={required}
        name={name}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-glow outline-none py-2 text-sm md:text-base text-foreground transition-colors"
      />
    </div>
  );
}

