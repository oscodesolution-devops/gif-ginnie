import { useQuery } from "@tanstack/react-query";
import { getPopularProducts } from "../../api/api";
import HomeHeading from "../HomeHeading/HomeHeading";
import { TPopularProductItem, TSlidingImage } from "../../types/Types";
import SlidingCards2 from "../SlidingCards/SlidingCards2";
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

  const modifiedPopularProducts: TSlidingImage[] =
    popularProducts?.data.flatMap((product: TPopularProductCategory) => ({
      navigationId: product.id,
      images: product.images,
    }));

  return (
    <div className="w-full mt-20">
      <HomeHeading heading={"Trending Now"} />
      {modifiedPopularProducts && (
        <div>
          <SlidingCards2 card={modifiedPopularProducts} />
        </div>
      )}
    </div>
  );
}
