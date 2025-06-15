import ProjectCard from "./ProjectCard";
import { projectContent } from "@/lib/text";
export default function ProjectSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {projectContent.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
