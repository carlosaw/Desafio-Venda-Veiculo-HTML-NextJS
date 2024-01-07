import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full bg-gray-F7 h-auto pt-20 md:pt-36 lg:pt-32 xl:pt-12">
      <div
        className="sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl m-auto md:h-auto lg:h-[110%] xl:h-[500px] flex flex-col
       sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center lg:items-end xl:items-end sm:items-start"
      >
        <div className="h-full w-[350px] sm:w-1/3 md:w-[350px] lg:w-1/3 xl:w-[350px] flex flex-col justify-center sm:ml-5 md:ml-5 lg:ml-5 xl:ml-0 pt-5 md:pt-0 lg:pt-0 xl:pt-10 2xl:pt-0">
          <h1 className="text-gray-md w-full text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold">
            O CARRO PERFEITO PARA{" "}
            <span className="text-orange-B7">VOCÊ</span>.
          </h1>
          <div className="mt-5 md:mt-5 lg:mt-10 xl:mt-15 2xl:mt-20 mb-5 md:mb-5 lg:mb-5 xl:mb-15
           text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-gray-md">
            Cuidado, essa máquina
            <br /> vai te deixar apaixonado!
          </div>
          <div
            className="flex-shrink-0 hidden sm:flex md:flex lg:flex xl:flex justify-center items-center font-lg font-medium
            sm:w-44 md:w-52 lg:w-52 xl:w-52 sm:h-12 md:h-16 lg:h-16 xl:h-16  bg-orange-B7 text-white cursor-pointer my-4"
          >
            Tenho interesse
          </div>
        </div>
        <div className="w-full flex flex-1 justify-center items-center xl:mt-10">
          <Image
            src="/assets/Opala-1 (1).png"
            alt="Banner"
            width={710}
            height={350}
            className="hidden sm:block md:block lg:block xl:block 2xl:block"
          />
          <Image
            src="/assets/Opala-1 (1).png"
            alt="Banner mobile"
            width={358}
            height={224}
            className="block md:hidden lg:hidden xl:hidden w-11/12 sm:max-w-md"
          />
        </div>
        <div
          className="flex sm:hidden md:hidden lg:hidden xl:hidden justify-center items-center font-lg font-medium w-11/12 h-16 bg-orange-B7 text-white 
        cursor-pointer mt-12 mb-12 sm:place-self-center"
        >
          Tenho interesse
        </div>
      </div>
    </div>
  );
};
