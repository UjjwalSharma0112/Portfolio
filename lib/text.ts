import { Briefcase, Code2, Database, Globe, Languages } from "lucide-react";
import { ProjectCardContents, TechnicalContents } from "./types";

export const heroDescription = `Seeking a Software Engineering internship to leverage skills in
                   Web Development, specifically in TypeScript, Python, React.js,
                   Node.js, PostgreSQL, and MongoDB, while gaining hands-on
                   experience and contributing to innovative projects.`;

export const myLinks = {
  linkedIn: "https://www.linkedin.com/in/ujjwal-sharma-b98b83306/",
  github: "https://github.com/UjjwalSharma0112",
  email: "ujjwalsharma0810@gmail.com",
};

export const projectContent: ProjectCardContents[] = [
  {
    title: "RideWise CarPooling Management",
    technologies: ["NodeJS", "ReactJs", "SQLite3"],
    desc: "A smart, map-based carpooling web application that enables users to request rides by selecting pickup and drop-off locations on a live map. Features real-time driver matching and route planning with geospatial data.",
    features: [
      "Live map integration",
      "Real-time driver matching",
      "Route optimization",
      "Geospatial data processing",
    ],
    github: "https://github.com/UjjwalSharma0112/RideWise",
  },
  {
    title: "Cruz-Link Smart Helmet",
    technologies: ["IoT", "Next.js", "Gemini API", "MCP", "Node.js"],
    desc: "AI-powered smart helmet with live crash detection using ESP-8266 and gyroscope module. Features Text-To-Speech support and natural language processing with Gemini API integration.",
    github: "https://github.com/UjjwalSharma0112/CRUZ-LINK",
    features: [
      "Live crash detection",
      "AI-powered responses",
      "Text-to-Speech",
      "Natural language queries",
    ],
  },
];

export const technicalContent: TechnicalContents[] = [
  {
    icon: Code2,
    title: "Languages",
    labels: ["C++", "Python", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    icon: Globe,
    title: "Frameworks",
    labels: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Typescript",
      "Java",
      "Python",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    labels: ["MongoDB", "PostgreSQL", "SQLite3"],
  },
  {
    icon: Briefcase,
    title: "Tools",
    labels: ["Git", "GitHub", "Docker", "AWS", "NeoVim"],
  },
];

export const achievements: string[] = [
  "AWS Cloud Practitioner Essential Certification",
  "MongoDB NodeJS Developer Path",
  "Solved 80+ Questions on LeetCode",
  "Top 10 in Hack-o-Holic 3.0 Hackathon (100+ teams) Graphic Era Hill University",
];
