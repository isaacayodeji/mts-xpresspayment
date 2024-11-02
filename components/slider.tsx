import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  images: string[];
  texts?: string[];
}

const Slider: React.FC<CarouselProps> = ({ images, texts = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Re-run this effect when currentImageIndex changes

  const goToPrevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const getTextStyles = (index: number) => {
    const styles: string[] = [
      "text-xl",
      "lg:text-[32px]",
      "md:text-[28px]",
      "font-bold",
      //   "bg-black",
      //   "bg-opacity-50",
      "px-4",
      "py-2",
      "rounded-lg",
      "xl:w-[34rem]",
      "w-[26rem]",
      "xl:mt-[13.5rem]",
      "lg:mt-[10rem]",
      "md:mt-[15rem]",
      "sm:mt-[12rem]",
      "max-sm:mt-[6.7rem]",
      "max-xs:mt-[6rem]"
    ];

    // Add additional styles based on index or any other condition
    if (index % 2 === 0) {
      styles.push("text-black"); // Example: Set text color to white for even indices
    } else if (index % 4 === 0) {
      styles.push("text-black");
    } else {
      styles.push("text-white"); // Example: Set text color to black for odd indices
    }

    return styles.join(" ");
  };

  return (
    
    <div className="relative md:w-[50%] md:h-[30%] w-[100%] h-[50%] overflow-hidden xl:pt-[16rem] lg:pt-[12rem] pt-[5rem]">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt={`Slide ${index}`}
        />
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        {texts.map((text, index) => (
          <p
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            } ${getTextStyles(index)}`}
          >
            {text}
          </p>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 px-4 py-2"
        onClick={goToPrevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 px-4 py-2"
        onClick={goToNextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
