
import { useState } from 'react';
import { generateProducts, ProductData } from '../utils/productGenerator';
import ProductGrid from './product/ProductGrid';
import ProductPagination from './product/ProductPagination';
import ProductCategoryTabs from './product/ProductCategoryTabs';
import { useIsMobile } from "../hooks/use-mobile";
import { Shirt, ShirtIcon, Bookmark, FileText } from 'lucide-react';

interface SubCategory {
  id: string;
  title: string;
  products: ProductData[];
}

interface SectionProps {
  id: string;
  title: string;
  description: string;
  products: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  subCategories?: {
    id: string;
    title: string;
    products: {
      title: string;
      description: string;
      icon: React.ReactNode;
    }[];
  }[];
}

const ProductSection = ({ id, title, description, products, subCategories = [] }: SectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const isMobile = useIsMobile();
  
  // For mobile, show fewer products per page
  const productsPerPage = isMobile ? 8 : 12; 
  
  // Generate all products and sub-category products
  const allProducts = generateProducts(products, id);
  
  const generatedSubCategories = subCategories.map(subCat => ({
    id: subCat.id,
    title: subCat.title,
    products: generateProducts(subCat.products, id, 100)
  }));
  
  // Get current products for pagination based on active tab
  const getCurrentProducts = () => {
    let productsToDisplay = allProducts;
    
    if (activeTab !== "all") {
      const selectedSubCategory = generatedSubCategories.find(subCat => subCat.id === activeTab);
      if (selectedSubCategory) {
        productsToDisplay = selectedSubCategory.products;
      }
    }
    
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return productsToDisplay.slice(indexOfFirstProduct, indexOfLastProduct);
  };
  
  const currentProducts = getCurrentProducts();
  
  // Get total number of pages based on active tab
  const getTotalPages = () => {
    let productsToDisplay = allProducts;
    
    if (activeTab !== "all") {
      const selectedSubCategory = generatedSubCategories.find(subCat => subCat.id === activeTab);
      if (selectedSubCategory) {
        productsToDisplay = selectedSubCategory.products;
      }
    }
    
    return Math.ceil(productsToDisplay.length / productsPerPage);
  };
  
  // Change page with loading simulation
  const paginate = (pageNumber: number) => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsLoading(false);
      
      // Scroll to top of the section when changing page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Reduced loading time for better mobile experience
  };
  
  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1); // Reset to first page when changing tabs
  };
  
  return (
    <section id={id} className="py-10 sm:py-16">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-gray-600 max-w-3xl mb-6 sm:mb-12 text-sm sm:text-base">{description}</p>
        
        <ProductCategoryTabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
          subCategories={generatedSubCategories} 
          title={title} 
        />
        
        <ProductGrid products={currentProducts} isLoading={isLoading} />
        
        <ProductPagination 
          currentPage={currentPage}
          totalPages={getTotalPages()}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default ProductSection;
