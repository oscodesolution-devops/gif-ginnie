import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SlidingCards2Skeleton() {
  return (
    <div className="relative px-4 mt-10 md:px-8 max-w-[1400px] mx-auto group">
      {/* Navigation Buttons */}
      <button
        className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 z-10 text-gray-400 bg-gray-200 dark:bg-gray-700 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
        aria-label="Scroll left"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 z-10 text-gray-400 bg-gray-200 dark:bg-gray-700 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
        aria-label="Scroll right"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Skeleton Product Cards Container */}
      <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="snap-start shrink-0 flex flex-col gap-2 w-60 animate-pulse">
            <div className="relative h-96 w-full bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
