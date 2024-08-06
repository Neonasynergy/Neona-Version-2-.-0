"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const supportedCompaniesIcons = [
  { text: "digioats.svg", width: 237, height: 60 },
  { text: "bonus.svg", width: 237, height: 72 },
  { text: "cashwyre.svg", width: 125, height: 125 },
];
export default function Sponsors() {
  return (
    <section className="w-screen max-w-screen ">
      <div className=" w-full mx-auto px-5 md:px-0 max-w-screen-xl pb-5 md:py-10  mt-20 md:mt-[56px]">
        <motion.p className="text-[13px] md:text-[28px] font-light text-center">
          Trusted by <span className="bg-[#FFAB16] rounded-full">1000+</span>{" "}
          businesses accross the globe to facilitate payments
        </motion.p>
        <div className="flex justify-center items-center md:gap-10">
          {supportedCompaniesIcons.map((icon, id) => (
            <div key={id}>
              <Image
                className="hidden md:block"
                src={`assets/svg/${icon.text}`}
                width={icon.width}
                height={icon.height}
                alt=""
              />
              <Image
                className="md:hidden"
                src={`assets/svg/${icon.text}`}
                width={100}
                height={100}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
