import { useQuery } from "@tanstack/react-query";
import { getPopularProducts } from "../../api/api";
import HomeHeading from "../HomeHeading/HomeHeading";
import { TPopularProductItem} from "../../types/Types";
// import SlidingCards2 from "../SlidingCards/SlidingCards2";
import SlidingCards2Skeleton from "./LoadingSleleton";

type TPopularProductCategory = {
  id: number;
  name: string;
  description: string;
  category: number;
  images: TPopularProductItem[];
  is_liked: boolean;
};

export default function Trending() {
  const {
    data: popularProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: async () => getPopularProducts(),
    // enabled: !!token,
  });

  if (isLoading) {
    return <SlidingCards2Skeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const modifiedPopularProducts: TSlidingImage[] =
  //   popularProducts?.data?.flatMap((product: TPopularProductCategory) => ({
  //     navigationId: product.id,
  //     images: product.images,
  //   }));

  return (
    <div className="w-full mt-20">
      <HomeHeading heading={"Trending Now"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {popularProducts?.data?.map((product: TPopularProductCategory) =>
          product.images.map((image: TPopularProductItem) => (
            <div key={image.id} className="p-4 border rounded-lg shadow-lg">
              <img
                src={image.image}
                alt={product.name}
                className="w-full h-48 object-contain "
              />
              <h3 className="font-bold text-lg mt-2 dark:text-white">{product.name}</h3>
              {/* <p className="text-gray-500 dark:text-white">{product.description}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
