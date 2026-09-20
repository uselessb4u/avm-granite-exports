import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Products", id: "gallery" },
    { label: "Videos", id: "videos" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white/80 transition-all duration-300">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between h-16 text-sm">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display font-medium text-white/90 hover:text-white transition-colors flex items-center text-base"
            >
              AVM EXPORTS
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-sans">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black px-4 pt-2 pb-6 border-t border-white/10 h-screen">
            <div className="flex flex-col gap-6 text-xl font-medium pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-white/80 hover:text-white transition-colors border-b border-white/10 pb-4"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
