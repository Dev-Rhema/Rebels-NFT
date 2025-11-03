import DomeGallery from "./components/DomeGallery.jsx";
export default function MobileGallery() {
  return (
    <div className=" overflow-x-hidden max-md:w-screen max-md:h-[50vh] w-[80vw] h-[80vh]">
      <DomeGallery fit={0.5} minRadius={250} segments={15} />
    </div>
  );
}
