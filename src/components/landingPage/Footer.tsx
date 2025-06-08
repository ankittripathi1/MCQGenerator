import { Brain, Github, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#3aee7c]" />
                <h3 className="font-medium texl-lg">MCQ Generator</h3>
              </div>
              <p className="text-sm text-[#a3a3a3]">
                Transform your content into interactive quizzes with AI-powered
                MCQ generation.
              </p>
              <div className="flex space-x-4">
                <Button variant={"ghost"} size={"icon"}>
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Features</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#feature"
                    className="text-sm text-[#a3a3a3] hover:text-[#3aee7c] transition-colors"
                  >
                    AI Generation
                  </a>
                </li>
                <li>
                  <a
                    href="#formats"
                    className="text-sm text-[#a3a3a3] hover:text-[#3aee7c] transition-colors"
                  >
                    Multiple Formats
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#a3a3a3] hover:text-[#3aee7c] transition-all"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#a3a3a3] hover:text-[#3aee7c] transition-all"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#a3a3a3] hover:text-[#3aee7c] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#a3a3a3] hover:text-[#3aee7c] transition-colors"
                  >
                    Terms of Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
