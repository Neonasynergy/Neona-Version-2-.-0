"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import Mobilenav from "./Mobilenav";
import { AnimatePresence, motion } from "framer-motion";

export const navItems = [
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
];

function NavIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  const handleLinkClick = (index: any) => {
    setActiveIndex(index);
  };

  const toggleFunction = () => {
    setToggleMobileNav(!toggleMobileNav);
  };
  return (
    <nav className="w-full pb-4 bg-primary">
      <div className="flex justify-center items-center">
        <div className=" hidden  w-full md:w-5/6 max-w-screen-xl md:bg-white py-5 md:flex justify-between items-center px-10 rounded-b-[30px]">
          <Image src="/assets/svg/logo.svg" alt="logo" width={50} height={50} />
          <div className="flex gap-10">
            {navItems.map((item, index) => (
              <ul
                className="flex justify-center items-center gap-1"
                key={index}
              >
                <Link
                  href={item.link}
                  className=""
                  onClick={() => handleLinkClick(index)}
                >
                  {item.text}
                  <div
                    className={`w-10 py-[1px] bg-[#32FA21] mx-auto rounded-2xl ${
                      activeIndex === index ? "" : "hidden"
                    }`}
                  />
                </Link>
              </ul>
            ))}
          </div>
          <Button title="Contact us" bgColor={"black"} />
        </div>
      </div>
      <div className="md:hidden flex justify-between pr-10">
        <div
          onClick={toggleFunction}
          className="w-16 h-16 flex justify-center bg-white p-4 rounded-br-lg"
        >
          <Image src="/assets/svg/menu.svg" alt="logo" width={20} height={20} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/assets/svg/logo.svg" alt="logo" width={20} height={20} />
        </div>
        <div className=""></div>
      </div>

      {toggleMobileNav && (
        <AnimatePresence>
          <Mobilenav isOpen={toggleMobileNav} toggleFunction={toggleFunction} />
        </AnimatePresence>
      )}
    </nav>
  );
}

export default NavIndex;
