import React from "react";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";

// Header Component
export const Header = () => (
  <header className="relative bg-customColor h-56 md:h-auto text-white">
    {/* White Overlays */}
    <div className="absolute overflow-hidden  inset-0">
      {/* Top Left White Shape */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-5 transform -translate-x-10 -translate-y-10"></div>

      {/* Bottom Right White Shape */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 transform translate-x-10 translate-y-10"></div>

      {/* Diagonal White Stripe */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-5 transform -rotate-12"></div>
    </div>

    {/* Mobile Content (Hidden on Desktop) */}
    <div className="relative  lg:hidden">
      {/* Top Row */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Burger Menu Icon */}
        <Link>
          <MenuIcon fontSize="large" />
        </Link>

        {/* Citi Logo */}
        <div className="flex items-center justify-start">
          <img src="/Svg/citi.svg" alt="Logo" className="w-32" />
        </div>

        {/* Notification Icon */}
        <div>
          <NotificationsNoneIcon fontSize="large" />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="flex justify-around bg-transparent py-2">
        {["HOME", "ACCOUNTS", "TRANSFERS", "PAYMENTS"].map((item, index) => (
          <button
            key={index}
            className="text-white text-sm font-semibold focus:underline"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>

    {/* Desktop Sidebar (Hidden on Mobile) */}
    <div className="hidden lg:flex h-screen w-64 z-30 fixed top-0 bg-customColor text-white flex-col items-start px-4 py-2">
  {/* Sidebar Background Overlays */}
  <div className="absolute overflow-hidden inset-0">
    {/* Top Left White Shape */}
    <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-5 transform -translate-x-10 -translate-y-10"></div>

    {/* Bottom Right White Shape */}
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 transform translate-x-10 translate-y-10"></div>

    {/* Diagonal White Stripe */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-5 transform -rotate-12"></div>
  </div>

  {/* Sidebar Logo Section */}
  <div className="relative  flex flex-col items-center justify-center mb-8">
    {/* Logo */}
    <img src="/Svg/citi.svg" alt="Logo" className="w-32" />
    {/* Text Under the Logo */}
    <p className="text-lg font-bold">Citi Bank</p>
  </div>

  {/* Sidebar Navigation Items */}
  <nav className="flex flex-col w-full p-4 items-center relative z-30">
    {["HOME", "ACCOUNTS", "TRANSFERS", "PAYMENTS"].map((item, index) => (
      <Link
        to={`/${item.toLowerCase()}`}
        key={index}
        className="py-4 px-4 rounded-lg text-sm font-semibold w-full text-left transition-all duration-300 transform hover:scale-105 hover:translate-y-1 hover:bg-[#0076b6]"
      >
        {item}
      </Link>
    ))}
  </nav>
</div>




  </header>
);

export default Header;
