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
    <div className="text-center overflow-x-hidden">
      <Marquee speed={50} delay={0} pauseOnHover>
        {images.map((src, index) => (
          <div key={index} className=" flex items-center justify-center">
            <img
              src={src}
              alt={`tech-partner-${index + 1}`}
              className="h-32 mx-1 w-32 object-cover"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

export default AutoScroll;
