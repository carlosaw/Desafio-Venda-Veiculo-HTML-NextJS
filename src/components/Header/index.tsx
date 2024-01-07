"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "../Menu";
import { MenuMobile } from "../MenuMobile";

export const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="w-full bg-gray-F7 border-b border-gray-light fixed">
      <div className="h-20 sm:h-28 lg:h-28 xl:h-28 flex justify-between items-center sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl m-auto p-5">
        <Menu />
        <div className="hidden sm:flex md:flex lg:flex xl:flex justify-center items-center w-52 h-16 border border-gray-light text-orange-B7 cursor-pointer hover:bg-orange-500 hover:text-white">
          Tenho interesse
        </div>
        <Image
          alt="Abrir menu mobile"
          src="/assets/menu-line.png"
          className={`${
            menuActive ? "hidden" : "block"
          } sm:hidden md:hidden lg:hidden xl:hidden`}
          width={24}
          height={24}
          onClick={handleMenu}
        />
        <MenuMobile menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </div>
  );
};
