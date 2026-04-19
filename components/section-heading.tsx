"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  path: string;
  id: string;
  meta?: string;
}

export function SectionHeading({ path, id, meta }: SectionHeadingProps) {
  return (
    <div id={id} className="relative pt-24 md:pt-36">
      <div className="flex items-baseline gap-5 md:gap-8">
        <motion.span
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-mono text-base md:text-lg text-fg"
        >
          <span className="text-comment">~/</span>
          {path}
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="h-px flex-1 origin-left bg-rule"
        />
        {meta && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-mono text-[13px] md:text-sm text-comment whitespace-nowrap"
          >
            {meta}
          </motion.span>
        )}
      </div>
    </div>
  );
}
