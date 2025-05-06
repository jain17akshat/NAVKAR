
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

// This function generates 100 products by default for each category
export const generateProducts = (productTemplates: ProductTemplate[], categoryId: string, count = 100): ProductData[] => {
  const expandedProducts: ProductData[] = [];
  
  // Define image options by category
  const getImageOptions = () => {
    // IMPORTANT: Place your images in these folders with the naming convention:
    // men-1.jpg, men-2.jpg, etc. up to men-100.jpg
    switch(categoryId) {
      case 'men':
        // Put men's product images in public/images/products/men/
        // Use filenames: men-1.jpg, men-2.jpg, ..., men-100.jpg
        return Array.from({ length: 100 }, (_, i) => `/images/products/men/men-${i + 1}.jpg`);
      case 'women':
        // Put women's product images in public/images/products/women/
        // Use filenames: women-1.jpg, women-2.jpg, ..., women-100.jpg
        return Array.from({ length: 100 }, (_, i) => `/images/products/women/women-${i + 1}.jpg`);
      case 'kids':
        // Put kids' product images in public/images/products/kids/
        // Use filenames: kids-1.jpg, kids-2.jpg, ..., kids-100.jpg
        return Array.from({ length: 100 }, (_, i) => `/images/products/kids/kids-${i + 1}.jpg`);
      case 'blazers':
        // Put blazer images in public/images/products/blazers/
        // Use filenames: blazer-1.jpg, blazer-2.jpg, ..., blazer-100.jpg
        return Array.from({ length: 100 }, (_, i) => `/images/products/blazers/blazer-${i + 1}.jpg`);
      default:
        // Put general product images in public/images/products/general/
        // Use filenames: product-1.jpg, product-2.jpg, ..., product-100.jpg
        return Array.from({ length: 100 }, (_, i) => `/images/products/general/product-${i + 1}.jpg`);
    }
  };
  
  const imageOptions = getImageOptions();
  
  for (let i = 0; i < count; i++) {
    const baseProduct = productTemplates[i % productTemplates.length];
    const randomPrice = Math.floor(Math.random() * 3000) + 500; // Prices between 500 and 3500
    
    // Each product gets its own image from the category's image folder
    // If you have fewer than 100 images, they will cycle through the available ones
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
