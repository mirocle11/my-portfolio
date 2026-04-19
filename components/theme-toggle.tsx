"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const t = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    setTheme(t);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  if (!theme) {
    return <div className="h-6 w-6" aria-hidden />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative h-7 w-7 flex items-center justify-center rounded-full border border-rule hover:border-accent-hi transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="font-mono text-[15px] text-fg"
          aria-hidden
        >
          {theme === "dark" ? "◐" : "◑"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
