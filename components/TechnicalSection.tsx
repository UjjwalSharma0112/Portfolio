"use client";

import { technicalContent } from "@/lib/text";
import TechnicalCard from "./TechnicalCard";
import { motion } from "framer-motion";

export default function TechnicalSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-zinc-100">Technical Skills</h2>
        <div className="h-px bg-zinc-900 w-16 mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalContent.map(({ title, labels }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <TechnicalCard title={title} labels={labels} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
