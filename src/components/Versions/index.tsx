"use client";
import { useState } from "react";
import Image from "next/image";

export const Versions = () => {
  const cars = [
    { name: "Opala SS", img: "/assets/img-carro-1-1 (1).png", price: "R$ 75.000,00", titleDif: "Diferenciais do Opala SS", cons: "Consumo médio de 15.9 litros/100km", seconds: "0 aos 100 km/h em 2.9 segundos", velocity: "Velocidade máxima de 350 km/h", pot: "Potência máxima de 740 CV"},
    { name: "Comodoro", img: "/assets/comodoro (1).png", price: "R$ 85.000,00", titleDif: "Diferenciais do Comodoro", cons: "Consumo médio de 10.5 litros/100km", seconds: "0 aos 100 km/h em 3.7 segundos", velocity: "Velocidade máxima de 310 km/h", pot: "Potência máxima de 300 CV" },
    { name: "Diplomata", img: "/assets/diplo (1) (1).png", price: "R$ 95.000,00", titleDif: "Diferenciais do Diplomata", cons: "Consumo médio de 7.4 litros/100km", seconds: "0 aos 100 km/h em 4.5 segundos", velocity: "Velocidade máxima de 300 km/h", pot: "Potência máxima de 200 CV" },
  ];
  const [activeCar, setActiveCar] = useState<number>(0);

  const handleChangeVersion = (index: number) => {
    setActiveCar(index);
  };

  return (
    <div
      id="versions"
      className="sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl max-w-6xl m-auto flex mt-6 flex-col md:flex-row lg:flex-row xl:flex-row md:justify-between h-auto"
    >
      <div className="flex flex-col justify-start items-center md:items-start pl-5 md:pl-5 lg:pl-5 xl:pl-0 pr-5 md:pr-5 lg:pr-5 xl:pr-0">  
        <div className="text-3xl md:text-3xl lg:text-[40px] xl:text-[40px] text-center md:text-left lg:text-left xl:text-left font-medium text-gray-md leading-10 mb-12">
          Escolha a versão que
          <br /> combina com você.
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex md:flex lg:flex xl:flex mb-16 md:flex-wrap">
          {cars.map((item: { name: string; img: string }, index: number) => (
            <div
              onClick={() => handleChangeVersion(index)}
              className={`mr-4 px-2 ${
                index === activeCar ? "bg-orange-B7 text-white" : "text-gray-C2"
              } md:w-36 lg:w-[170px] xl:w-[170px] h-10  font-medium text-lg flex justify-center items-center rounded-full cursor-pointer hover:bg-orange-B7 hover:text-white`}
              key={index}
            >
              {item.name}
            </div>
          ))}
        </div>
        <Image
          alt={"Versão do carro"}
          src={cars[activeCar].img}
          width={560}
          height={260}
          className="w-11/12"
        />                                      
        <div className="mt-16 text-center text-gray-md sm:text-lg md:text-2xl mb-16">
          A partir de {''}                     
          <span className="text-orange-B7 italic">{cars[activeCar].price}</span>
        </div>           
         
      </div>
      <div className="flex flex-col flex-shrink-0 m-auto md:m-0 lg:m-0 xl:m-0 justify-start items-start">          
        <div className="text-2xl m-auto md:m-0 lg:m-0 xl:m-0 lg:text-3xl xl:text-3xl font-medium text-gray-md leading-10  ">
          {cars[activeCar].titleDif}
        </div>        
        <div>
          <div className="flex items-center w-full  p-5 border-b border-gray-light my-4">
            <div className="w-8 h-8 ">
              <Image
                width={32}
                height={32}
                alt=""
                src="/assets/gas-station-line.png"
              />
            </div>
                          
            <div className="flex ml-5 xl:ml-10 text-sm md:text-lg lg:text-xl xl:text-xl font-normal text-gray-md">
            {cars[activeCar].cons}
            </div>                                
                                  
          </div>
          <div className="flex items-center w-full p-5 border-b border-gray-light my-4">
            <Image width={32} height={32} alt="" src="/assets/timer-line.png" />
            <div className="flex ml-5 xl:ml-10 text-sm md:text-lg lg:text-xl xl:text-xl font-normal text-gray-md">
            {cars[activeCar].seconds}
            </div>
          </div>

          <div className="flex items-center w-full p-5 border-b border-gray-light my-4">
            <Image
              width={32}
              height={32}
              alt=""
              src="/assets/speed-up-fill.png"
            />
            <div className="flex  ml-5 xl:ml-10 text-sm md:text-lg lg:text-xl xl:text-xl font-normal text-gray-md">
            {cars[activeCar].velocity}
            </div>
          </div>

          <div className="flex items-center w-full p-5  my-4">
            <Image
              width={32}
              height={32}
              alt=""
              src="/assets/flashlight-line.png"
            />
            <div className="flex ml-5 xl:ml-10 text-sm md:text-lg lg:text-xl xl:text-xl font-normal text-gray-md">
            {cars[activeCar].pot}
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center font-lg font-medium w-11/12 md:w-52 lg:w-52 xl:w-52 h-16 bg-orange-B7 text-white cursor-pointer
         mt-10 md:mt-24 lg:mt-24 xl:mt-24 m-auto md:m-0"
        >
          Tenho interesse
        </div>
      </div>
    </div>
  );
};
