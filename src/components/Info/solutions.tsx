import Image from "next/image";
import React from "react";

function Solutions() {
  return (
    <section className="mt-20 md:mt-44">
      <div className="ww-full mx-auto max-w-screen-xl ">
        <div className="">
          <h4 className="text-center text-[20px] md:text-[55px] font-bold">
            Bespoke Solutions for High-Value Transactions
          </h4>
          <p className="text-center md:text-[20px]">
            Tailored B2B, OTC trading, and Customized  Liquidity solutions with
            flexible rates for transactions up to $10 million, settled within 24
            hours.
          </p>
          <div className="flex  md:space-x-8  md:mt-20 flex-col md:flex-row ">
            <div className="relative w-full md:w-1/2 mt-32 px-5">
              <img
                src="/assets/svg/agriculture.svg"
                className="rounded-2xl w-[362px] md:w-full"
                alt="agriculture"
              />
              <img
                src="/assets/svg/oilGas.svg"
                className="absolute top-8 md:top-10 md:-left-10 left-3 rounded-2xl w-[362px] md:w-full"
                alt="agriculture"
              />
              <div className="absolute top-1/2 md:-left-10 left-3 ">
                <p className="bg-[#EAC216] py-3 pl-3 pr-5  md:text-[20px] z-40">
                  Oil&Gas
                </p>
              </div>
            </div>

            <div className=" relative bg-primary w-full md:w-1/2 pt-10 md:rounded-t-2xl mt-20 px-10 flex flex-col justify-center items-center ">
              <h4 className="md:text-[52px]  text-[20px] md:leading-[65.2px]  leading-[26px] text-center text-white">
                 Export-import business, Industrial trade
              </h4>
              <div className=" w-[394px] md:w-[500px]  md:h-[500px] h-96 bg-white mt-20" />
              <img
                src="/assets/svg/pie.svg"
                className="absolute top-32  md:top-52 md:left-50  rounded-2xl z-20  md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
