import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [currentTestimonialIndex, testimonials.length]); // Re-run this effect when currentTestimonialIndex or testimonials length changes

  const goToPrevTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  return (
  
      <div className="relative lg:w-[70%] md:w-[60%] md:h-[16rem] w-[100%] s lg:h-[20rem] h-[26rem] ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-1000 flex flex-col items-center justify-center px-4 ${
              index === currentTestimonialIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-center lg:text-lg font-semibold md:w-[28rem] lg:w-[34rem] w-[20rem]">
              {testimonial.quote}
            </p>
            <p className="text-center mt-2">{testimonial.name}</p>
            <img
              className="h-[3rem] w-[3rem]"
              src={testimonial.avatar}
              alt="avatar"
            />
          </div>
        ))}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-xl rounded-full bg-black bg-opacity-50 px-4 py-2"
          onClick={goToPrevTestimonial}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-xl rounded-full bg-black bg-opacity-50 px-4 py-2"
          onClick={goToNextTestimonial}
        >
          <FaChevronRight />
        </button>
      </div>

  );
};

export default TestimonialCarousel;
