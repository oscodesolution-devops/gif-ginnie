import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { getAllCategories } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

type TnavItems = {
  name: string;
  link: string;
  list?: { id: number; name: string }[];
};

let navItems: TnavItems[] = [
  { name: "Home", link: "/" },
  {
    name: "Products",
    link: "/products",
    list: [],
  },
  { name: "Favorites", link: "/favourites" },
  { name: "Contact", link: "/contact" },
  { name: "Blog", link: "/blogs" },
  { name: "FAQ", link: "/faq" },
  { name: "Privacy", link: "/privacy-policy" },
  { name: "Terms", link: "/terms-and-conditions" },
];

export default function NavMenu({
  handleNavMenu,
}: {
  handleNavMenu: () => void;
}) {
  const navigate = useNavigate();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemName: string) => {
    setOpenItem(openItem === itemName ? null : itemName);
  };

  const {
    data: allCategories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => getAllCategories(),
  });

  if (categoriesLoading) {
    return <div>Loading...</div>;
  }

  if (categoriesError) {
    return <div>Error: {categoriesError.message}</div>;
  }

  console.log(allCategories);

  // Update navItems with dynamic categories
  const updatedNavItems = navItems.map((item) => {
    if (item.name === "Products") {
      return {
        ...item,
        list: allCategories?.data?.map(
          (category: { id: number; name: string }) => ({
            id: category.id,
            name: category.name,
          })
        ),
      };
    }
    return item;
  });

  return (
    <div className="absolute top-0 left-0 w-full md:w-1/4 h-screen bg-white dark:bg-[#3d3c3c] dark:text-white overflow-auto">
      {/* Header */}
      <div className="w-full text-2xl font-bold bg-white dark:bg-[#3d3c3c] dark:text-white">
        <div className="flex justify-between items-center px-8 py-7 border-b border-gray-300">
          <div>MENU</div>
          <div onClick={handleNavMenu} className="cursor-pointer">
            <IoMdClose />
          </div>
        </div>

        {/* Menu List */}
        <div className="text-xl font-semibold px-8">
          {updatedNavItems.map((item) => (
            <div
              key={item.name}
              className="border-b py-6 uppercase border-gray-300"
            >
              {/* Main Menu Item */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (item.list && item.list.length > 0) {
                    handleToggle(item.name);
                  } else {
                    navigate(item.link);
                    handleNavMenu(); // Close menu on selection
                  }
                }}
              >
                <div>{item.name}</div>
                {item.list && item.list.length > 0 && (
                  <div className="cursor-pointer">
                    {openItem === item.name ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                )}
              </div>

              {/* Submenu (Opens when clicked) */}
              {openItem === item.name && item.list && (
                <div className="pl-6 mt-2">
                  {item.list.map((subItem: { id: number; name: string }) => (
                    <div
                      key={subItem.id}
                      onClick={() => {
                        navigate(`/products`, {
                          state: { category_id: subItem.id },
                        });
                        handleNavMenu();
                      }}
                      className="py-3 text-sm cursor-pointer hover:text-black/50 border-b border-gray-300 last:border-b-0"
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
