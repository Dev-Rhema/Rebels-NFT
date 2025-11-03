import AutoScroll from "./components/AutoScroll";
import Navbar from "./components/Navbar";
import aboutImg from "./assets/about.png";
import roadmapImg from "./assets/roadmap.svg";
import Team from "./Team";
import Gallery from "./Gallery";
import { useEffect } from "react";
import "./animations.css";
import MobileGallery from "./MobileGallery";

function App() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="text-white flex-col flex gap-16 max-lg:gap-6 bg-[#050303]">
        <Navbar />
        {/* Banner */}
        <div className="relative h-[90vh] mt-14 flex justify-center items-center w-full ">
          <div className="absolute inset-0 bg-[url(./assets/banner.jpg)] bg-cover  brightness-40"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center gap-3 text-center px-4">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeInUp">
              <span className="text-[#FFB4A1] animate-glowPulse">Rebels </span>
              NFT Collection
            </p>
            <p className="text-md md:text-xl lg:text-2xl animate-fadeInUp animate-delay-1">
              Rewrite the Past. Defend the Future of digital unity on{" "}
              <span className="text-[#FFB4A1] animate-glowPulse">Monad</span>.
            </p>
            <p className="text-xs md:text-sm font-bold animate-fadeInUp animate-delay-2">
              JOIN THE REVOLUTION
            </p>
            <button className="bg-linear-to-br from-[#280D39] to-[#CF4D53] text-white font-semibold text-base lg:text-lg py-2 px-4 rounded-md transition-all duration-300 cursor-pointer hover:scale-105 animate-fadeInUp animate-delay-3 animate-buttonPulsate animate-buttonGlow relative before:content-[''] before:absolute before:inset-0 before:bg-linear-to-br before:from-[#280D39] before:to-[#CF4D53] before:opacity-50 before:rounded-md before:z-[-1] before:blur-lg">
              STAKE NFT
            </button>
          </div>
        </div>
        <section className="bg-[#050303] h-full w-full px-10 flex items-center justify-center flex-col gap-20 max-lg:gap-12 max-md:px-6 ">
          {/* About */}
          <div
            id="about"
            className="grid grid-cols-2 gap-4 items-center pt-16 max-md:grid-cols-1"
          >
            <img src={aboutImg} alt="" />
            <div className="gap-3 flex flex-col">
              <h1 className="text-3xl md:text-6xl lg:text-[80px] mb-6 reveal-on-scroll max-lg:mb-2">
                ABOUT
                <span className="text-[#CF5C62] animate-glowPulse"> US</span>
              </h1>
              <p className="text-md md:text-md lg:text-xl reveal-on-scroll">
                We're here to build something solid. Great things aren't built
                overnight. we focused on creating something meaningful, not a
                quick flip project. If you are looking for fast wins, you might
                want to look elsewhere.
              </p>
              <ul className="list-disc ml-4 text-base md:text-md reveal-on-scroll">
                <li>Unique collection and style</li>
                <li>Unrevealed Utility</li>
                <li>Strong Monad Community</li>
              </ul>
            </div>
          </div>
          {/* ROADMAP */}
          <div
            id="roadmap"
            className="flex flex-col items-center justify-center "
          >
            <h1 className="text-3xl md:text-6xl lg:text-[80px] mb-6 reveal-on-scroll">
              THE REBELLION{" "}
              <span className="text-[#CF5C62] animate-glowPulse">ROADMAP</span>
            </h1>
            <div className="size-[60%] max-lg:w-[80%] max-md:w-full">
              <img src={roadmapImg} alt="" />
            </div>
          </div>
          {/* REBEL PARTNERS */}
          <div
            id="partners"
            className="flex flex-col items-center justify-center pt-16"
          >
            <h1 className="text-3xl md:text-6xl lg:text-[80px] mb-6 reveal-on-scroll">
              OUR{" "}
              <span className="text-[#CF5C62] animate-glowPulse">PARTNERS</span>
            </h1>
            <div className="overflow-x-hidden">
              {" "}
              <AutoScroll />{" "}
            </div>
          </div>
          {/* OUR TEAM */}
          <div
            id="team"
            className="flex flex-col items-center justify-center pt-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] reveal-on-scroll mb-6">
              OUR <span className="text-[#CF5C62] animate-glowPulse">TEAM</span>
            </h1>
            <Team />
          </div>
          {/* GALLERY */}
          <div
            id="gallery"
            className="flex flex-col items-center justify-center overflow-x-none pt-16 mb-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] reveal-on-scroll mb-6">
              SNEAK{" "}
              <span className="text-[#CF5C62] animate-glowPulse">PEAK</span>
            </h1>
            <div className="max-lg:hidden">
              <Gallery />
            </div>
            <div className="max-lg:block hidden">
              <MobileGallery />
            </div>
          </div>
        </section>
        <footer className="bg-linear-to-r to-[#CF4D53] from-[#280D39]  flex justify-center flex-col gap-2 items-center text-white px-4 sm:px-10 py-5 max-md:py-2 w-full ">
          <p className="font-bold text-3xl max-lg:text-xl">
            Join the Rebellion.
          </p>
          <div>Socials</div>
          <div className="flex gap-2">
            <button className="bg-white text-black text-base max-lg:text-sm lg:text-md py-2 px-4 rounded-md transition-all duration-300 cursor-pointer hover:scale-105">
              <a href="https://discord.gg/Gvd6jAXS">Join Discord</a>
            </button>
            <button className="bg-white text-black text-base max-lg:text-sm lg:text-md py-2 px-4 rounded-md transition-all duration-300 cursor-pointer hover:scale-105">
              <a href="https://x.com/rebels_xyz">Follow us on X</a>
            </button>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
