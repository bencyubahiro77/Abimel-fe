import { useState } from "react"
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

const images: string[] = [
  "https://simongjewelry.com/cdn/shop/files/Homepage_Banner_d4b06f7b-2810-41c5-aab4-43f618c8f6b5_x800.png?v=1742410014",
  "https://bluenile-blog.r2net.com/wp-content/uploads/Timeless-Jewelry-Hero.jpg",
  "https://i.etsystatic.com/11026497/r/il/5db01b/3491277961/il_570xN.3491277961_gp7v.jpg",
  "https://img.freepik.com/premium-photo/ring-jewelry-wedding-finger_53876-415658.jpg",
  "https://i.etsystatic.com/20458099/r/il/96ccfa/2216123561/il_570xN.2216123561_72ha.jpg",
  "https://armsofeve.com/cdn/shop/files/MADDY_POLLARD_322_2f636d7f-12a7-4e98-9b92-f62012cdb922_5000x.jpg?v=1724730370",
  "https://i.etsystatic.com/28973185/r/il/040a40/4817155344/il_570xN.4817155344_nsor.jpg",
  "https://tappers.com/cdn/shop/collections/engagement-rings-tapper-s-jewelry_47e61b1a-bb27-46c0-aa9f-c4842e3e36ff.png?v=1692814096"
];

const Product = () => {

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number): void => setSelectedImage(index);
  const closeImage = (): void => setSelectedImage(null);
  const showPrev = (): void => {
    setSelectedImage((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };
  const showNext = (): void => {
    setSelectedImage((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className=" text-[23px] sm:text-[35px] md:text-[40px] font-semibold font-arial leading-snug tracking-tight text-gray-900">
          Our Product
        </h1>
        <div className="w-13 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 px-4 mt-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:opacity-90"
              onClick={() => openImage(index)}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-[30vh] object-cover transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={closeImage}
            >
              <FaTimes />
            </button>
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-4xl cursor-pointer"
            >
              <FaChevronLeft />
            </button>
            <img
              src={images[selectedImage]}
              alt="Selected"
              className="max-w-[90%] max-h-[90%] object-contain"
            />
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-4xl cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product