import React, { useState } from "react";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Partners", href: "#partners" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="bg-linear-to-r from-[#CF4D53] to-[#280D39] flex justify-between items-center text-white px-4 sm:px-10 py-3 max-md:py-2 fixed top-0 left-0 w-full backdrop-blur-sm bg-opacity-90 z-10000">
      <div className="logo text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
        <img src={logo} alt="" className="size-10 max-md:size-6" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-8 text-sm lg:text-base">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="cursor-pointer hover:text-[#FFB4A1] transition-colors tracking-wide"
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative flex flex-col justify-center items-center w-12 h-12 rounded-full z-50 transition-transform duration-300 hover:scale-110"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
            isOpen ? "transform rotate-45 translate-y-1.5 bg-[#FFB4A1]" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ease-out ${
            isOpen ? "opacity-0 translate-x-2 bg-[#FFB4A1]" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
            isOpen ? "transform -rotate-45 -translate-y-1.5 bg-[#FFB4A1]" : ""
          }`}
        ></span>

        {/* Button highlight effect */}
        <span
          className={`absolute inset-0 rounded-full bg-white/0 transition-all duration-300 ${
            isOpen ? "bg-white/10" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg md:hidden transition-opacity z-60 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-dvh w-64 sm:w-72 lg:w-80 bg-linear-to-b from-[#280D39]/95 to-[#1A0825]/95 backdrop-blur-2xl md:hidden transform transition-all duration-300 ease-out z-70 ${
          isOpen
            ? "translate-x-0 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#CF4D53]/10 hover:bg-[#CF4D53]/20 transition-colors duration-300"
          aria-label="Close menu"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="w-5 h-5 text-[#FFB4A1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col h-full pt-20 sm:pt-24 px-4 sm:px-6">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`py-3 sm:py-4 pl-4 text-base sm:text-lg lg:text-xl relative overflow-hidden group transition-all duration-300 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 50}ms`,
              }}
              onClick={() => setIsOpen(false)}
            >
              {/* Hover effect background */}
              <span className="absolute inset-0 w-0 bg-linear-to-r from-[#CF4D53]/20 to-transparent group-hover:w-full transition-all duration-300"></span>

              {/* Text with gradient effect */}
              <span className="relative inline-block font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                {item.name}
              </span>

              {/* Animated line */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-[#CF4D53]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Decorative elements */}
      </div>
    </nav>
  );
}

export default Navbar;
