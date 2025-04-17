import { useState, useEffect } from "react";
import { Link } from "wouter";
import Logo from "@/components/ui/logo";

interface HeaderProps {
  toggleMobileNav: () => void;
}

export default function Header({ toggleMobileNav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`bg-white ${scrolled ? 'shadow-md' : ''} fixed w-full z-40`}>
      <div className="container py-3 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-foreground hover:text-primary font-medium transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-primary font-medium transition-colors">Services</a>
          <a href="#projects" className="text-foreground hover:text-primary font-medium transition-colors">Projects</a>
          <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">About</a>
          <a href="#testimonials" className="text-foreground hover:text-primary font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileNav}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
