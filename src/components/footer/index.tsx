import React from "react";
import Button from "../button";
import Footer from "./footer";
import BaseFooter from "./baseFooter";

function FooterIndex() {
  return (
    <main className=" bg-primary bg-gradient-to-b from-primary  to-[#012316]   w-full  ">
      <div className="mx-auto max-w-screen-xl pt-14 md:pt-28 px-5">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between md:items-center border-gray-500  border-b  pb-32">
          <p className="text-[25px] w-full  md:w-1/2 md:text-[65px] md:leading-[81.9px] leading-[31.5px] font-bold text-white">
            Lets Grow Your <br />
            Business Together.
          </p>
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300 font-thin  text-[15px] md:text-[32px] ">
              Lets make your journey effortless and as seamless as possible,
              reach out to us today
            </p>
            <div className=" flex space-x-3">
              <Button
                title="Get Started"
                bgColor="white"
                color="black"
                icon="assets/svg/share.svg"
                size="md"
              />
              <Button
                title="Contact sale"
                bgColor="bg-transparent"
                icon="assets/svg/share.svg"
                // borderColor="border-white "
                border="1px  solid #d1d5db"
                size="md"
              />
            </div>
          </div>
        </div>
        <Footer />
        <BaseFooter />
      </div>
    </main>
  );
}
export default FooterIndex;
