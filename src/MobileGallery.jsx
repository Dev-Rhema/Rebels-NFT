import DomeGallery from "./components/DomeGallery.jsx";
export default function MobileGallery() {
  return (
    <div className=" overflow-x-hidden max-md:w-80 max-md:h-80 w-[80vw] h-[80vh]">
      <DomeGallery fit={0.5} minRadius={300} segments={20} />
    </div>
  );
}
