"use client";

import React from "react";

export default function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Partners", href: "#partners" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
  ];

  const socialIcons = [
    {
      name: "Discord",
      href: "https://discord.gg/Gvd6jAXS",
      svg: (
        <svg
          className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 71 55"
          fill="currentColor"
          aria-hidden
        >
          <path d="M60.104 4.552A58.868 58.868 0 0046.64.8 41.1 41.1 0 0034.9 6.136 41.1 41.1 0 0023.36.8 58.868 58.868 0 009.9 4.552 67.726 67.726 0 000 50.636c9.012 6.792 18.05 9.992 27.944 9.996 9.892.004 19.233-3.196 28.243-9.994A67.726 67.726 0 0060.104 4.552zM23.725 37.4c-3.2 0-5.84-2.9-5.84-6.4s2.6-6.4 5.84-6.4c3.26 0 5.88 2.9 5.84 6.4 0 3.5-2.58 6.4-5.84 6.4zm23.55 0c-3.2 0-5.84-2.9-5.84-6.4s2.6-6.4 5.84-6.4c3.26 0 5.88 2.9 5.84 6.4 0 3.5-2.58 6.4-5.84 6.4z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/rebels_xyz",
      svg: (
        <svg
          className="w-6 h-6 block transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          fill="currentColor"
          aria-hidden
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.338-6.996-6.11 6.996H1.392l7.732-8.835L1.24 2.25h3.562l4.853 6.361 5.597-6.361zM17.15 18.476h1.828L5.657 4.142H3.716l13.434 14.334z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-linear-to-r to-[#CF4D53] from-[#280D39] flex justify-center flex-col gap-4 items-center text-white px-4 sm:px-10 py-8 w-full">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10">
        <nav className="mb-4 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#FFB4A1] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="my-4 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="text-white/90 hover:text-white transition-colors duration-200"
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-white/80 mt-4">
          &copy; {new Date().getFullYear()} Rebels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
