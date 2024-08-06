import React from "react";

function InfoSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl md:pt-28 border-t-2 pt-10 border-dashed border-[#606060]/50 border-spacing-x-48 font-sora pl-5 md:px-0">
        <div className="flex justify-between items-center">
          <div className="text-[15px] md:text-[63px] leading-[15px] md:leading-[73.38px] font-bold w-1/3 ">
            <p>introducing </p>
            <p className="text-primary">Neonasynergy</p>{" "}
          </div>
          <div className="w-2/3 bg-primary bg-gradient-to-r from-primary  text-[6px] md:text-[14px] to-[#012316] md:w-1/2 md:pr-14 pl-8 py-5 rounded-tl-xl rounded-bl-xl text-white">
            <p>
              Neona Synergy is a leading fintech company focused on providing
              advanced cross-border payments and remittance solutions for
              corporate businesses. Our mission is to deliver fast, secure, and
              cost-effective financial services that cater to the global market
              needs.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center"></div>
      </div>
    </section>
  );
}

export default InfoSection;
