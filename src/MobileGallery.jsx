import DomeGallery from "./components/DomeGallery.jsx";
export default function MobileGallery() {
  return (
    <div className=" overflow-x-hidden max-md:w-70 max-md:h-70 w-[80vw] h-[80vh]">
      <DomeGallery fit={0.5} minRadius={300} segments={20} />
    </div>
  );
}
