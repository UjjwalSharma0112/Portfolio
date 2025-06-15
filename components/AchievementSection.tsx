import { Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { achievements } from "@/lib/text";
export default function AchievementSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Achievements</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-zinc-900">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award
                    className="text-yellow-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
