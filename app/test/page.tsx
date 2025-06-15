import ProjectCard from "@/components/ProjectCard";
import { technicalContent, projectContent } from "@/lib/text";
import BadgeList from "@/components/BadgesList";
import TechnicalCard from "@/components/TechnicalCard";

export default function Test() {
  return (
    <div className="h-64 w-full grid grid-flow-col grid-cols-2 gap-4 ">
      <TechnicalCard {...technicalContent[0]}></TechnicalCard>
    </div>
  );
}
