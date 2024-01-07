"use client";
import Image from "next/image";

export const KeepTouch = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVersions = () => {
    document.getElementById("versions")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl m-auto flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row mt-6
     items-center  sm:items-start sm:justify-between border-b border-gray-light"
    >
      <div className="flex flex-col items-center sm:items-start mb-8 pl-5 md:pl-5 lg:pl-5 xl:pl-0 pr-5 md:pr-5 lg:pr-5 xl:pr-0">
        <Image
          src="/assets/Logo2.png"
          alt="Logo B7Car"
          width={200}
          height={130}
        />
        <div className="mt-8 text-2xl font-normal text-gray-md">
          O carro perfeito para você.
        </div>
      </div>
      <div className="mb-16 flex flex-col items-center xl:items-start">
        <h3 className="font-semibold text-lg text-gray-md ">Navegue</h3>
        <ul>
          <li
            className="font-normal text-lg text-gray-A7 mt-8 cursor-pointer"
            onClick={scrollToGallery}
          >
            Galeria
          </li>
          <li
            className="font-normal text-lg text-gray-A7 mt-8 cursor-pointer"
            onClick={scrollToVersions}
          >
            Versões
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mb-5 pl-5 md:pl-5 lg:pl-5 xl:pl-0 pr-5 md:pr-5 lg:pr-5 xl:pr-0">
        <h3 className="font-semibold text-lg text-gray-md ">Redes sociais</h3>
        <div className="flex mt-8">
          <div className="w-12 h-12 border border-gray-light flex justify-center items-center mr-4 cursor-pointer">
            <Image
              src="/assets/instagram-line.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </div>
          <div className="w-12 h-12 border border-gray-light flex justify-center items-center mr-4 cursor-pointer">
            <Image
              src="/assets/whatsapp-line.png"
              alt="Whatsapp"
              width={24}
              height={24}
            />
          </div>
          <div className="w-12 h-12 border border-gray-light flex justify-center items-center cursor-pointer">
            <Image
              src="/assets/twitter-line.png"
              alt="Twitter"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
