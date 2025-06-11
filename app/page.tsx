"use client";

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,Linkedin,
  Instagram,
  GitBranch
} from 'lucide-react';
import Image from 'next/image';
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState('');

  const skills = {
    languages: ['C++', 'Python', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'Docker', 'Linux'],
    databases: ['MongoDB', 'PostgreSQL', 'SQLite3'],
    tools: ['Git', 'GitHub', 'AWS', 'Vanilla JS']
  };

  const projects = [
    {
      title: 'RideWise CarPooling Management',
      tech: ['Node.js', 'React.js', 'SQLite3'],
      description: 'A smart, map-based carpooling web application that enables users to request rides by selecting pickup and drop-off locations on a live map. Features real-time driver matching and route planning with geospatial data.',
      github: 'https://github.com/UjjwalSharma0112/RideWise',
      features: ['Live map integration', 'Real-time driver matching', 'Route optimization', 'Geospatial data processing']
    },
    {
      title: 'Cruz-Link Smart Helmet',
      tech: ['IoT', 'Next.js', 'Gemini API', 'MCP', 'Node.js'],
      description: 'AI-powered smart helmet with live crash detection using ESP-8266 and gyroscope module. Features Text-To-Speech support and natural language processing with Gemini API integration.',
      github: 'https://github.com/UjjwalSharma0112/CRUZ-LINK',
      features: ['Live crash detection', 'AI-powered responses', 'Text-to-Speech', 'Natural language queries']
    }
  ];

  const achievements = [
    'AWS Cloud Practitioner Essential Certification',
    'Solved 80+ Questions on LeetCode',
    'Top 10 in Hack-o-Holic 3.0 Hackathon (100+ teams) Graphic Era Hill University',
    'Cleared two rounds of TCS CodeVita Season 12 (350,000 participants)'
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(`${timeString}, New Delhi, India`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'resume'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-sm text-gray-400">{currentTime}</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Projects', id: 'projects' },
                { name: 'Resume', id: 'resume' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
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
                { name: 'Home', id: 'home' },
                { name: 'Projects', id: 'projects' },
                { name: 'Resume', id: 'resume' }
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
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-gray-400 text-lg mb-4">Hi! My Name is</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Ujjwal
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  Seeking a Software Engineering internship to leverage skills in Web Development, 
                  specifically in TypeScript, Python, React.js, Node.js, PostgreSQL, and MongoDB, 
                  while gaining hands-on experience and contributing to innovative projects.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => window.open('https://github.com/UjjwalSharma0112', '_blank')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </button>
             
                <button 
                  onClick={() => window.open('https://instagram.com/yourusername', '_blank')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </button>
                <div
                  
                  className="flex gap-2  text-white "
                >
                  <Mail size={24}></Mail> ujjwalsharma0810@gmail.com
                </div>
              </div>
            </div>

            {/* Avatar/Image placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👋</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
          
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-white">Software Engineer</CardTitle>
                    <CardDescription className="text-gray-400">TechSprint 48H Hackathon</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    Dec 2024 - Feb 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start">
                    <ChevronDown className="mr-2 mt-1 flex-shrink-0 rotate-[-90deg]" size={16} />
                    Developed a smart helmet that sends authorities the location of accidents, 
                    increasing the chances of rider survival.
                  </p>
                  <p className="flex items-start">
                    <ChevronDown className="mr-2 mt-1 flex-shrink-0 rotate-[-90deg]" size={16} />
                    Implemented hands-free device control using LLM and Model Context Protocol (MCP) 
                    for users such as quick commerce delivery drivers.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {['React', 'NodeJS', 'MongoDB', 'Firebase'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="text-gray-400 hover:text-white"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-700 text-gray-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <Github size={16} className="mr-2" />
                      View on GitHub
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="text-blue-500" size={20} />
                  <CardTitle className="text-lg text-white">Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Globe className="text-green-500" size={20} />
                  <CardTitle className="text-lg text-white">Frameworks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Database className="text-purple-500" size={20} />
                  <CardTitle className="text-lg text-white">Databases</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-orange-500" size={20} />
                  <CardTitle className="text-lg text-white">Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Achievements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Resume</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements.
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
          >
            Download Resume
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Portfolio.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button 
                onClick={() => window.open('https://github.com/UjjwalSharma0112', '_blank')}
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