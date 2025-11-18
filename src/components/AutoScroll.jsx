import React from "react";
import { createRoot } from "react-dom/client";
import Marquee from "react-fast-marquee";

import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";

function AutoScroll() {
  const images = [
    partner1,
    partner2,
    partner1,
    partner2,
    partner1,
    partner2,
    partner1,
    partner2,
  ];

  return (
    <div className="text-center">
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
