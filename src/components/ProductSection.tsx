
import { Shirt, Jeans, Trousers, Kurta, Blazer } from 'lucide-react';

interface ProductProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductCard = ({ title, description, icon }: ProductProps) => {
  return (
    <div className="product-card p-6">
      <div className="flex items-center justify-center w-16 h-16 bg-navyellow/20 rounded-full mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <button className="btn-secondary w-full">See More</button>
    </div>
  );
};

interface SectionProps {
  id: string;
  title: string;
  description: string;
  products: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const ProductSection = ({ id, title, description, products }: SectionProps) => {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-gray-600 max-w-3xl mb-12">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
