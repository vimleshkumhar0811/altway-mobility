// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Brand / Logo column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Altway Mobility"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                ALTWAY MOBILITY
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Sustainable e-mobility and last-mile logistics solutions in
              Latvia.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <NavLink
                  to="/e-bikes"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  E-Bikes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logistics"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  Last-Mile Logistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book-delivery"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  Book a Delivery
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Altway Mobility SIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
