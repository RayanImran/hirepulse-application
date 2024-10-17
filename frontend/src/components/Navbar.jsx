import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="Your Logo" className="h-10" />
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-800 hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-yellow-800 hover:text-blue-500"
            >
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-gray-800 hover:text-blue-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-gray-800 hover:text-blue-500">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className=" text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
