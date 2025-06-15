"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Github, Menu, X, Linkedin, Instagram, GitBranch } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechnicalSection from "@/components/TechnicalSection";
import AchievementSection from "@/components/AchievementSection";
import ResumeSection from "@/components/ResumeSection";
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleString("en-US", {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      });
      setCurrentTime(`${timeString}, New Delhi, India`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "resume"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-950 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-sm text-gray-400">{currentTime}</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Projects", id: "projects" },
                { name: "Resume", id: "resume" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-zinc-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-800">
              {[
                { name: "Home", id: "home" },
                { name: "Projects", id: "projects" },
                { name: "Resume", id: "resume" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <ProjectSection />
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <TechnicalSection />
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <AchievementSection />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResumeSection></ResumeSection>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Portfolio.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={() =>
                  window.open("https://github.com/UjjwalSharma0112", "_blank")
                }
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
