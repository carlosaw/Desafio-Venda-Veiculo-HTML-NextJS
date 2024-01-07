import Image from "next/image";
type Props = {
  menuActive: boolean;
  setMenuActive: (e: boolean) => void;
};
export const MenuMobile = ({ menuActive, setMenuActive }: Props) => {
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVersions = () => {
    document.getElementById("versions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`${
        menuActive ? "flex" : "hidden"
      } xl:hidden bg-gray-900 flex-col h-48 w-36 p-5 fixed right-0 top-0`}
    >
      <div className="flex justify-end">
        <Image
          alt="Fechar menu mobile"
          src="/assets/menu-line.png"
          className="xl:hidden"
          width={24}
          height={24}
          onClick={handleMenu}
        />
      </div>
      <ul>
        <li
          className="text-gray-300 text-2xl text-end border-b border-gray-200 mt-5"
          onClick={scrollToGallery}
        >
          Galeria
        </li>
        <li
          className="text-gray-300 text-2xl text-end border-b border-gray-200 mt-5 "
          onClick={scrollToVersions}
        >
          Versões
        </li>
      </ul>
    </div>
  );
};
