
import { TabsList, TabsTrigger, Tabs } from "../ui/tabs";

interface SubCategory {
  id: string;
  title: string;
}

interface ProductCategoryTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  subCategories: SubCategory[];
  title: string;
}

const ProductCategoryTabs = ({ activeTab, onTabChange, subCategories, title }: ProductCategoryTabsProps) => {
  if (subCategories.length === 0) return null;
  
  return (
    <Tabs 
      defaultValue="all" 
      value={activeTab}
      onValueChange={onTabChange}
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
          {subCategories.map(subCat => (
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
  );
};

export default ProductCategoryTabs;
