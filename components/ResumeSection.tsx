import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

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
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-zinc-900/40 border-zinc-800 backdrop-blur-sm p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-zinc-800"></div>
          <CardContent className="space-y-6 max-w-2xl mx-auto p-0">
            <div className="inline-flex p-4 bg-zinc-950/80 rounded-full border border-zinc-800/80 text-zinc-300 mb-2">
              <FileText size={32} />
            </div>
            
            <h2 className="text-3xl font-extrabold text-white">Interested in working together?</h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Feel free to download my comprehensive resume to view my detailed qualifications, academic milestones, and engineering project histories.
            </p>

            <div className="pt-4 flex justify-center">
              <Button
                size="lg"
                className="bg-white text-black font-semibold hover:bg-zinc-200 transition-colors gap-2 px-8"
                onClick={handleDownload}
              >
                Download Resume PDF
                <Download size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
