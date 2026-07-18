"use client";

import { heroDescription, myLinks } from "@/lib/text";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Information */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
              Hi, my name is
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight mb-1">
              Ujjwal Sharma
            </h1>
            
            <p className="text-base sm:text-lg font-medium text-zinc-400">
              Full Stack Engineer
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
              {heroDescription}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6 border-y border-zinc-900 py-6 max-w-xl">
            <div className="text-sm text-zinc-400">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-medium">Education</p>
              <p className="font-semibold text-zinc-300">B.Tech in CSE</p>
              <p className="text-xs text-zinc-500">Graphic Era University (GPA: 8.53)</p>
            </div>
            <div className="text-sm text-zinc-400">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-medium">Location</p>
              <p className="font-semibold text-zinc-300">Dehradun, India</p>
              <p className="text-xs text-zinc-500">Uttarakhand, India</p>
            </div>
          </div>
        </div>

        {/* Right Side: Minimalist Professional Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-sm bg-zinc-900/10 border border-zinc-900 rounded-lg p-8 backdrop-blur-md shadow-2xl relative flex flex-col items-center text-center space-y-6"
          >
            {/* Elegant Initials Avatar */}
            <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-300 text-sm font-semibold tracking-wider shadow-inner">
              US
            </div>

            <div className="space-y-1">
              <h3 className="text-md font-bold text-zinc-100">Ujjwal Sharma</h3>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Full Stack Developer</p>
            </div>

            <div className="w-full h-px bg-zinc-900/80"></div>

            <div className="w-full space-y-3">
              <a
                href={`mailto:${myLinks.email}`}
                className="flex justify-between items-center px-4 py-2.5 rounded border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all w-full text-xs font-medium"
              >
                <span>Email</span>
                <span className="text-[10px] text-zinc-500">contact ↗</span>
              </a>

              <a
                href={myLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center px-4 py-2.5 rounded border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all w-full text-xs font-medium"
              >
                <span>GitHub</span>
                <span className="text-[10px] text-zinc-500">profile ↗</span>
              </a>

              <a
                href={myLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center px-4 py-2.5 rounded border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all w-full text-xs font-medium"
              >
                <span>LinkedIn</span>
                <span className="text-[10px] text-zinc-500">connect ↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
