"use client";
import Image from "next/image";
import React from "react";
import Button from "../button";
import HeroItem from "./item";

export const starItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Services",
    link: "/",
  },
  {
    text: "Company",
    link: "/",
  },
  {
    text: "Blog",
    link: "/",
  },
  {
    text: "Blog",
    link: "/",
  },
];
function HeroIndex() {
  return (
    <main className=" bg-primary bg-gradient-to-b from-primary  to-[#012316]  md:h-screen h-80  w-full  ">
      <div className="mx-auto max-w-screen-xl md:pt-28 flex">
        <div className="md:w-1/2  w-5/6 mx-auto flex-col md:mx-0">
          <div className="hidden md:flex w-60 max-w-60  space-x-3 py-3  bg-black rounded-full  items-center justify-center text-white text-[12px] px-5">
            <p className="leading-[13.31px] font-inter font-normal">
              neonasynergy
            </p>
            <div className="flex space-x-1">
              {starItems.map((star, index) => (
                <Image
                  key={index}
                  src="/assets/svg/star.svg"
                  alt="star"
                  height={10}
                  width={10}
                />
              ))}
              <p className="font-bold">4.9</p>
            </div>
          </div>
          <div className="md:mt-24 text-white">
            <h1 className="hidden  md:block leading-[81.9px] text-[65px] font-bold">
              Cross-Border Payments For Businesses and Cooperations
            </h1>
            <p className="md:hidden leading-[30.2px] text-white text-[20px] font-bold text-center">
              Enhancing The Scale Of <br />
              Cross Border Payments For <br /> Businesses and <br />
              Cooperations{" "}
            </p>
            <div className="md:text-[24px] text-[10px] mt-8 text-white text-center md:text-left leading-[12.5pxs] md:leading-[30.24px] font-light  font-sora">
              <div className="hidden md:block">
                <p>We foster international </p>
                <p className="">Collaborations for Local Businesses</p>
              </div>

              <p className="whitespace-nowrap  md:hidden ">
                We foster international collaborations for local businesses
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-24">
            <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0  items-center space-x-3 text-white">
              <Button title="Get Started" />
              <div className=" flex items-center">
                <Image
                  alt="play"
                  height={20}
                  width={20}
                  src="/assets/svg/play.svg"
                />
                <p className="text-[11px] font-thin">Book Appointment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <div className="relative z-0 flex justify-between items-start ">
            <img alt="" src="assets/svg/dashboard_chart.svg" />

            <div className="bg-[#222932] w-[300px] mt-20  flex justify-between px-5 py-5   rounded-3xl">
              <div className="flex gap-4">
                <div className="flex justify-center items-center bg-white h-10 w-10 rounded-full ">
                  <img src="assets/svg/graph.svg" alt="chart" />
                </div>
                <div className="">
                  <p className="font-light text-gray-400">Todays's Sale</p>
                  <p className=" font-bold text-white">$2,000</p>
                </div>
              </div>
              <div className="flex items-end">
                <img src="assets/svg/chart.svg" alt="chart" />
              </div>
            </div>
          </div>
          <div className=" absolute top-2/4 -right-2 ">
            <img
              alt=""
              className=" relative  z-10"
              src="assets/svg/dashboard.svg"
            />
          </div>
          <HeroItem bg="#4385F4" icon="book" />
        </div>
      </div>
    </main>
  );
}

export default HeroIndex;
