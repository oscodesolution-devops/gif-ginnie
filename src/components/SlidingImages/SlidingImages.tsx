import { motion, useScroll, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCarouselImages } from "../../api/api";
import CarouselImagesLoading from "./SkeletonLoading";

type TCarouselItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string | null;
  is_active: boolean;
};

export default function ImageGallery() {
  const { scrollYProgress } = useScroll();
  // Reduced movement range for smaller scroll effect
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200] // Smaller pixel range for subtle movement
  );
  const {
    data: carouselItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carouselItems"],
    queryFn: async () => getCarouselImages(),
  });

  if (isLoading) {
    return <CarouselImagesLoading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      <motion.div className="flex gap-4 px-4 md:px-8" style={{ x }}>
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {carouselItems.data.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[300px] rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
