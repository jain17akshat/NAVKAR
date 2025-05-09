
const Footer = () => {
  return (
    <footer className="bg-royal-dark text-white pt-10 pb-6 border-t border-navyellow/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8">
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <img 
                src="/lovable-uploads/d63a034e-849e-4aef-b43e-2ecae321f8da.png" 
                alt="Navkar Fashion Logo" 
                className="h w-auto"
              />
              <span className="text-lg sm:text-xl font-bold font-playfair">Navkar Fashion</span>
            </div>
            <p className="text-gray-300 mb-4 text-center md:text-left px-6 md:px-0">
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-navyellow font-playfair">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-300 hover:text-navyellow transition-colors">Home</a></li>
                  <li><a href="#men" className="text-gray-300 hover:text-navyellow transition-colors">Men</a></li>
                  <li><a href="#women" className="text-gray-300 hover:text-navyellow transition-colors">Women</a></li>
                  <li><a href="#kids" className="text-gray-300 hover:text-navyellow transition-colors">Kids</a></li>
                  <li><a href="#blazers" className="text-gray-300 hover:text-navyellow transition-colors">Blazers & Suitings</a></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-navyellow font-playfair">Customer Service</h3>
                <ul className="space-y-2">
                  <li><a href="#contact" className="text-gray-300 hover:text-navyellow transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Store Location</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1 text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-navyellow font-playfair">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-sm text-gray-400">
          {/* <p>&copy; {neFullYear()} Navkar Fashion. All rights reserved.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
