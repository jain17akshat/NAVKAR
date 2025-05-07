
import ProductGalleryItem from "./ProductGalleryItem";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: ProductProps[];
  isLoading: boolean;
}

const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60 sm:h-96">
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-navyellow"></div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full">
      {/* Store ambiance background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15 -z-10"
        style={{ 
          backgroundImage: `url('/lovable-uploads/44f7ca78-7eaa-44d0-be58-c65c6bdd92f5.png')`,
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* Overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-amber-800/10 -z-10"></div>
      
      {/* Wooden shelf-like layout */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 auto-rows-fr p-4 sm:p-6 rounded-lg">
        {products.map((product) => (
          <ProductGalleryItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            icon={product.icon}
            price={product.price}
            // IMPORTANT: Images should be placed in:
            // - public/images/products/men/ for men's products (name format: men-1.jpg to men-100.jpg)
            // - public/images/products/women/ for women's products (name format: women-1.jpg to women-100.jpg)
            // - public/images/products/kids/ for kids' products (name format: kids-1.jpg to kids-100.jpg)
            // - public/images/products/blazers/ for blazers (name format: blazer-1.jpg to blazer-100.jpg)
            // - public/images/products/general/ for general products (name format: product-1.jpg to product-100.jpg)
            image={product.image}
          />
        ))}
      </div>
      
      {/* Decorative elements to mimic the store shelving */}
      <div className="absolute left-0 top-1/2 w-2 h-3/4 bg-amber-800 rounded-r-lg -z-5 hidden lg:block"></div>
      <div className="absolute right-0 top-1/3 w-2 h-3/4 bg-amber-800 rounded-l-lg -z-5 hidden lg:block"></div>
    </div>
  );
};

export default ProductGrid;
