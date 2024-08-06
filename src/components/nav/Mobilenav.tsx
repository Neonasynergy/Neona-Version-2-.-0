import { containerVar, menuVariants, mobileMenuLinks } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

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
    text: "FAQ",
    link: "faq",
  },
  {
    text: "Blog",
    link: "/",
  },
];
export const servicesList = [
  "International Payment",
  "Corporate Treasury",
  "Currency Swaps Currency",
  "OTC",
];

export default function Mobilenav({
  toggleFunction,
  isOpen,
}: {
  toggleFunction: () => void;
  isOpen: boolean;
}) {
  const [openDropdown, setOpenDropdown] = useState(false);

  // const toogleDopdown = (id: number) => {
  //   if (id === 1) {
  //     setOpenDropdown(!openDropdown);
  //   } else {
  //     setIsOpen(!isOpen);
  //   }
  // };
  return (
    <motion.aside
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed origin-top right-0 bottom-0 top-0 left-0  w-full max-w-screen overflow-x-hidden  h-screen  bg-white  text-black lg:hidden"
    >
      <div className="mt-7">
        <div className="flex justify-end pr-5">
          <button onClick={toggleFunction}>
            <svg
              className="w-10 h-10 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="#BCC3DC"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <motion.ul
          variants={containerVar}
          initial="initial"
          animate="open"
          exit="initial"
          className=" flex  overflow-hidden flex-col relative "
        >
          {navItems.map((item, id) => (
            <motion.li
              variants={mobileMenuLinks}
              className="p-7 shadow-sm relative"
              key={id}
              // onClick={() => toogleDopdown(id)}
            >
              <Link href={item.link}>
                <p>{item.text}</p>
              </Link>
              {openDropdown && id === 1 && (
                <motion.div className=" rounded-full translate-y-3 duration-300 ease-in-out delay-500">
                  <motion.div className="w-60  bg-gray-100 shadow-lg     rounded-2xl p-5">
                    {servicesList.map((service, id) => (
                      <motion.p key={id} className="pb-2 transition-colors">
                        {service}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.aside>
  );
}
