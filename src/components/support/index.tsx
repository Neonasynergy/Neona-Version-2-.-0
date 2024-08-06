import React from "react";
import Button from "../button";

export const details = [
  {
    heading: "Individualized Setup",
    text: "Assisting users in setting up their accounts, profiles, or configurations according to their preferences or requirements.",
  },
  {
    heading: "Tailored Communication",
    text: "Users have a personal account manager",
  },
  {
    heading: "Customized Guidance",
    text: "Assisting users with detailed and personal guidance ",
  },
];

function Support() {
  return (
    <section className="mt-20 md:mt-44 bg-[#EBEBEB]  py-32 ">
      <div className="w-full mx-auto max-w-screen-xl ">
        <div className="flex  flex-col-reverse  md:flex-row px-5 md:space-x-8">
          <div className=" border bg-white rounded-xl px-10  h-[700px] min-h-[700px] max-h-[700px] py-10 md:w-1/2 mt-10 md:mt-0">
            <h2 className="font-bold text-[30px] md:text-[50px] text-center ">
              Comprehensive
            </h2>
            <div className="relative inline">
              <p className=" relative font-bold text-[30px] text-center md:text-[50px] md:leading-[69.93px] leading-[25px] z-10">
                {" "}
                support
              </p>
              <img
                src="assets/svg/slant.svg"
                className="absolute w-[200px] md:w-[230px]  top-[15px] left-10 md:left-36 md:top-[40px] z-0 "
                alt="Decoration"
              />
            </div>
            {/* <span className="">support</span> */}
            <p className="font-thin  mt-5 text-center">
              Experience personalized onboarding and 24/7 support, crafted to
              address your unique needs and questions.
            </p>
            {details.map((detail, id) => (
              <div className="flex space-x-4  mt-8">
                <div className="">
                  <div className="h-3  w-3 mt-3 bg-primary rounded-full" />
                </div>
                <div className="flex flex-col  justify-center  items-center md:block">
                  <h4 className="md:text-[26px] text-[20px] font-semibold">
                    {detail.heading}
                  </h4>
                  <p className="font-thin">{detail.text}</p>
                  {id === 0 ||
                    (id === 1 && (
                      <div className="md:hidden flex justify-center  mt-5  w-6 h-6  items-center border border-primary rounded-full">
                        <img src="assets/svg/play2.svg" alt="play icon" />
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <div className="flex justify-end  mt-5 ">
              <Button title="Contact Us" />
            </div>
          </div>
          <div className="md:w-1/2 h-[700px] ">
            <img
              src="assets/svg/heads.svg"
              className=" h-full w-full  object-cover  rounded-xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
