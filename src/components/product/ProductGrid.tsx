
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-fr">
      {products.map((product) => (
        <ProductGalleryItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          icon={product.icon}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
