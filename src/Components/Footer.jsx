import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8 md:flex md:justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-xl hover:text-gray-300">
              <FiFacebook />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FiTwitter />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="block py-2 hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">123 Main Street, City</p>
          <p className="mb-2">Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-6 py-4 text-sm text-center border-t border-gray-800">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer