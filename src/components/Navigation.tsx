import { Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "Features",
      href: "#features",
      onClick: () => scrollToSection("features"),
    },
    {
      name: "How It Works",
      href: "#how-it-works",
      onClick: () => scrollToSection("how-it-works"),
    },
    {
      name: "Formats",
      href: "#formats",
      onClick: () => scrollToSection("formats"),
    },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border-white/10 scale-95 w-[90%] max-w-2xl"
          : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl "
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-bold text-base">MCQ Generation</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="text-sm text- hove:text-forground transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              size={"sm"}
              className="button-gradient"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
