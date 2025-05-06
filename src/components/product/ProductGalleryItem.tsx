
import { useState } from 'react';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { ZoomIn, ZoomOut } from 'lucide-react';
import { useIsMobile } from "../../hooks/use-mobile";

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

export default ProductGalleryItem;
