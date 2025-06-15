import { Code2, Badge } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { TechnicalContents } from "@/lib/types";
import BadgesList from "./BadgesList";

export default function TechnicalCard({
  icon,
  title,
  labels,
}: TechnicalContents) {
  const Icon = icon;
  return (
    <>
      <Card className=" bg-zinc-900">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Icon />
            <CardTitle className="text-lg text-white">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <BadgesList
              labels={labels}
              className="border-gray-700  text-gray-400"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
