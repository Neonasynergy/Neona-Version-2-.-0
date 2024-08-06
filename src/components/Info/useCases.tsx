import Image from "next/image";
import React from "react";
import Button from "../button";

export const details = [
  {
    src: "hand",
    heading: "Global Payments",
    text: "Make instant international payments to over 110 countries instantly without slippages",
  },
  {
    src: "camera",
    heading: "Multi Currency Accounts",
    text: "Expand your business's global reach with dedicated international account numbers in key currencies like USD, CAD, KES, NGN, CFA, EUR, and GBP.",
  },
  {
    src: "camera",
    heading: "Bulk payments/B2B settlements",
    text: "Process large scale payments both domestically and internationally with ease, leveraging our robust and extensive liquidity infrastructure",
  },
];

function UseCases() {
  return (
    <section className="w-full justify-center items-center flex my-20  ">
      <div className=" px-5 md:px-0  py-10 w-full md:w-3/4 flex md:space-x-5 flex-col  space-y-6 md:flex-row justify-evenly items-center mx-auto max-w-screen-xl">
        {details.map((detail, id) => (
          <div
            key={id}
            className=" bg-primary bg-gradient-to-b from-[#010704] to-primary pt-10 pb-5 rounded-2xl  flex flex-col justify-between text-white   w-full md:w-1/3 md:min-w-1/3 md:max-w-1/2 h-[400px] min-h-400px]"
          >
            <div className="px-10 space-y-6 ">
              <div className="flex justify-center  items-center bg-icon bg-no-repeat bg-contain w-10 h-10">
                <Image
                  src={`/assets/svg/${detail.src}.svg`}
                  alt=""
                  height={20}
                  width={20}
                />
              </div>
              <h5 className=" text-[19px] md:text-[31px]">{detail.heading}</h5>
              <p>{detail.text}</p>
            </div>
            <div className="flex justify-end">
              <Button title="Learn more" icon="assets/svg/share.svg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default UseCases;
