import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#cursos", label: "Cursos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#sobre", label: "Sobre" },
    { href: "#localizacao", label: "Localização" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-sm border-b border-border ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 text-2xl font-display font-bold"
          >
            <img src={logo} alt="MOUSIK Logo" className="w-10 h-10" />
            <span className="text-primary">
              MOUSIK
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="transition-colors"
                aria-label="Alterar tema"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            )}
            <Button
              onClick={() => {
                const element = document.querySelector("#localizacao");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Agendar Aula
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 bg-background border-t border-border">
              <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              {mounted && (
                <Button
                  onClick={() => {
                    toggleTheme();
                  }}
                  variant="outline"
                  className="mx-4 transition-colors"
                  aria-label="Alterar tema"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5 mr-2" /> Claro
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-2" /> Escuro
                    </>
                  )}
                </Button>
              )}
              <Button
                onClick={() => {
                  const element = document.querySelector("#localizacao");
                  element?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Agendar Aula
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
