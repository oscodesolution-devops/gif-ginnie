const CarouselImagesLoading = () => {
  return (
    <div className="relative w-full px-4 sm:px-16 md:px-24 mb-28 animate-pulse">
      {/* Skeleton Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-gray-300 dark:bg-gray-700"></div>

      {/* Skeleton Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-3 h-3 rounded-full bg-gray-400"></div>
        ))}
      </div>

      {/* Skeleton Controls */}
      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 cursor-pointer bg-gray-400 rounded-full"
      ></button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 cursor-pointer bg-gray-400 rounded-full"
      ></button>
    </div>
  );
};
export default CarouselImagesLoading;
