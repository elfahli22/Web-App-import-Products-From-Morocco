// pages/index.tsx

import Cards from "@/components/home/cards";
import Slide from "@/components/home/slide";
import { products, slides } from "@/data/page";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Carousel Section */}
      <Slide slides={slides} />

      {/* Product Cards Section */}
      <Cards products={products} />
    </div>
  );
}