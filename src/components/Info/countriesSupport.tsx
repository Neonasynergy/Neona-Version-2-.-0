import Image from "next/image";
import React from "react";
import Button from "../button";

const flags = [
  {
    name: "NGN",
    flag: "ngn",
  },
  {
    name: "USD",
    flag: "us",
  },
  {
    name: "ZAR",
    flag: "MZN",
  },
  {
    name: "YUAN",
    flag: "yuan",
  },
  {
    name: "KES",
    flag: "kenya",
  },
  {
    name: "MZN",
    flag: "mzn",
  },
  {
    name: "TZS",
    flag: "tzn",
  },
  {
    name: "AED",
    flag: "uae",
  },
  {
    name: "XOF",
    flag: "xof",
  },
  {
    name: "UGX",
    flag: "ugx",
  },
  {
    name: "CAD",
    flag: "cnd",
  },
  {
    name: "JPY",
    flag: "jpy",
  },
  {
    name: "EUR",
    flag: "india",
  },
  {
    name: "GHS",
    flag: "ghn",
  },
  {
    name: "LIB",
    flag: "lib",
  },
];

function CountriesSupport() {
  return (
    <section className="mt-44">
      <div className="w-full mx-auto max-w-screen-xl">
        <div className=" text-center  px-5">
          <h4 className="font-bold text-[20px] md:text-[55px] md:leading-[69.93px] leading-[25px] ">
            Currencies We Currently Support At{" "}
          </h4>
          <div className="relative inline-block">
            <p className="relative font-bold text-[20px] md:text-[55px] md:leading-[69.93px] leading-[25px] z-10">
              {" "}
              NeonaSynergy
            </p>
            <img
              src="assets/svg/Rectangle.png"
              className="absolute top-[18px] md:top-[40px] z-0 "
              alt="Decoration"
            />
          </div>

          <p className="text-center md:px-32 font-thin mt-5">
            Explore our wide array of supported currencies from across the
            globe! Whether you're traveling or trading internationally, we've
            got you covered with a diverse selection tailored to your needs.
            Discover seamless transactions and unparalleled convenience with our
            global currency offerings.
          </p>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-9 gap-8 mt-20 px-10">
          {flags.map((flag, id) => (
            <>
              {id === 9 && (
                <div className=" hidden md:block md:col-span-1"></div>
              )}
              <div className="flex flex-col justify-center items-center col-span-1">
                <img
                  src={`assets/flags/${flag.flag}.svg`}
                  alt={`${flag.name} flag`}
                  className=""
                />
                <p className="text-[12px] md:[text-14px]">{flag.name}</p>
              </div>
            </>
          ))}
        </div>
        <div className=" hidden md:flex justify-end">
          <Button title="Learn More" icon="assets/svg/share.svg" />
        </div>
      </div>
    </section>
  );
}

export default CountriesSupport;
