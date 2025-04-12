import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-blue-600">
            PickMy<span className="text-red-600">PC.</span>
          </p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} PickMyPC. All rights reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-6">
          {isHomePage ? (
            <>
              <a href="#" className="text-sm hover:text-blue-400">
                Home
              </a>
              <a href="#logo-wall" className="text-sm hover:text-blue-400">
                Trusted Brands
              </a>
              <a href="#features" className="text-sm hover:text-blue-400">
                Features
              </a>
              <a href="#stats" className="text-sm hover:text-blue-400">
                Stats
              </a>
            </>
          ) : (
            <>
              <a href="/" className="text-sm hover:text-blue-400">
                Home
              </a>
              <a href="/parts" className="text-sm hover:text-blue-400">
                Parts
              </a>
              <a href="/build" className="text-sm hover:text-blue-400">
                Build
              </a>
              <a href="/about" className="text-sm hover:text-blue-400">
                About
              </a>
              <a href="/contact" className="text-sm hover:text-blue-400">
                Contact
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
