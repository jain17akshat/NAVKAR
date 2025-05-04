
import { ArrowRight } from 'lucide-react';

interface CategoryProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: CategoryProps) => {
  return (
    <a href={link} className="category-card group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <span className="inline-flex items-center text-navyellow font-medium">
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <CategoryCard
            title="Men's Collection"
            image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            link="#men"
          />
          <CategoryCard
            title="Women's Collection"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            link="#women"
          />
          <CategoryCard
            title="Kid's Collection"
            image="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            link="#kids"
          />
          <CategoryCard
            title="Blazers & Suitings"
            image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            link="#blazers"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
