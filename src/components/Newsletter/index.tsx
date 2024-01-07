"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscriptionFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    if (email) {
      await fetch("/sendemail", {
        method: "POST",
        body: formData,
      }).then((response) => {
        console.log(response);
      });
    }
  };
  return (
    <div
      className="sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl m-auto flex flex-col  md:flex-row mt-6 bg-gradient-to-r from-gray-24 to-gray-md
     sm:h-[700px] md:h-[534px] md:items-center justify-center"
    >
      <div className="w-80 mx-auto md:ml-16 lg:ml-24">
        <h3 className="text-white text-[32px] text-center xl:text-left">
          Inscreva-se e receba todas as novidades.
        </h3>
        <form className="flex flex-col items-center xl:w-80">
          <input
            className="w-80 xl:w-full h-16 mt-6 p-4"
            type="email"
            placeholder="Digite seu melhor e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscriptionFormSubmit}
            className="flex justify-center items-center font-lg font-medium w-80 xl:w-full h-16 bg-orange-B7 text-white cursor-pointer mt-6 "
          >
            Realizar inscrição
          </button>
        </form>
      </div>
      <div className=" w-3/4 flex justify-end md:justify-self-end place-self-end md:place-self-auto ">
        <Image
          src="/assets/email-car1 (1).png"
          alt=""
          width={635}
          height={425}
          className="w-full mt-5 md:mt-0  "
        />
      </div>
    </div>
  );
};
