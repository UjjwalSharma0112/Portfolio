import { technicalContent } from "@/lib/text";
import TechnicalCard from "./TechnicalCard";
export default function TechnicalSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalContent.map((content) => (
            <TechnicalCard key={content.title} {...content}></TechnicalCard>
          ))}
        </div>
      </div>
    </>
  );
}
