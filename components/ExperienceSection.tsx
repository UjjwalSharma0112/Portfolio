import { ChevronDown, Badge } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
export default function ExperienceSection() {
  {
    /* Experience Section */
  }
  <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

      <div className="space-y-8">
        <Card className="bg-zinc-900 ">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl text-white">
                  Software Engineer
                </CardTitle>
                <CardDescription className="text-gray-400">
                  TechSprint 48H Hackathon
                </CardDescription>
              </div>
              <div className="text-right text-sm text-gray-400">
                Dec 2024 - Feb 2025
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <ChevronDown
                  className="mr-2 mt-1 flex-shrink-0 rotate-[-90deg]"
                  size={16}
                />
                Developed a smart helmet that sends authorities the location of
                accidents, increasing the chances of rider survival.
              </p>
              <p className="flex items-start">
                <ChevronDown
                  className="mr-2 mt-1 flex-shrink-0 rotate-[-90deg]"
                  size={16}
                />
                Implemented hands-free device control using LLM and Model
                Context Protocol (MCP) for users such as quick commerce delivery
                drivers.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["React", "NodeJS", "MongoDB", "Firebase"].map((tech) => (
                <Badge
                  key={tech}
                  className="bg-gray-800 text-gray-300 border-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="pt-10">
              <Image
                src="/static/Cruzline.jpg"
                alt="Smart Helmet Project"
                width={300}
                height={300}
                className="rounded-xl w-full h-64 object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>;
}
