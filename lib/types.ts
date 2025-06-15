import { LucideIcon } from "lucide-react";

export type ProjectCardContents = {
  title: string;
  technologies: string[];
  desc: string;
  features: string[];
  github: string;
};

export type TechnicalContents = {
  icon: LucideIcon;
  title: string;
  labels: string[];
};
