import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (windowHeight === 0) {
        setProgress(0);
        return;
      }
      const scrolled = window.scrollY;
      const scrollProgress = (scrolled / windowHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-glow shadow-[0_0_10px_var(--color-glow)]"
      aria-hidden="true"
    />
  );
}

