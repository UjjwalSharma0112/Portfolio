"use client";

import { achievements } from "@/lib/text";
import { motion } from "framer-motion";

export default function AchievementSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-zinc-100">Achievements &amp; Certifications</h2>
        <div className="h-px bg-zinc-900 w-16 mt-4"></div>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-start gap-6 py-4 border-b border-zinc-900 last:border-b-0"
          >
            <span className="text-xs text-zinc-500 font-semibold pt-0.5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
