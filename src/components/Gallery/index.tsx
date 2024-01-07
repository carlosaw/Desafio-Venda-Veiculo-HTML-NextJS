import Image from "next/image";

export const Gallery = () => {
  const gallery: string[] = [
    "/assets/IMG_2440.png",
    "/assets/img-2-2.jpg",
    "/assets/img-3.jpg",
  ];
  return (
    <div
      id="gallery"
      className="m-auto flex flex-col justify-center items-center mt-6 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
    >
      <div className="flex w-full justify-between pl-5 md:pl-5 lg:pl-5 xl:pl-0 pr-5 md:pr-5 lg:pr-5 xl:pr-0">
        <div className="w-full flex justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start items-start text-[40px] text-gray-md font-medium m-auto">
          Galeria
        </div>
        <div className="hidden flex-none md:flex lg:flex xl:flex justify-center items-center w-52 h-16 border border-gray-light text-orange-B7 cursor-pointer hover:bg-orange-500 hover:text-white">
          Ver mais
        </div>
      </div>
      <div
        className="flex m-auto flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row
       lg:m-0 xl:m-0 md:mt-6 lg:mt-6 xl:mt-6 sm:justify-between md:justify-between lg:justify-between xl:justify-between w-full pl-5 md:pl-5 lg:pl-5 xl:pl-0 pr-5 md:pr-5 lg:pr-5 xl:pr-0"
      >
        {gallery.map((item, index) => (
          <Image
            className="mb-6 w-11/12 sm:w-[33%] md:w-[33%] lg:w-[33%] xl:w-[33%] place-self-center"
            key={index}
            src={item}
            alt={`Imagem ${index + 1} da galeria`}
            width={370}
            height={550}
          />
        ))}
      </div>
      <div className=" flex sm:hidden md:hidden lg:hidden xl:hidden justify-center items-center m-auto w-11/12 h-16 border border-gray-light text-orange-B7 cursor-pointer">
        Ver mais
      </div>
    </div>
  );
};
