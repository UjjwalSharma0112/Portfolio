import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { heroDescription, myLinks } from "@/lib/text";
import { NameAnimation } from "./NameAnimation";
export default function HeroSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="w-full flex justify-items-start">
                <NameAnimation
                  className="text-gray-400 text-lg pr-2  mb-4"
                  text="Hi! My Name is"
                  delayFactor={0.1}
                />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold  flex justify-items-start text-white mb-6">
                <NameAnimation text="Ujjwal" delayFactor={0.1} />
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                {heroDescription}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => window.open(myLinks.github, "_blank")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={21} />
              </button>

              <button
                onClick={() => window.open(myLinks.linkedIn, "_blank")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CiLinkedin size={24} />
              </button>
              <div className="flex gap-2  text-white ">
                <a href={`mailto:${myLinks.email}`} className="flex gap-2">
                  <CiMail size={24} />
                  {myLinks.email}
                </a>
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
    </>
  );
}
