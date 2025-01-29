// components/Footer.tsx
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Icons for social media
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We specialize in importing premium products from Morocco to Russia,
              offering the finest quality goods to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-[#D97706]">
                  Home
                </Link>
              </li>
              <li>
                <a href="/products" className="text-sm text-gray-300 hover:text-[#D97706]">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-300 hover:text-[#D97706]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-300 hover:text-[#D97706]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                Email: info@morocco2russia.com
              </li>
              <li className="text-sm text-gray-300">
                Phone: +7 (123) 456-7890
              </li>
              <li className="text-sm text-gray-300">
                Address: 123 Trade Street, Moscow, Russia
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D97706]"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D97706]"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D97706]"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D97706]"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Morocco2Russia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}