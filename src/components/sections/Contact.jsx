import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertCircle, Loader } from "lucide-react";
import { SectionHeader } from "./About";
import emailjs from "@emailjs/browser";

const channels = [
  { icon: Mail, label: "Email", value: "ashishvish0105@gmail.com", href: "mailto:ashishvish0105@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 88 66 077 896", href: "tel:+91 88 66 077 896" },
  { icon: Linkedin, label: "LinkedIn", value: "in/ashishvish0105", href: "https://www.linkedin.com/in/ashishvish0105/" },
  { icon: Github, label: "GitHub", value: "@ashishvish0105", href: "https://github.com/ashishvish0105" },
];

// Initialize EmailJS
const initializeEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS();
  }, []);

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          // Template variables - match your EmailJS template exactly
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          title: formData.subject, // For email template compatibility
          message: formData.message,
          portfolioUrl: "https://ashish-portfolio-79qd.onrender.com/",
        }
      );

      if (response.status === 200) {
        setStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setStatusMessage(
        error.text || "Failed to send message. Please try again later or contact directly."
      );

      // Clear error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
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
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-7 glass p-4 md:p-6 lg:p-8 xl:p-10"
          >
            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 md:p-5 border border-green-500/50 bg-green-500/10 rounded-lg flex items-start gap-3"
              >
                <CheckCircle2 className="size-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base text-green-400 font-medium">Success!</p>
                  <p className="text-xs md:text-sm text-green-400/80 mt-1">{statusMessage}</p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 md:p-5 border border-red-500/50 bg-red-500/10 rounded-lg flex items-start gap-3"
              >
                <AlertCircle className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base text-red-400 font-medium">Error</p>
                  <p className="text-xs md:text-sm text-red-400/80 mt-1">{statusMessage}</p>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                disabled={loading}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                disabled={loading}
              />
            </div>

            <div className="mt-4 md:mt-6">
              <Field
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                disabled={loading}
              />
            </div>

            <div className="mt-4 md:mt-6">
              <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                className={`mt-2 w-full bg-transparent border-b outline-none py-2 text-sm md:text-base placeholder:text-muted-foreground/50 transition-colors resize-none ${
                  errors.message ? "border-red-500/50" : "border-border focus:border-glow"
                } text-foreground`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="mt-8 md:mt-10 flex items-center justify-between gap-4 flex-wrap">
              <span className="font-mono text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest">
                {loading ? (
                  <span className="text-glow flex items-center gap-2">
                    <Loader className="size-3 animate-spin" />
                    // sending...
                  </span>
                ) : status === "success" ? (
                  <span className="text-green-400">// message transmitted</span>
                ) : status === "error" ? (
                  <span className="text-red-400">// transmission failed</span>
                ) : (
                  "// avg response · 24h"
                )}
              </span>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-widest hover:bg-glow transition-all duration-300 active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="size-3 md:size-3.5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="size-3 md:size-3.5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
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
  value,
  onChange,
  error,
  disabled,
}) {
  return (
    <div>
      <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`mt-2 w-full bg-transparent border-b outline-none py-2 text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? "border-red-500/50" : "border-border focus:border-glow"
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}

