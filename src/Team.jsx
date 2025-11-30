import ChromaGrid from "./components/ChromaGrid.jsx";
import React from "react";
import team1 from "./assets/mav.png";
import team2 from "./assets/0xSikdar.webp";
import team3 from "./assets/vexorith.webp";

const items = [
  {
    image: team1,
    title: "Mav",
    subtitle: "Founder",
    handle: "@mav_evm",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
    url: "https://x.com/mav_evm",
  },
  {
    image: team2,
    title: "0xSikdar",
    subtitle: "Co Founder",
    handle: "@0xsikdar",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    url: "https://x.com/0xsikdar",
  },
  {
    image: team3,
    title: "Vexorith",
    subtitle: "Developer",
    handle: "@Vexorith_",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    url: "https://x.com/vexorith_",
  },
];

function Team() {
  return (
    <div style={{ height: "", position: "relative" }}>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.85}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
}

export default Team;
