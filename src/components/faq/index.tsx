"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../button";
import FaqItem from "./faqItem";

export const FAQ = [
  {
    question: "What types of cross-border payment services do you offer?",
    ans: "We specialize in facilitating secure and efficient B2B (Business to Business) payments and settlements across international borders.",
    id: 1,
  },
  {
    question: "How long does it take to process a cross-border payment?",
    ans: "Our typical processing time for cross-border payments ranges from 12 to 24 hours, depending on various factors such as the destination country and the specific transaction details.",
    id: 2,
  },
  {
    question: "What currencies do you support for cross-border transactions?",
    ans: "We support a wide range of currencies to accommodate diverse business needs. Please contact us for specific currency inquiries.",
    id: 3,
  },
  {
    question: "How can I initiate a cross-border payment with your company?",
    ans: "You can initiate a payment through our secure online platform or by contacting our dedicated customer service team.",
    id: 4,
  },
  {
    question: "How do you ensure the security of cross-border transactions?",
    ans: "Yes, we charge competitive fees for our services. Fees may vary based on transaction amounts and specific requirements.",
    id: 5,
  },
  {
    question: "Do you charge fees for cross-border payments?",
    ans: "We adhere to rigorous AML and KYB principles to verify all parties involved in transactions, ensuring the utmost security and compliance.",
    id: 5,
  },
  {
    question: "Can I track the status of my cross-border payment?",
    ans: "Yes, you can track your payment status through our online platform or by contacting our customer support team.",
    id: 6,
  },
];
export default function FaqIndex() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [fill, setFill] = useState("red");
  const toggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <AnimatePresence>
      <div className="my-32 md:my-40  ">
        <div className="flex flex-col justify-between  md:flex-row w-full mx-auto max-w-screen-xl px-5 ">
          {" "}
          <div className=" w-full md:w-2/3 flex  justify-center ">
            <div className="">
              <div className="">
                <div className="rounded-2xl py-1 flex items-center  bg-black  w-24   pl-1 space-x-2">
                  <div className="h-6 w-6 rounded-full bg-white flex justify-center ">
                    <Image
                      src="assets/svg/darkStar.svg"
                      height={15}
                      width={15}
                      alt="star"
                    />
                  </div>
                  <p className="text-white text-[10px]">FAQs</p>
                </div>
                <h1 className=" text-[28px] md:text-[46px] md:font-bold font-extrabold">
                  Frequently asked questions
                </h1>
              </div>

              <FaqItem />
            </div>
          </div>
          <div className="flex flex-col md:w-1/3 items-center h-[460px] bg-black pt-20 mt-24 rounded-xl px-10 space-y-8 shadow-slate-950 shadow-black-950">
            <img src="assets/svg/question.svg" alt="question mark" />
            <p className="text-white">Do you have more questions?</p>
            <p className="text-gray-500 text-[14px]">
              Cross border payments and finacial management in a single
              solution. Meet the right platform to help realize
            </p>
            <Button
              title="Shoot a direct Mail"
              bgColor="bg-primary bg-gradient-to-r from-primary  to-[#012316]"
              size="lg"
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
