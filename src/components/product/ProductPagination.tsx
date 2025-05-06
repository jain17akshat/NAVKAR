
import { useIsMobile } from "../../hooks/use-mobile";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const ProductPagination = ({ currentPage, totalPages, paginate }: ProductPaginationProps) => {
  const isMobile = useIsMobile();

  // Calculate page numbers to display - simplified for mobile
  const getDisplayedPageNumbers = () => {
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
      // Desktop pagination
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
        
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext 
              onClick={() => paginate(currentPage + 1)} 
              className="cursor-pointer h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
