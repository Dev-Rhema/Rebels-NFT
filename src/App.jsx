import AutoScroll from "./components/AutoScroll";
import Navbar from "./components/Navbar";
import { getImageUrl } from "./utils/imageResolver";
import Team from "./Team";
import { useEffect, Suspense, lazy } from "react";
import "./animations.css";
import AboutCarousel from "./components/AboutCarousel";
import { AuroraText } from "./components/AuroraTexts";
import ShinyText from "./components/ShinyText";
import Footer2 from "./components/Footer";
import roadmap from "./Roadmap.svg";

// Lazy load heavy gallery components
const Gallery = lazy(() => import("./Gallery"));
const MobileGallery = lazy(() => import("./MobileGallery"));

// Loading placeholder
const GalleryLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#050303]">
    <div className="animate-pulse text-gray-400">Loading gallery...</div>
  </div>
);

function App() {
  const roadmapImg = getImageUrl("Roadmap.svg");

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
      <main className="text-white flex-col flex gap-16 max-lg:gap-6 bg-[#050303] font-['SpaceFont','Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial]">
        <Navbar />
        {/* Banner */}
        <div className="relative h-[90vh] mt-14 flex justify-center items-center w-full ">
          <div
            className="absolute inset-0 brightness-40"
            style={{
              backgroundImage: `url(${getImageUrl("banner.jpg")})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute z-10 flex flex-col items-center justify-center gap-3 text-center px-4">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeInUp">
              <span className="text-[#FFB4A1] ">
                <ShinyText text="Multi" />
              </span>{" "}
              Staking NFT Protocol
            </p>
            <p className="text-md md:text-xl lg:text-2xl animate-fadeInUp animate-delay-1">
              Rewrite the Past. Defend the Future of digital unity on{" "}
              <span className="text-[#FFB4A1] animate-glowPulse">
                <ShinyText text="Monad" />
              </span>
              .
            </p>
            <a
              href="https://stake.rebelsnft.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linear-to-br from-[#280D39] to-[#CF4D53] text-white font-semibold text-base lg:text-lg py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-3 animate-buttonPulsate animate-buttonGlow relative before:content-[''] before:absolute before:inset-0 before:bg-linear-to-br before:from-[#280D39] before:to-[#CF4D53] before:opacity-50 before:rounded-md before:z-[-1] before:blur-lg text-center"
            >
              STAKE REBELS NFT
            </a>
          </div>
        </div>
        <section className="bg-[#050303] h-full w-full px-10 flex items-center justify-center flex-col gap-20 max-lg:gap-12 max-md:px-6 ">
          {/* About */}
          <div
            id="about"
            className="grid grid-cols-2 gap-4 items-center pt-16 max-lg:grid-cols-1"
          >
            <div className="w-full max-w-md mx-auto">
              <AboutCarousel />
            </div>
            <div className="gap-3 flex flex-col">
              <h1 className="text-3xl md:text-6xl lg:text-[80px] mb-6 reveal-on-scroll max-lg:mb-2 max-lg:text-center">
                <span className="text-white  animate-glowPulse"> ABOUT</span>{" "}
                <AuroraText>REBELS</AuroraText>
              </h1>
              <p className="text-md md:text-md lg:text-xl reveal-on-scroll">
                <ShinyText text="Rebels" /> is a next gen NFT project built on
                the <ShinyText text="Monad" /> blockchain. We’re creating a{" "}
                <ShinyText text=" multi staking NFT protocol" /> that gives
                holders real utility. Our goal is to build tools that let people
                <ShinyText text="earn" />, <ShinyText text=" participate" />,
                and <ShinyText text="grow" /> inside a fast and scalable
                ecosystem.
              </p>
              <p className="text-md md:text-md lg:text-xl reveal-on-scroll">
                <ShinyText text="Rebels NFT" /> collection is the heart of the
                platform. It’s your access to{" "}
                <ShinyText text="staking opportunities" />, rewards and future
                products that we will roll out over time. We’re focused on long
                term value, not hype. Everything we build reflects that.
              </p>
              <p className="text-md md:text-md lg:text-xl reveal-on-scroll">
                Our mission is to help users unlock the true power of NFTs by
                turning them into <ShinyText text="yield generating assets" /> .
              </p>
              <p className="text-md md:text-md lg:text-xl reveal-on-scroll">
                <ShinyText text="Rebels" /> is here to set a new standard for
                NFT utilities on Monad.
              </p>
            </div>
          </div>
          {/* ROADMAP */}
          <div
            id="roadmap"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl md:text-6xl lg:text-[80px] mb-6 reveal-on-scroll text-center w-full">
              THE REBELLION <AuroraText>ROADMAP</AuroraText>
            </h1>
            <div className="size-[60%] max-lg:w-[80%] max-md:w-full">
              <img src={roadmap} alt="" />
            </div>
          </div>
          {/* REBEL PARTNERS */}
          <div
            id="partners"
            className="flex flex-col items-center justify-center pt-16"
          >
            <h1 className="text-3xl md:text-6xl lg:text-[80px] mb-6 reveal-on-scroll text-center w-full">
              OUR <AuroraText>PARTNERS</AuroraText>
            </h1>
            <div className="overflow-x-hidden">
              <AutoScroll />{" "}
            </div>
          </div>
          {/* OUR TEAM */}
          <div
            id="team"
            className="flex flex-col items-center justify-center pt-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] reveal-on-scroll mb-6 text-center w-full">
              OUR <AuroraText>TEAM</AuroraText>
            </h1>
            <Team />
          </div>
          {/* GALLERY */}
          <div
            id="gallery"
            className="flex flex-col items-center justify-center overflow-x-none pt-16 mb-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] reveal-on-scroll mb-6">
              SNEAK <AuroraText>PEAK</AuroraText>
            </h1>
            <Suspense fallback={<GalleryLoader />}>
              <div className="max-lg:hidden">
                <Gallery />
              </div>
              <div className="max-lg:block hidden">
                <MobileGallery />
              </div>
            </Suspense>
          </div>
        </section>
        <Footer2 />
      </main>
    </>
  );
}

export default App;
