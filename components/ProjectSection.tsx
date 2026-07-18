"use client";

import ProjectCard from "./ProjectCard";
import { projectContent } from "@/lib/text";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-zinc-100">Featured Projects</h2>
        <div className="h-px bg-zinc-900 w-16 mt-4"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projectContent.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
