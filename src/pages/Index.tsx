import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Shirt, ShirtIcon, Bookmark, FileText, Baby, User } from 'lucide-react';

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

  // Define men's sub-categories
  const menSubCategories = [
    {
      id: "men-jeans",
      title: "Jeans",
      products: [
        {
          title: "Slim Fit Jeans",
          description: "Modern slim fit designs",
          icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Straight Cut Jeans",
          description: "Classic straight leg style",
          icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Regular Fit Jeans",
          description: "Comfortable regular fit",
          icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
        }
      ]
    },
    {
      id: "men-formal-shirts",
      title: "Formal Shirts",
      products: [
        {
          title: "Cotton Formal Shirt",
          description: "Pure cotton formal wear",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Wrinkle-Free Shirt",
          description: "Easy maintenance formal shirts",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Silk Blend Shirt",
          description: "Premium blend formal shirts",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        }
      ]
    },
    {
      id: "men-formal-pants",
      title: "Formal Pants",
      products: [
        {
          title: "Classic Trousers",
          description: "Timeless formal pants",
          icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Slim Fit Trousers",
          description: "Modern slim cut formal pants",
          icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Pleated Trousers",
          description: "Elegant pleated formal pants",
          icon: <ShirtIcon className="text-gray-700 h-8 w-8" />
        }
      ]
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

  // Define women's sub-categories
  const womenSubCategories = [
    {
      id: "women-kurtis",
      title: "Kurtis",
      products: [
        {
          title: "Casual Kurti",
          description: "Everyday comfortable kurtis",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Designer Kurti",
          description: "Premium designer kurtis",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Festive Kurti",
          description: "Elegant festive wear kurtis",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        }
      ]
    },
    {
      id: "women-tops",
      title: "Tops",
      products: [
        {
          title: "Casual Top",
          description: "Everyday stylish tops",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Formal Top",
          description: "Office wear elegant tops",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Party Top",
          description: "Stylish tops for special occasions",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        }
      ]
    },
    {
      id: "women-sarees",
      title: "Sarees",
      products: [
        {
          title: "Silk Saree",
          description: "Pure silk traditional sarees",
          icon: <Bookmark className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Cotton Saree",
          description: "Comfortable cotton sarees",
          icon: <Bookmark className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Designer Saree",
          description: "Premium designer collection",
          icon: <Bookmark className="text-gray-700 h-8 w-8" />
        }
      ]
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

  // Define kids' sub-categories
  const kidsSubCategories = [
    {
      id: "kids-boys",
      title: "Boys Wear",
      products: [
        {
          title: "Boys Jeans",
          description: "Durable jeans for active kids",
          icon: <Baby className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Boys T-Shirts",
          description: "Colorful casual t-shirts",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Boys Shirts",
          description: "Smart casual and formal shirts",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        }
      ]
    },
    {
      id: "kids-girls",
      title: "Girls Wear",
      products: [
        {
          title: "Girls Frocks",
          description: "Beautiful frocks for special occasions",
          icon: <Baby className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Girls Tops",
          description: "Cute tops for everyday wear",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Girls Dresses",
          description: "Elegant dresses for little girls",
          icon: <Shirt className="text-gray-700 h-8 w-8" />
        }
      ]
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

  // Define blazers' sub-categories
  const blazerSubCategories = [
    {
      id: "blazers-formal",
      title: "Formal Suits",
      products: [
        {
          title: "Business Suit",
          description: "Professional business attire",
          icon: <User className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Interview Suit",
          description: "Sharp suits for interviews",
          icon: <User className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Executive Suit",
          description: "Premium executive formal wear",
          icon: <User className="text-gray-700 h-8 w-8" />
        }
      ]
    },
    {
      id: "blazers-wedding",
      title: "Wedding Collection",
      products: [
        {
          title: "Groom Blazer",
          description: "Special blazers for grooms",
          icon: <FileText className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Party Blazer",
          description: "Stylish blazers for parties",
          icon: <FileText className="text-gray-700 h-8 w-8" />
        },
        {
          title: "Occasion Blazer",
          description: "Elegant blazers for special events",
          icon: <FileText className="text-gray-700 h-8 w-8" />
        }
      ]
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
          subCategories={menSubCategories}
        />
        <div className="bg-gray-50">
          <ProductSection 
            id="women"
            title="Women's Collection" 
            description="Discover our elegant collection for women featuring the latest trends in fashion with exceptional quality and designs."
            products={womenProducts}
            subCategories={womenSubCategories}
          />
        </div>
        <ProductSection 
          id="kids"
          title="Kids Collection" 
          description="Adorable and comfortable clothing for boys and girls, designed with care for your little ones."
          products={kidsProducts}
          subCategories={kidsSubCategories}
        />
        <div className="bg-gray-50">
          <ProductSection 
            id="blazers"
            title="Blazers & Suitings" 
            description="Premium blazers and suits crafted with fine fabrics and excellent tailoring for a distinguished look."
            products={blazerProducts}
            subCategories={blazerSubCategories}
          />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
