import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function ResumeSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/static/resume.pdf";
    link.download = "Ujjwal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Resume</h2>
      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        Download my resume to learn more about my experience, skills, and
        achievements.
      </p>

      <Button
        size="lg"
        className="bg-white text-black gap-2 hover:bg-gray-200"
        onClick={handleDownload}
      >
        Download Resume
        <Download size={18} />
      </Button>
    </div>
  );
}
