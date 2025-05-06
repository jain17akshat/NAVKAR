
import { Shirt, ShirtIcon, Bookmark, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent } from "./ui/dialog";
import { useIsMobile } from "../hooks/use-mobile";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  image: string;
}

const ProductGalleryItem = ({ id, title, image }: ProductProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const isMobile = useIsMobile();

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <>
      <div 
        className="product-gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all h-full"
        onClick={() => setIsDialogOpen(true)}
      >
        <AspectRatio ratio={1/1} className="bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
        <div className="p-1 sm:p-2 bg-white">
          <h4 className="text-xs sm:text-sm font-medium text-gray-800 text-center truncate">{title}</h4>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (!open) resetZoom();
      }}>
        <DialogContent className="max-w-4xl p-0 bg-white overflow-hidden sm:max-h-[90vh] max-h-[85vh] w-[95vw] sm:w-auto">
          <div className="relative flex justify-center items-center h-[70vh] sm:h-[80vh] overflow-hidden bg-black">
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2 z-10">
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm rounded-full h-7 w-7 sm:h-8 sm:w-8"
                onClick={handleZoomIn}
              >
                <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm rounded-full h-7 w-7 sm:h-8 sm:w-8"
                onClick={handleZoomOut}
              >
                <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
            <div className="overflow-auto max-h-full max-w-full p-2 sm:p-4">
              <img 
                src={image} 
                alt={title}
                className="transition-transform duration-200 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
            <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white bg-black/50 p-1 sm:p-2 rounded text-sm sm:text-lg max-w-[90%] truncate">
              {title}
            </h3>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

interface SubCategory {
  id: string;
  title: string;
  products: ProductProps[];
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
  
  // Generate products based on the provided templates
  const generateProducts = (productTemplates: any[], count = 100) => {
    const expandedProducts = [];
    
    // Define image options by category
    const getImageOptions = () => {
      switch(id) {
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
  
  // Generate all products and sub-category products
  const allProducts = generateProducts(products);
  
  const generatedSubCategories = subCategories.map(subCat => ({
    id: subCat.id,
    title: subCat.title,
    products: generateProducts(subCat.products, 100) // 100 products per subcategory for gallery
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
  
  // Calculate page numbers to display - simplified for mobile
  const getDisplayedPageNumbers = () => {
    const totalPages = getTotalPages();
    
    if (isMobile) {
      // On mobile show fewer page numbers
      if (totalPages <= 3) return Array.from({length: totalPages}, (_, i) => i + 1);
      
      if (currentPage <= 2) {
        return [1, 2, null, totalPages];
      } else if (currentPage >= totalPages - 1) {
        return [1, null, totalPages - 1, totalPages];
      } else {
        return [1, null, currentPage, null, totalPages];
      }
    } else {
      // Desktop pagination - keep existing logic
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      
      if (totalPages <= 5) return pageNumbers;
      
      if (currentPage <= 3) {
        return [...pageNumbers.slice(0, 5), null, totalPages];
      } else if (currentPage >= totalPages - 2) {
        return [1, null, ...pageNumbers.slice(totalPages - 5)];
      } else {
        return [
          1, 
          null, 
          ...pageNumbers.slice(currentPage - 2, currentPage + 1),
          null,
          totalPages
        ];
      }
    }
  };
  
  return (
    <section id={id} className="py-10 sm:py-16">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-gray-600 max-w-3xl mb-6 sm:mb-12 text-sm sm:text-base">{description}</p>
        
        {/* Sub-category tabs - scrollable on mobile */}
        {generatedSubCategories.length > 0 && (
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={handleTabChange}
            className="mb-6 sm:mb-8"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-gray-100 p-1 mb-4 sm:mb-6 flex flex-nowrap justify-start sm:justify-center gap-1 min-w-max w-auto">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-navyellow data-[state=active]:text-gray-800 whitespace-nowrap text-xs sm:text-sm"
                >
                  All {title}
                </TabsTrigger>
                {generatedSubCategories.map(subCat => (
                  <TabsTrigger 
                    key={subCat.id} 
                    value={subCat.id}
                    className="data-[state=active]:bg-navyellow data-[state=active]:text-gray-800 whitespace-nowrap text-xs sm:text-sm"
                  >
                    {subCat.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-60 sm:h-96">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-navyellow"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-fr">
            {currentProducts.map((product) => (
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
        )}
        
        <Pagination className="mt-8 sm:mt-12">
          <PaginationContent className="flex flex-wrap justify-center">
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => paginate(currentPage - 1)} 
                  className="cursor-pointer h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center"
                />
              </PaginationItem>
            )}
            
            {getDisplayedPageNumbers().map((number, index) => (
              number === null ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <span className="flex h-9 w-5 sm:h-10 sm:w-10 items-center justify-center">...</span>
                </PaginationItem>
              ) : (
                <PaginationItem key={`page-${number}`}>
                  <PaginationLink
                    isActive={currentPage === number}
                    onClick={() => paginate(Number(number))}
                    className="cursor-pointer h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center"
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              )
            ))}
            
            {currentPage < getTotalPages() && (
              <PaginationItem>
                <PaginationNext 
                  onClick={() => paginate(currentPage + 1)} 
                  className="cursor-pointer h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default ProductSection;
