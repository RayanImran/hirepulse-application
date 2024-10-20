import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              Tools
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 py-2 w-48 bg-white shadow-lg border rounded">
                <li>
                  <Link
                    to="/resume-optimizer"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Resume Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/job-fit"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Job Fit Analyzer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/field-specific-resume"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Field-Specific Resume Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/interview-practice"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Interview Practice
                  </Link>
                </li>
              </ul>
            )}
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
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
