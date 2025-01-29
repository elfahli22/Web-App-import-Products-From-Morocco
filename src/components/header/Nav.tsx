// components/Navbar.tsx
'use client'
import Link from 'next/link';
import { Button } from '../ui/button'; // Assuming shadcn/ui provides a Button component
import { Menu, X, ChevronDown } from 'lucide-react'; // Icons for mobile menu and dropdown
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false); // For products dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
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

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProductsDropdown}
                className="text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-sm font-medium flex items-center focus:outline-none"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    isProductsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
                  <Link href="/products/olive-oil">
                    <span className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-[#F3F4F6] cursor-pointer">
                      Olive Oil
                    </span>
                  </Link>
                  <Link href="/products/argan-oil">
                    <span className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-[#F3F4F6] cursor-pointer">
                      Argan Oil
                    </span>
                  </Link>
                  <Link href="/products/dates">
                    <span className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-[#F3F4F6] cursor-pointer">
                      Dates
                    </span>
                  </Link>
                  <Link href="/products/handicrafts">
                    <span className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-[#F3F4F6] cursor-pointer">
                      Handicrafts
                    </span>
                  </Link>
                </div>
              )}
            </div>

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

            {/* Mobile Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProductsDropdown}
                className="w-full text-left text-[#F3F4F6] hover:text-[#D97706] px-3 py-2 rounded-md text-base font-medium flex items-center justify-between focus:outline-none"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    isProductsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mobile Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="pl-4">
                  <Link href="/products/olive-oil">
                    <span className="block px-3 py-2 text-sm text-[#F3F4F6] hover:text-[#D97706] cursor-pointer">
                      Olive Oil
                    </span>
                  </Link>
                  <Link href="/products/argan-oil">
                    <span className="block px-3 py-2 text-sm text-[#F3F4F6] hover:text-[#D97706] cursor-pointer">
                      Argan Oil
                    </span>
                  </Link>
                  <Link href="/products/dates">
                    <span className="block px-3 py-2 text-sm text-[#F3F4F6] hover:text-[#D97706] cursor-pointer">
                      Dates
                    </span>
                  </Link>
                  <Link href="/products/handicrafts">
                    <span className="block px-3 py-2 text-sm text-[#F3F4F6] hover:text-[#D97706] cursor-pointer">
                      Handicrafts
                    </span>
                  </Link>
                </div>
              )}
            </div>

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