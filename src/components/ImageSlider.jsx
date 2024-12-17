import React, { useState, useEffect, useCallback } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import {
  profile1,
  profile2,
  profile3,
  profile4,
} from "../assets/profile/index";

const ImageSlider = () => {
  const slides = [
    {
      image: profile1,
      name: "Aprilia Jones",
      description:
        "I was adamant that the next man I met and committed to would be the one with whom I would spend the rest of my life. On Romancedelight, I didn't expect to meet a man. I decided to sign up anyhow and simply play around with it to see what would happen.",
    },
    {
      image: profile2,
      name: "Jane Smith",
      description:
        "Recently got out of a painful breakup and made an Secret Crush account to distract me from it. We decided to meet for coffee at a local restaurant after about a week of talking. We decided to tie the knot this year.",
    },
    {
      image: profile3,
      name: "Mike stephane",
      description:
        "Many thanks to Romancedelight! I've discovered the love of my life, and we're planning to marry. I couldn't resist swiping right after reading her profile. We went on our first date after talking for about a week, and I sensed there was something special about her.",
    },
    {
      image: profile4,
      name: "Amy Smith",
      description:
        "THANK YOU for facilitating my meeting with my soulmate. I'll be eternally grateful to LDS for bringing us together.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div className="w-full mx-auto relative group h-[400px] sm:h-[500px] bg-[#db147d]">
      <div
        className="w-full h-full relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main content container with smooth transition */}
        <div
          className="absolute top-[50%] left-[50%] w-full h-full flex flex-col items-center max-w-5xl
          justify-center px-4 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1, transform: "translate(-50%, -50%)" }}
        >
          {/* Image container */}
          <div className="w-[100px] h-[100px] mb-4 sm:mb-6">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].name}
              className="w-full h-full rounded-full object-cover transform 
              transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text content */}
          <div className="text-center bg-white py-6 px-4 rounded-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 transition-all duration-300 italic">
              <span className="text-[#bd147b]">
                {slides[currentIndex].name.split(" ")[0]}
              </span>{" "}
              {slides[currentIndex].name.split(" ")[1]}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base px-4">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation buttons - visible on hover/touch on larger screens, always visible on mobile */}
        <button
          className="absolute left-10 top-1/2 -translate-y-1/2 p-2 bg-black/20 text-white rounded-full 
                     sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <IoChevronBackOutline className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <button
          className="absolute right-10 top-1/2 -translate-y-1/2 p-2 bg-black/20 text-white rounded-full 
                     sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <IoChevronForwardOutline className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-4" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
