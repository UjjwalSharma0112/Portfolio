import { ProjectCardContents } from "@/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "./ui/card";
import BadgesList from "./BadgesList";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectCard({
  title,
  technologies,
  desc,
  features,
  github,
  live,
}: ProjectCardContents) {
  return (
    <Card className="flex flex-col h-full bg-zinc-900/10 border-zinc-900 rounded-lg justify-between hover:border-zinc-800 transition-all duration-350 group shadow-lg">
      <CardHeader className="space-y-3 pb-3">
        <CardTitle className="text-xl font-bold text-zinc-150 group-hover:text-white transition-colors">
          {title}
        </CardTitle>
        <div className="flex flex-wrap gap-1">
          <BadgesList
            labels={technologies}
            className="border-zinc-900 bg-zinc-950/20 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800 text-[10px]"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">{desc}</p>

        <div className="mt-auto space-y-2">
          <h4 className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-xs text-zinc-450 leading-relaxed"
              >
                <div className="w-1 h-1 mt-2 rounded-full bg-zinc-700 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="gap-3 pt-4 border-t border-zinc-900/60 mt-6">
        <Button asChild variant="outline" className="flex-1 bg-zinc-950/20 border-zinc-900 hover:bg-zinc-900 text-zinc-300 text-xs rounded-md h-9">
          <Link href={github} target="_blank" rel="noopener noreferrer">
            Source Code
          </Link>
        </Button>
        {live && (
          <Button asChild className="flex-1 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 text-xs rounded-md h-9 font-medium">
            <Link href={live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
