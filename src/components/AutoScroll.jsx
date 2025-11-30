import React from "react";
import { createRoot } from "react-dom/client";
import Marquee from "react-fast-marquee";

import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.jpg";
import partner5 from "../assets/partner5.jpg";
import partner6 from "../assets/partner6.jpg";
import partner7 from "../assets/partner7.jpg";
import partner8 from "../assets/partner8.jpg";
import partner9 from "../assets/partner9.jpg";
import partner10 from "../assets/partner10.jpg";
import partner11 from "../assets/partner11.jpg";
import partner12 from "../assets/partner12.jpg";
import partner13 from "../assets/partner13.jpg";
import partner14 from "../assets/partner14.jpg";
import partner15 from "../assets/partner15.jpg";
import partner16 from "../assets/partner16.jpg";
import partner17 from "../assets/partner17.jpg";
import partner18 from "../assets/partner18.jpg";
import partner19 from "../assets/partner19.jpg";
import partner20 from "../assets/partner20.jpg";

function AutoScroll() {
  const images = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
    partner15,
    partner16,
    partner17,
    partner18,
    partner19,
    partner20,
  ];

  return (
    <div className="text-center overflow-x-hidden">
      <div className="marquee-mask">
        <Marquee speed={48} delay={0} pauseOnHover gradient={false}>
          {images.map((src, index) => {
            // small variation per item
            const delay = (index % 4) * 180;
            const floatClass = index % 3 === 0 ? "animate-float" : "";
            const hueClass = index % 2 === 0 ? "animate-hue" : "";
            const pulse = index % 5 === 0 ? "animate-pulse" : "";

            return (
              <div
                key={index}
                className="auto-item"
                style={{ margin: "0 8px" }}
              >
                <div
                  className={`auto-img ${floatClass} ${hueClass} ${pulse} rounded-lg bg-linear-to-br from-[#280D39]/20 to-[#CF4D53]/10 p-1`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <img
                    src={src}
                    alt={`tech-partner-${index + 1}`}
                    className="h-50 w-50 max-md:w-40 max-md:h-40 object-fill rounded-md"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

export default AutoScroll;
