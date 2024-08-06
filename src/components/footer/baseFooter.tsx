import Image from "next/image";
import React from "react";

export default function BaseFooter() {
  return (
    <section className="mt-32">
      <div className=" mx-auto max-w-screen-xl border-t border-gray-500 py-10">
        <p className=" text-[10px] md:text-[14px] text-center  text-gray-400 font-thin leading-[18px]">
          Copyright @Neonasynergy 2024. All rights reserved.
        </p>
      </div>
    </section>
  );
}
