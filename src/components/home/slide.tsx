'use client'
// components/home/Slide.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button'; // Assuming shadcn/ui provides a Button component

// Define the type for a slide
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Props for the Slide component
interface SlideProps {
  slides: Slide[];
}

export default function Slide({ slides }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]); // Re-run effect when currentSlide changes

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold">{slide.title}</h1>
            <p className="mt-2 text-lg">{slide.description}</p>
            <Button className="mt-4 bg-[#D97706] hover:bg-[#FBBF24] text-[#1F2937]">
              Shop Now
            </Button>
          </div>
        </div>
      ))}

      {/* Carousel Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}