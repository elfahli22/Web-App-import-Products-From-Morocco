// pages/index.tsx
'use client'
import { Button } from '@/components/ui/button';
import { products, slides } from '@/data/page';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for carousel navigation
import { useState } from 'react';
;
export default function Home() {
  // State for the carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Carousel Section */}
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

      {/* Product Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#1F2937]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
                <p className="mt-2 text-lg font-bold text-[#D97706]">
                  {product.price}
                </p>
                <Button className="mt-4 w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}