
import ProductGalleryItem from "./ProductGalleryItem";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  image: string; // This should be the path to your image in public/images/products/[category]/
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
  
  // The grid is responsive and will automatically adjust to show the products
  // in a clean grid layout regardless of how many products are displayed (even 100)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-fr">
      {products.map((product) => (
        <ProductGalleryItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          icon={product.icon}
          price={product.price}
          // IMPORTANT: Images should be placed in:
          // - public/images/products/men/ for men's products
          // - public/images/products/women/ for women's products
          // - public/images/products/kids/ for kids' products  
          // - public/images/products/blazers/ for blazers
          // - public/images/products/general/ for general products
          //
          // Image naming convention should follow: 
          // - For men: men-1.jpg, men-2.jpg, ... men-100.jpg
          // - For women: women-1.jpg, women-2.jpg, ... women-100.jpg
          // - For kids: kids-1.jpg, kids-2.jpg, ... kids-100.jpg
          // - For blazers: blazer-1.jpg, blazer-2.jpg, ... blazer-100.jpg
          // - For general: product-1.jpg, product-2.jpg, ... product-100.jpg
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
