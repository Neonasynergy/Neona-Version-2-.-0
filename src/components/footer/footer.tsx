import Image from "next/image";
import React from "react";
// import FooterSocialLinks from "./FooterLinks";

export const footerList = [
  { heading: "Location", texts: ["Lekki, Lagos Nigeria"] },
  {
    heading: "Quick links",
    texts: [
      "About Us",
      "Contact Us",
      "Privacy Policy",
      "Terms and  Conditions",
    ],
  },
  {
    heading: "Services",
    texts: [
      "Global Payments",
      "Multicurrenncy Accounts",
      "Bulk payments/B2B settlements ",
      "Collections",
    ],
  },
  {
    heading: "Use Cases",
    texts: ["Multi Currency", "OTC", "Your Blog"],
  },
];
export default function Footer() {
  return (
    <section className="   w-full  ">
      <div className="mx-auto max-w-screen-xl md:pt-28 ">
        <div className="flex items-center md:items-start justify-between mt-10 md:mt-2  flex-row-reverse md:flex-row">
          <div className=" w-1/2 md:w-1/3">
            <a href="/" className="">
              <Image
                src="assets/svg/logo.svg"
                alt=""
                width={75}
                height={88}
                className=""
              />
            </a>
            <p className=" text-[10px] md:text-[22px] font-thin text-gray-300 leading-[12.3px] md:leading-[32px] mt-5">
              Neonasynergy provides access to deep and swift liquidity through
              its t+0 settlements mechanism
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2  md:space-x-10 ">
            {footerList.map((item, id) => (
              <div key={id} className="">
                <p className="text-white text-[10px] font-semibold md:text-[13px]  mt-3">
                  {item.heading}
                </p>

                <ul className="mt-4  text-gray-300">
                  {item.texts.map((text, idx) => (
                    <li
                      key={idx}
                      className=" text-[13px] md:py-1 flex items-center gap-3"
                    >
                      <p className="text-gray-400 text-[10px] md:text-[13px] font-light leading-4 break-normal">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
