
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-navyellow flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold">Navkar Fashion</span>
            </div>
            <p className="text-gray-300 mb-4">
              Offering the latest fashion trends with quality fabrics and excellent craftsmanship for men, women, and kids.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navyellow">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-300 hover:text-navyellow transition-colors">Home</a></li>
                  <li><a href="#men" className="text-gray-300 hover:text-navyellow transition-colors">Men</a></li>
                  <li><a href="#women" className="text-gray-300 hover:text-navyellow transition-colors">Women</a></li>
                  <li><a href="#kids" className="text-gray-300 hover:text-navyellow transition-colors">Kids</a></li>
                  <li><a href="#blazers" className="text-gray-300 hover:text-navyellow transition-colors">Blazers & Suitings</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navyellow">Customer Service</h3>
                <ul className="space-y-2">
                  <li><a href="#contact" className="text-gray-300 hover:text-navyellow transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Store Location</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navyellow">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-navyellow transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Navkar Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
