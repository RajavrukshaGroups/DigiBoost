import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import aboutusicon from "../../assets/digi-mark.svg";
import contacticon from "../../assets/contact-icon.svg";
import serviceicon from "../../assets/services-icon.svg";
import clienticon from "../../assets/clients-icon.svg";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    // { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CLIENTS", path: "/portfolio" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const svgIcons = [aboutusicon, serviceicon, clienticon, contacticon];

  return (
    <header className="bg-white sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-gray-900 tracking-tight"
        >
          Digi<span className="text-amber-500">Boost</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-[16px] font-semibold">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <div
                key={link.name}
                className="group flex flex-col items-center justify-center cursor-pointer px-3 py-2"
              >
                <div
                  className={`h-12 flex items-center justify-center mb-1 transition-all duration-300 ease-out ${
                    isActive
                      ? "opacity-100 scale-110 drop-shadow-md"
                      : "opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-md"
                  }`}
                >
                  <img
                    src={svgIcons[index]}
                    alt={`${link.name}-icon`}
                    className="w-12 h-12"
                  />
                </div>

                <Link
                  to={link.path}
                  className={`transition duration-200 text-[17px] font-bold ${
                    isActive
                      ? "text-amber-600"
                      : "text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="block py-2 text-gray-800 hover:text-amber-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            to="/contact"
            onClick={toggleMenu}
            className="block mt-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-4 py-2 rounded-full text-center hover:from-amber-600 hover:to-yellow-500 transition font-semibold"
          >
            Get Quote
          </Link> */}
        </div>
      )}
    </header>
  );
};

export default Header;
