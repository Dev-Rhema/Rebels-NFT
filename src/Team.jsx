import ChromaGrid from "./components/ChromaGrid.jsx";
import React from "react";
import team1 from "./assets/peak1.svg";
import team2 from "./assets/peak2.svg";
import team3 from "./assets/peak3.svg";
import team4 from "./assets/peak4.svg";

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
    title: "Alex",
    subtitle: "Community Manager",
    handle: "@Alex",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    url: "https://x.com/mav_evm",
  },
  {
    image: team3,
    title: "Jane",
    subtitle: "Artist",
    handle: "@Jane",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    url: "https://x.com/mav_evm",
  },
  {
    image: team4,
    title: "John",
    subtitle: "Collab Manager",
    handle: "@John",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#000)",
    url: "https://x.com/mav_evm",
  },
];

function Team() {
  return (
    <div style={{ height: "", position: "relative" }}>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
}

export default Team;
