
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d63a034e-849e-4aef-b43e-2ecae321f8da.png" 
              alt="Navkar Fashion Logo" 
              className="h-8 w-auto sm:h-10"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 font-playfair">Navkar Fashion</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#home" className="nav-link text-sm lg:text-base">Home</a>
            <a href="#men" className="nav-link text-sm lg:text-base">Men</a>
            <a href="#women" className="nav-link text-sm lg:text-base">Women</a>
            <a href="#kids" className="nav-link text-sm lg:text-base">Kids</a>
            <a href="#blazers" className="nav-link text-sm lg:text-base">Blazers & Suitings</a>
            <a href="#contact" className="nav-link text-sm lg:text-base">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-800 h-9 w-9">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="nav-link py-1" onClick={toggleMenu}>Home</a>
              <a href="#men" className="nav-link py-1" onClick={toggleMenu}>Men</a>
              <a href="#women" className="nav-link py-1" onClick={toggleMenu}>Women</a>
              <a href="#kids" className="nav-link py-1" onClick={toggleMenu}>Kids</a>
              <a href="#blazers" className="nav-link py-1" onClick={toggleMenu}>Blazers & Suitings</a>
              <a href="#contact" className="nav-link py-1" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
