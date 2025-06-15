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
import { FiGithub } from "react-icons/fi";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  technologies,
  desc,
  features,
  github,
}: ProjectCardContents) {
  return (
    <Card className="flex flex-col h-full bg-zinc-900 justify-between">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          <BadgesList
            labels={technologies}
            className="border-gray-700  text-gray-400"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-gray-300 mb-4">{desc}</p>

        <div className="mt-auto">
          <h4 className="font-semibold text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <div className="w-2 h-2 mt-1 rounded-full bg-gray-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub size={18} className="mr-2" />
            View On GitHub
            <ExternalLink size={14} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
