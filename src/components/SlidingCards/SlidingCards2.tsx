import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HomePageCards from "../HomePageCards/HomePageCards";
import { useRef } from "react";
import { TSlidingImage } from "../../types/Types";

export default function SlidingCards2({ card }: { card: TSlidingImage[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-4 mt-10 md:px-8 max-w-[1400px] mx-auto group">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 z-10 text-black dark:text-white bg-[#25242585] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
        aria-label="Scroll left"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 z-10 text-black dark:text-white bg-[#25242585] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
        aria-label="Scroll right"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Product Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {card.map((cardItem) => (
          <div
            key={cardItem.navigationId}
            className="snap-start shrink-0 flex gap-6"
          >
            {cardItem.images?.map((image) => (
              <HomePageCards
                key={image.id} // Add a unique key
                card={{
                  id: image.id,
                  image: image.image,
                  product: image.product,
                }}
                navigationId={cardItem.navigationId}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
