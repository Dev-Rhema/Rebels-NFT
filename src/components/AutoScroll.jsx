import React from "react";
import { createRoot } from "react-dom/client";
import Marquee from "react-fast-marquee";
import { getImageUrl } from "../utils/imageResolver";

function AutoScroll() {
  const images = [
    getImageUrl("partner1.jpg"),
    getImageUrl("partner2.jpg"),
    getImageUrl("partner3.jpg"),
    getImageUrl("partner4.jpg"),
    getImageUrl("partner5.jpg"),
    getImageUrl("partner6.jpg"),
    getImageUrl("partner7.jpg"),
    getImageUrl("partner8.jpg"),
    getImageUrl("partner9.jpg"),
    getImageUrl("partner10.jpg"),
    getImageUrl("partner11.jpg"),
    getImageUrl("partner12.jpg"),
    getImageUrl("partner13.jpg"),
    getImageUrl("partner14.jpg"),
    getImageUrl("partner15.jpg"),
    getImageUrl("partner16.jpg"),
    getImageUrl("partner17.jpg"),
    getImageUrl("partner18.jpg"),
    getImageUrl("partner19.jpg"),
    getImageUrl("partner20.jpg"),
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
