import { FC } from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Store Address</h3>
            <p>Suryapath-13, Bhairahawa</p>
            <p>Rupandehi, Nepal</p>
          </div>
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Phone: +977 9825454807</p>
            <p>Email: tharuonlinestorebusiness@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <div className="flex space-x-4">
              <FaCcVisa size={32} />
              <FaCcMastercard size={32} />
              <FaCcPaypal size={32} />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>
            &copy; 2024 Tharu Online Store | Owned By Nabin M. Tharu | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
