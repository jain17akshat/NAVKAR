
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d63a034e-849e-4aef-b43e-2ecae321f8da.png" 
              alt="Navkar Fashion Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold">Navkar Fashion</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#men" className="nav-link">Men</a>
            <a href="#women" className="nav-link">Women</a>
            <a href="#kids" className="nav-link">Kids</a>
            <a href="#blazers" className="nav-link">Blazers & Suitings</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
              <a href="#men" className="nav-link" onClick={toggleMenu}>Men</a>
              <a href="#women" className="nav-link" onClick={toggleMenu}>Women</a>
              <a href="#kids" className="nav-link" onClick={toggleMenu}>Kids</a>
              <a href="#blazers" className="nav-link" onClick={toggleMenu}>Blazers & Suitings</a>
              <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
