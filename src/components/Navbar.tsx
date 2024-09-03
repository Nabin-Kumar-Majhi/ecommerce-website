import { FC } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

interface NavbarProps {
  cartItemCount: number;
  toggleCart: () => void;
}

const Navbar: FC<NavbarProps> = ({ cartItemCount, toggleCart }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
          <div className="hidden md:flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
