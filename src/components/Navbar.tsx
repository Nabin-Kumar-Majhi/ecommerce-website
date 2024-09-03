import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  cartItemCount: number;
  toggleCart: () => void;
}

const Navbar: FC<NavbarProps> = ({ cartItemCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/public/Brand Logo.jpeg"
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => scrollToSection("store")}
            >
              Store
            </Link>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </Link>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-800 hover:text-gray-600"
            >
              <FaShoppingCart className="text-2xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="ml-4 lg:hidden text-gray-800 hover:text-gray-600"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
            onClick={() => scrollToSection("store")}
          >
            Store
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
