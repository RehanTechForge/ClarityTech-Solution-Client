import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import "./Navbar.css";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const { isLoggedIn } = useAuth();
  // console.log("login or not ", isLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyle = (isActive) =>
    `nav-link text-indigo-500 ${isActive ? 'text-white' : ''} ${isActive ? 'active-nav-link' : ''
    }`;
  return (
    <header className="bg-indigo-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex items-center justify-between w-full">
          <div className="logo-brand">
            <NavLink exact to="/" className="text-4xl font-bold tracking-tight">
              <img src="./images/logos.png" width={150} alt="" />
            </NavLink>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        {/* Navigation Menu */}
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:gap-6 md:items-center">
            <li>
              <NavLink
                exact
                to="/"
                className={({ isActive }) => activeLinkStyle(isActive)}
                activeClassName="active-nav-link"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => activeLinkStyle(isActive)}
                activeClassName="active-nav-link"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => activeLinkStyle(isActive)}
                activeClassName="active-nav-link"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => activeLinkStyle(isActive)}
                activeClassName="active-nav-link"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) => activeLinkStyle(isActive)}
                  activeClassName="active-nav-link"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) => activeLinkStyle(isActive)}
                    activeClassName="active-nav-link"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => activeLinkStyle(isActive)}
                    activeClassName="active-nav-link"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar