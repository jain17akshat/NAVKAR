
import { ArrowRight } from 'lucide-react';

interface CategoryProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: CategoryProps) => {
  return (
    <a href={link} className="category-card group h-full">
      <div className="relative overflow-hidden h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-40">
          <div className="text-center px-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 font-playfair">{title}</h3>
            <span className="inline-flex items-center text-navyellow font-medium text-sm sm:text-base">
              Browse Collection <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16 bg-royal-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Browse Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 auto-rows-fr">
          <CategoryCard
            title="Men's Collection"
            image="/images/categories/mens-collection.jpg"
            link="#men"
          />
          <CategoryCard
            title="Women's Collection"
            image="/images/categories/womens-collection.jpg"
            link="#women"
          />
          <CategoryCard
            title="Kid's Collection"
            image="/images/categories/kids-collection.jpg"
            link="#kids"
          />
          <CategoryCard
            title="Blazers & Suitings"
            image="/images/categories/blazers-collection.jpg"
            link="#blazers"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
