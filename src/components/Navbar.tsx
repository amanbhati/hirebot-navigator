
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="bg-primary text-white h-8 w-8 rounded-md flex items-center justify-center font-bold text-lg">H</span>
          <span className="font-bold text-xl">HireBot</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
          <a
            href="#demo"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Request Demo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[68px] bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-8 space-y-6">
          <a 
            href="#features" 
            className="text-lg font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#demo"
            className="bg-primary text-white px-6 py-3 rounded-md text-center font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
