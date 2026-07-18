"use client";

import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "AI-Assisted Full Stack Web Development Intern",
      company: "Technology Business Incubator – Graphic Era University (TBI-GEU)",
      location: "Dehradun, Uttarakhand",
      duration: "Jun 2026 – Present",
      description: "Developing HimDraftAI, an AI-assisted web application that generates SEO-optimized e-commerce product descriptions to empower small and rural Himalayan food producers.",
      skills: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "GenAI", "MCP"],
      highlights: [
        "Developing HimDraftAI, an AI-assisted web app that generates SEO-optimized e-commerce product descriptions for Himalayan food producers.",
        "With AI Integration to generate context-aware, long-form product descriptions across various tones.",
        "A platform to help small and rural Himalayan food producers who cannot afford professional copywriting services create high-quality, market-ready product descriptions at a fraction of the cost."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-zinc-100">Experience</h2>
        <div className="h-px bg-zinc-900 w-16 mt-4"></div>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid md:grid-cols-12 gap-8 pt-8 border-t border-zinc-900 first:border-t-0 first:pt-0"
          >
            {/* Left Column: Organization & Timeline */}
            <div className="md:col-span-4 space-y-2">
              <h3 className="font-bold text-zinc-100 text-lg">{exp.company}</h3>
              <div className="space-y-1 text-xs text-zinc-500 font-medium">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* Right Column: Role details */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-zinc-300">{exp.role}</h4>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <h5 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Key Contributions</h5>
                <ul className="space-y-2.5">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-sm text-zinc-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-650 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-zinc-900/50 text-zinc-450 border-zinc-850 text-xs px-2 py-0.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
