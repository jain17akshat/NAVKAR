
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d63a034e-849e-4aef-b43e-2ecae321f8da.png" 
              alt="Navkar Fashion Logo" 
              className="h-8 w-auto sm:h-10"
            />
            {/* <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 font-playfair">Navkar Fashion</span> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
