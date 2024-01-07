import Image from "next/image";

export const Menu = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVersions = () => {
    document.getElementById("versions")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="flex w-1/2 justify-between items-center">
      <Image alt="Logo Aw2Car" src="/assets/Logo1.png" width={200} height={130} />

      <ul className="flex w-44 justify-between">
        <li
          className="hidden sm:block md:block lg:block xl:block text-lg cursor-pointer text-gray-A7 hover:text-orange-B7"
          onClick={scrollToGallery}
        >
          Galeria
        </li>
        <li
          className="hidden sm:block md:block lg:block xl:block text-lg cursor-pointer text-gray-A7 hover:text-orange-B7"
          onClick={scrollToVersions}
        >
          Versões
        </li>
      </ul>
    </nav>
  );
};
