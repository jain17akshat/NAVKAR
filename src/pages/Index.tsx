
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Shirt, ShirtIcon, Bookmark, FileText } from 'lucide-react';

const Index = () => {
  const menProducts = [
    {
      title: "Jeans",
      description: "Premium denim with perfect fit",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Formal Shirts",
      description: "Classic designs for office wear",
      icon: <Shirt className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Formal Pants",
      description: "Comfortable and stylish trousers",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Kurtas",
      description: "Traditional wear for all occasions",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Blazer Sets",
      description: "Premium blazers for formal events",
      icon: <FileText className="text-gray-700 h-8 w-8" />
    },
    {
      title: "T-Shirts",
      description: "Casual t-shirts for everyday wear",
      icon: <Shirt className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Casual Shirts",
      description: "Relaxed fits for casual occasions",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Ethnic Wear",
      description: "Traditional outfits for festivals",
      icon: <Bookmark className="text-gray-700 h-8 w-8" />
    }
  ];

  const womenProducts = [
    {
      title: "Tops",
      description: "Stylish tops for every occasion",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Jeans",
      description: "Trendy designs for modern women",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Salwar-Kurta",
      description: "Elegant ethnic wear collection",
      icon: <Bookmark className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Dresses",
      description: "Beautiful dresses for all occasions",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Sarees",
      description: "Traditional sarees with modern touch",
      icon: <Bookmark className="text-gray-700 h-8 w-8" />
    }
  ];

  const kidsProducts = [
    {
      title: "Boys Jeans",
      description: "Comfortable jeans for active boys",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Boys T-Shirts",
      description: "Fun and colorful t-shirts",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Boys Shirts",
      description: "Casual and formal shirts",
      icon: <Shirt className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Girls Frocks",
      description: "Pretty frocks for little girls",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Girls Tops",
      description: "Cute tops for everyday wear",
      icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
    }
  ];

  const blazerProducts = [
    {
      title: "Formal Suits",
      description: "Premium quality suits for work",
      icon: <FileText className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Wedding Blazers",
      description: "Elegant blazers for special occasions",
      icon: <FileText className="text-gray-700 h-8 w-8" />
    },
    {
      title: "Casual Blazers",
      description: "Smart casual blazers for daily wear",
      icon: <FileText className="text-gray-700 h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <ProductSection 
          id="men"
          title="Men's Collection" 
          description="Explore our wide range of men's clothing from casual to formal wear, crafted with premium fabrics for comfort and style."
          products={menProducts}
        />
        <div className="bg-gray-50">
          <ProductSection 
            id="women"
            title="Women's Collection" 
            description="Discover our elegant collection for women featuring the latest trends in fashion with exceptional quality and designs."
            products={womenProducts}
          />
        </div>
        <ProductSection 
          id="kids"
          title="Kids Collection" 
          description="Adorable and comfortable clothing for boys and girls, designed with care for your little ones."
          products={kidsProducts}
        />
        <div className="bg-gray-50">
          <ProductSection 
            id="blazers"
            title="Blazers & Suitings" 
            description="Premium blazers and suits crafted with fine fabrics and excellent tailoring for a distinguished look."
            products={blazerProducts}
          />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
