import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      const menuButton = document.querySelector('.mobile-menu-button');

      if (isMobileMenuOpen &&
        nav &&
        !nav.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mohammed Nour Damlakhi
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors relative ${activeSection === 'home' ? 'text-accent' : 'text-muted-foreground hover:text-primary'}`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors relative ${activeSection === 'about' ? 'text-accent' : 'text-muted-foreground hover:text-primary'}`}
            >
              About
              {activeSection === 'about' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`transition-colors relative ${activeSection === 'portfolio' ? 'text-accent' : 'text-muted-foreground hover:text-primary'}`}
            >
              Portfolio
              {activeSection === 'portfolio' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className={`${activeSection === 'contact' ? 'bg-primary' : 'bg-accent'} hover:bg-accent/90 text-accent-foreground shadow-accent/25`}
            >
              Contact
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Portfolio
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mx-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/25"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;