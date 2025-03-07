import { useNavigate } from "react-router-dom";
import { TPopularCategories } from "../../types/Types";
import HomeHeading from "../HomeHeading/HomeHeading";

export default function NotFixedHeroCards({
  popularcatogories,
}: {
  popularcatogories: { data: TPopularCategories[] };
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <HomeHeading heading={"Elevating Your Style Game"} />
        <div className="w-full text-center uppercase text-sm px-20 dark:text-white/70">
          Discover the Perfect Blend of Comfort and Trend with Our Exclusive
          Collection. Explore Deals on Jeans, Sneakers, and More!
        </div>
      </div>
      <div className="mx-auto px-4  py-12 flex justify-center flex-wrap gap-6 items-stretch">
        {popularcatogories?.data?.map((item: TPopularCategories) => (
          <div
            onClick={() =>
              navigate(`/products`, {
                state: { category_id: item.category_id },
              })
            }
            key={item.category_id}
            className="flex flex-col  cursor-pointer justify-between bg-white dark:bg-[#1c1c1c] rounded-lg border-2 p-4 md:w-72 md:h-96 gap-6 md:gap-0" // Fixed width and height
          >
            <h2 className="text-3xl font-bold text-center flex items-center justify-center  dark:text-white/90">
              {item.category_name}
            </h2>
            <p className="text-sm text-gray-600 text-center flex items-center justify-center  dark:text-white/70">
              {item.category_description.slice(0, 150)}
            </p>
            <div className=" overflow-hidden rounded-xl">
              <img
                src={`${item.image}`}
                alt={item.category_name}
                className="w-full h-full object-contain" // Ensures the image covers the card space
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
