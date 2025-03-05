import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerSocialIcons = [
  {
    icon: <FaFacebook className="w-6 h-6 text-gray-500 hover:text-gray-700" />,
    link: "https://www.facebook.com/profile.php?id=61566517247110",
  },
  {
    icon: (
      <RiInstagramFill className="w-6 h-6 text-gray-500 hover:text-gray-700" />
    ),
    link: "https://www.instagram.com/giftginnie1/profilecard/",
  },

  {
    icon: <FaYoutube className="w-6 h-6 text-gray-500 hover:text-gray-700" />,
    link: "https://youtube.com/@giftginnie?si=oloUJ-NgEC5ickPJ",
  },
];

const footerTabs = [
  {
    title: "Product",
    tabs: [
      { name: "Home", link: "/" },
      { name: "Products", link: "/products" },
      { name: "Favorites", link: "/favourites" },
    ],
  },
  {
    title: "Company",
    tabs: [
      { name: "Contact", link: "/contact" },
      { name: "Blog", link: "/blogs" },
      { name: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Legal",
    tabs: [
      { name: "Privacy", link: "/privacy-policy" },
      { name: "Terms", link: "/terms-and-conditions" },
      { name: "About us", link: "/about-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primaryDark dark:text-white py-10 px-5 md:px-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section with Icons and Description */}
        <div>
          <p className="text-gray-500 font-bold pb-6 dark:text-white">
            Welcome to Gift Ginnie, your trusted partner in premium customized
            corporate gifting, on-demand printing, and high-quality
            Made-in-India products.
          </p>
          <p className="text-gray-500 font-bold pb-6 dark:text-white">
            Gift Ginne is a brand name registered with XYZ Pvt. Ltd
          </p>
          <p className="text-gray-500 font-semibold">
            ✉️ Email Support: support@giftginnie.com
          </p>
          <p className="text-gray-500 font-semibold">
            📱For Sales Queries: bd@giftginnie.com
          </p>
          <p className="text-gray-500 font-semibold">
            👨‍💼 For Business Development: XYZ : 9999999999999
          </p>
        </div>

        {/* Right Section with Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {footerTabs.map((item, index) => (
            <div key={index}>
              <div className="font-bold text-base pb-4">{item.title}</div>
              <div className="flex flex-col gap-3">
                {item.tabs.map((tab, i) => (
                  <Link
                    key={i}
                    to={tab.link}
                    className="text-gray-500 font-medium hover:text-gray-700"
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
        </div>
        <div className="md:flex md:flex-col md:items-center">
        <div className="text-2xl font-bold pb-5">GIFT GINNIE</div>
          <div className="flex gap-4 pb-6">
            {footerSocialIcons.map((item, index) => (
              <a href={item.link} target="_blank" rel="noreferrer">
                <div key={index} className="cursor-pointer">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 sm:pt-0">
        <div className="text-gray-500 font-semibold flex items-center">
          &copy; 2025. All rights reserved.
        </div>
        <div className="md:w-60 md:h-20 sm:w-40 sm:h-10 w-40 h-10 flex items-center justify-center bg-red-400">
            <img
              className="w-full h-full"
              src="/razor_pay_shopify1.jpg"
              alt=""
            />
          </div>
      </div>
      <div className="w-full h-32 lg:flex items-center justify-center hidden overflow-hidden">
            <h1 className="text-[10vw] translate-y-5 gift">GiftGinnie</h1>
      </div>
    </footer>
  );
}
