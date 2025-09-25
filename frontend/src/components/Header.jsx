import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">JN</span>
            </Link>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              JobNest
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/companies"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Companies
            </Link>
            <Link
              to="/post-job"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Post a Job
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About JobNest
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2">
            {/* Auth */}
            <div className="flex justify-end w-24">
              <SignedOut>
                <SignInButton className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex gap-2 cursor-pointer" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Hamburger (Mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <Link
            to="/companies"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Companies
          </Link>
          <Link
            to="/post-job"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Post a Job
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About JobNest
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
