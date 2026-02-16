// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/logo.jpeg"; // adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/e-bikes", label: "E-Bikes" },
    { to: "/logistics", label: "Last Mile Logistics" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Altway Mobility Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-base font-medium transition-colors duration-200 hover:text-emerald-400 ${
                    isActive
                      ? "text-emerald-400 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-emerald-400"
                      : "text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* CTA Button */}
            {/* <NavLink
              to="/book-delivery"
              className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 
                         text-white font-semibold px-7 py-3 rounded-full 
                         transition-all duration-300 shadow-md hover:shadow-lg 
                         transform hover:-translate-y-0.5"
            >
              Book a Delivery
            </NavLink> */}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-8 w-8 text-white" />
            ) : (
              <Menu className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu – slides down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900/95 border-t border-slate-700/70 px-5 py-6 space-y-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive
                    ? "bg-emerald-900/40 text-emerald-400"
                    : "text-gray-300 hover:bg-slate-800 hover:text-emerald-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* <NavLink
            to="/book-delivery"
            onClick={() => setIsOpen(false)}
            className="block mt-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 
                       text-white font-semibold text-center py-4 px-6 rounded-xl 
                       transition-all duration-300 shadow-md"
          >
            Book a Delivery
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
}
