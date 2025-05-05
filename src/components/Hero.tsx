
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-navyellow-light to-navyellow py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Welcome to <span className="text-white"></span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Fashion for All!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover our wide range of clothing collections for men, women, and kids. From casual wear to formal attire, we have everything you need for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#men" className="btn-primary">
                Shop Men
              </a>
              <a href="#women" className="btn-secondary">
                Shop Women
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in">
            <div className="aspect-square bg-white p-2 rounded-lg shadow-lg transform rotate-3">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Fashion Collection"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-white p-2 rounded-lg shadow-lg transform -rotate-6 hidden md:block">
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
