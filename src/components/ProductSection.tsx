
import { Shirt, ShirtIcon, Bookmark, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent } from "./ui/dialog";

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
        className="product-gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
        onClick={() => setIsDialogOpen(true)}
      >
        <AspectRatio ratio={1/1} className="bg-gray-100">
          <img 
            src={`https://source.unsplash.com/${image}`} 
            alt={title} 
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
        <div className="p-2 bg-white">
          <h4 className="text-sm font-medium text-gray-800 text-center">{title}</h4>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (!open) resetZoom();
      }}>
        <DialogContent className="max-w-4xl p-0 bg-white overflow-hidden">
          <div className="relative flex justify-center items-center h-[80vh] overflow-hidden bg-black">
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm rounded-full h-8 w-8"
                onClick={handleZoomIn}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm rounded-full h-8 w-8"
                onClick={handleZoomOut}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>
            <div className="overflow-auto max-h-full max-w-full p-4">
              <img 
                src={`https://source.unsplash.com/${image}`} 
                alt={title}
                className="transition-transform duration-200 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
            <h3 className="absolute bottom-4 left-4 text-white bg-black/50 p-2 rounded text-lg">
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
  const productsPerPage = 12; // Show 12 products per page
  
  // Generate products based on the provided templates
  const generateProducts = (productTemplates: any[], count = 100) => {
    const expandedProducts = [];
    const imageOptions = [
      'photo-1519389950473-47ba0277781c',
      'photo-1460925895917-afdab827c52f',
      'photo-1581090464777-f3220bbe1b8b',
      'photo-1498050108023-c5249f4df085',
      'photo-1434494878577-86c23bcb06b9',
      'photo-1581092795360-fd1ca04f0952',
      'photo-1483058712412-4245e9b90334',
      'photo-1487887235947-a955ef187fcc',
    ];
    
    for (let i = 0; i < count; i++) {
      const baseProduct = productTemplates[i % productTemplates.length];
      const randomPrice = Math.floor(Math.random() * 3000) + 500; // Prices between 500 and 3500
      const randomImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
      
      expandedProducts.push({
        id: i + 1,
        title: `${baseProduct.title} ${Math.floor(i / productTemplates.length) + 1}`,
        description: baseProduct.description,
        icon: baseProduct.icon,
        price: randomPrice,
        image: randomImage
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
    }, 500); // 500ms delay for loading simulation
  };
  
  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1); // Reset to first page when changing tabs
  };
  
  // Calculate page numbers to display
  const getDisplayedPageNumbers = () => {
    const totalPages = getTotalPages();
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
  };
  
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-gray-600 max-w-3xl mb-12">{description}</p>
        
        {/* Sub-category tabs */}
        {generatedSubCategories.length > 0 && (
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={handleTabChange}
            className="mb-8"
          >
            <TabsList className="bg-gray-100 p-1 mb-6 flex flex-wrap justify-center gap-1">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-navyellow data-[state=active]:text-gray-800"
              >
                All {title}
              </TabsTrigger>
              {generatedSubCategories.map(subCat => (
                <TabsTrigger 
                  key={subCat.id} 
                  value={subCat.id}
                  className="data-[state=active]:bg-navyellow data-[state=active]:text-gray-800"
                >
                  {subCat.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-navyellow"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
        
        <Pagination className="mt-12">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => paginate(currentPage - 1)} 
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}
            
            {getDisplayedPageNumbers().map((number, index) => (
              number === null ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <span className="flex h-10 w-10 items-center justify-center">...</span>
                </PaginationItem>
              ) : (
                <PaginationItem key={`page-${number}`}>
                  <PaginationLink
                    isActive={currentPage === number}
                    onClick={() => paginate(Number(number))}
                    className="cursor-pointer"
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
                  className="cursor-pointer"
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
