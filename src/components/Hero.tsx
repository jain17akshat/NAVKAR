
const Hero = () => {
  return (
    <section id="home" className="bg-yellow-100 py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight font-playfair">
              Welcome to <span className="text-primary">Navkar Fashion</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mb-6">
              Royal Fashion for All!
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Discover our wide range of clothing collections for men, women, and kids. From casual wear to formal attire, we have everything you need for every occasion.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#men" className="btn-primary text-center">
                Shop Men
              </a>
              <a href="#women" className="btn-secondary text-center">
                Shop Women
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in">
            <div className="aspect-square bg-white/80 p-2 rounded-lg shadow-lg transform rotate-3 max-w-xs sm:max-w-sm mx-auto md:mx-0 border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Fashion Collection"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-44 sm:h-44 bg-white/80 p-2 rounded-lg shadow-lg transform -rotate-6 hidden sm:block border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Fashion Item"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
