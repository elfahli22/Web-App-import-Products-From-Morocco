// components/Navbar.tsx
'use client'
import Link from 'next/link';
import { Button } from '../ui/button'; // Assuming shadcn/ui provides a Button component
import { Menu, X } from 'lucide-react'; // Icons for mobile menu
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1E3A8A] shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-[#FBBF24] cursor-pointer">
                Morocco2Russia
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <span className="text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/products">
              <span className="text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Products
              </span>
            </Link>
            <Link href="/about">
              <span className="text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Contact
              </span>
            </Link>
            <Button className="bg-[#D97706] hover:bg-[#FBBF24] text-[#1F2937] ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#F3F4F6] hover:text-[#D97706] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E3A8A]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <span className="block text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/products">
              <span className="block text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Products
              </span>
            </Link>
            <Link href="/about">
              <span className="block text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="block text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Contact
              </span>
            </Link>
            <Button className="bg-[#D97706] hover:bg-[#FBBF24] text-[#1F2937] w-full mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}