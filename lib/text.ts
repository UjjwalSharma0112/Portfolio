import { Code2, Server, Globe, Cloud, Database, Cpu } from "lucide-react";
import { ProjectCardContents, TechnicalContents } from "./types";

export const heroDescription = `Software Engineer pursuing a B.Tech in Computer Science & Engineering at Graphic Era University. Experienced in building full-stack web applications, database integrations, and developer tools. Focused on writing clean, maintainable code and building practical software solutions.`;

export const myLinks = {
  linkedIn: "https://www.linkedin.com/in/ujjwal-sharma-b98b83306/",
  github: "https://github.com/UjjwalSharma0112",
  email: "ujjwalsharma0810@gmail.com",
  phone: "+91 7060208778",
};

export const projectContent: ProjectCardContents[] = [
  {
    title: "SQL-Assist",
    technologies: ["Python", "FastAPI", "React.js", "Gemini"],
    desc: "An AI-powered NL2SQL tool that converts natural language queries into optimized, schema-aware SQL. Features secure, authenticated live query execution directly against user-connected PostgreSQL and MySQL databases.",
    features: [
      "Built FastAPI backend in Python with schema-aware SQL generation",
      "Enabled secure, authenticated (JWT) live query execution against PostgreSQL and MySQL",
      "Schema-aware query generation ensuring efficient queries based on database design",
      "Empowers non-technical users to access database records easily"
    ],
    github: "https://github.com/UjjwalSharma0112/SQL-Assist",
    live: "https://sql-assist-frontend.onrender.com/"
  },
  {
    title: "DesignBoard",
    technologies: ["TypeScript", "Next.js", "Node.js", "Gemini", "Assembly AI"],
    desc: "An AI-powered platform for practicing system design interviews with an interactive whiteboard and real-time interview sessions. Creates a 'Leetcode for system design' experience with voice models and automated evaluation.",
    features: [
      "AI-powered platform for system design interviews with interactive whiteboard and live sessions",
      "Structured problem set providing a 'Leetcode for system design' experience",
      "Utilized Gemini voice models and Assembly AI for text-to-speech giving real-world interview feel",
      "Developed context-aware engine asking follow-ups, evaluating responses, and giving feedback"
    ],
    github: "https://github.com/UjjwalSharma0112/DesignBoard",
    live: "https://designboard.ujjwalsharma0112.me/"
  },
  {
    title: "LinkedIn Job Applier",
    technologies: ["TypeScript", "Python", "Gemini", "JWT", "Chrome Extensions"],
    desc: "Automates LinkedIn Easy Apply using a Chrome extension, eliminating repetitive manual steps. Integrates Gemini API for smart, context-aware form-filling, DOM parsing across multi-step forms, and file uploads.",
    features: [
      "Automated LinkedIn Easy Apply via Chrome Extension to eliminate repetitive manual steps",
      "Smart context-aware form-filling and DOM parsing with Gemini API, handling multi-step forms and file uploads",
      "Secured the backend using JWT authentication"
    ],
    github: "https://github.com/UjjwalSharma0112/LinkedIn-Job-Applier"
  },
  {
    title: "CruzLink – AI IoT Smart Helmet",
    technologies: ["TypeScript", "ESP8266", "Gemini", "Twilio", "MCP"],
    desc: "An AI IoT smart helmet that detects crashes live using ESP8266 + gyroscope, sending SOS alerts automatically via Twilio API. Includes a voice-controlled AI assistant backed by an MCP server for hands-free operations.",
    features: [
      "Live crash detection using ESP8266 + gyroscope with automatic SOS alerts via Twilio API",
      "Voice-controlled AI assistant backed by an MCP server for hands-free task execution",
      "Integrated GPS location sharing with automatic emergency-contact notification"
    ],
    github: "https://github.com/UjjwalSharma0112/CRUZ-LINK"
  }
];

export const technicalContent: TechnicalContents[] = [
  {
    icon: Code2,
    title: "Languages",
    labels: ["TypeScript", "Python", "Java", "C++", "SQL", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    labels: ["Node.js", "Express.js", "FastAPI", "Spring Boot"],
  },
  {
    icon: Globe,
    title: "Frontend & Mobile",
    labels: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    labels: ["AWS (EC2, CloudFront)", "Docker", "Git", "GitHub"],
  },
  {
    icon: Database,
    title: "Databases",
    labels: ["PostgreSQL", "MongoDB", "SQLite3", "MySQL"],
  },
  {
    icon: Cpu,
    title: "AI / ML & Automation",
    labels: ["GenAI (Gemini/Claude)", "RAG Pipelines", "Model Context Protocol (MCP)"],
  },
];

export const achievements: string[] = [
  "HackerRank Orchestrate (Ranked 235th): Built a multi-agent GenAI triage system with hybrid RAG under a 24-hour deadline",
  "Hack-o-Holic 3.0: Secured Top 10 out of 100 teams at the Graphic Era Hill University hackathon",
  "AWS Cloud Practitioner Essentials: Certified by AWS Skill Builder",
  "MongoDB Node.js Developer Path: Certified by MongoDB University",
  "Anthropic: Claude 101 & Model Context Protocol (MCP): Advanced Topics course completion",
  "Open Source: Merged bug fix contribution to ShadCN UI (GitHub)",
  "LeetCode: Solved 300+ problems demonstrating strong algorithmic foundation"
];
