
import { Shirt, ShirtIcon, Bookmark, FileText } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, description, icon, price, image }: ProductProps) => {
  return (
    <Card className="product-card overflow-hidden h-full flex flex-col transition-all hover:-translate-y-1">
      <AspectRatio ratio={4/3}>
        <img 
          src={`https://source.unsplash.com/${image}`} 
          alt={title} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
          loading="lazy"
        />
      </AspectRatio>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-center w-10 h-10 bg-navyellow/20 rounded-full mb-3 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-3 text-sm">{description}</p>
        <p className="text-navyellow font-bold text-center text-lg">₹{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-4 px-4 flex gap-2">
        <Button variant="outline" className="flex-1 hover:bg-navyellow hover:text-gray-800 border-navyellow">
          View Details
        </Button>
        <Button className="flex-1 bg-navyellow hover:bg-navyellow-dark text-gray-800">
          Add to Enquiry
        </Button>
      </CardFooter>
    </Card>
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
    products: generateProducts(subCat.products, 30) // Fewer products per subcategory
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard
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
