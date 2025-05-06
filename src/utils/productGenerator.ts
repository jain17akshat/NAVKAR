
interface ProductTemplate {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  image: string;
}

export const generateProducts = (productTemplates: ProductTemplate[], categoryId: string, count = 100): ProductData[] => {
  const expandedProducts: ProductData[] = [];
  
  // Define image options by category
  const getImageOptions = () => {
    switch(categoryId) {
      case 'men':
        return Array.from({ length: 12 }, (_, i) => `/images/products/men/men-${i + 1}.jpg`);
      case 'women':
        return Array.from({ length: 12 }, (_, i) => `/images/products/women/women-${i + 1}.jpg`);
      case 'kids':
        return Array.from({ length: 12 }, (_, i) => `/images/products/kids/kids-${i + 1}.jpg`);
      case 'blazers':
        return Array.from({ length: 12 }, (_, i) => `/images/products/blazers/blazer-${i + 1}.jpg`);
      default:
        return Array.from({ length: 12 }, (_, i) => `/images/products/general/product-${i + 1}.jpg`);
    }
  };
  
  const imageOptions = getImageOptions();
  
  for (let i = 0; i < count; i++) {
    const baseProduct = productTemplates[i % productTemplates.length];
    const randomPrice = Math.floor(Math.random() * 3000) + 500; // Prices between 500 and 3500
    // Use modulo to cycle through image options
    const productImage = imageOptions[i % imageOptions.length];
    
    expandedProducts.push({
      id: i + 1,
      title: `${baseProduct.title} ${Math.floor(i / productTemplates.length) + 1}`,
      description: baseProduct.description,
      icon: baseProduct.icon,
      price: randomPrice,
      image: productImage
    });
  }
  
  return expandedProducts;
};
