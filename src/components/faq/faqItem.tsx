import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

function FaqItem() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [fill, setFill] = useState("red");
  const toggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="mt-10 s md:px-0">
      {FAQ.map((question, index) => (
        <div
          className={` w-full mt-5 py-3 flex flex-col gap-3 px-4 rounded-md  ${
            activeIndex === index
              ? " shadow-2xl rounded-lg "
              : "border border-gray-400 "
          }`}
          key={index}
        >
          <div className="flex justify-between  items-center ">
            <p className="md:text-[18px] text-[14px]  font-semibold ">
              {question.question}
            </p>
            <button onClick={() => toggle(index)}>
              {/* <p> {open ? "-" : "+"}</p> */}
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    activeIndex === index && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    activeIndex === index && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
          </div>
          <motion.div
            className={`grid overflow-hidden transition-all text-gray-700 font-thin duration-300 ease-in-out ${
              activeIndex === index
                ? "  pb-7 grid-rows-[1fr] opacity-100"
                : "hidden grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="">
              {/* <span className="text-red-500 pb-7">ANS: </span>{" "} */}
              {question.ans}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default FaqItem;
