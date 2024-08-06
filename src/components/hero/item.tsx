import React from "react";

function HeroItem({ bg, icon }: { bg: string; icon: string }) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="hidden  z-20 absolute left-[800px] top-[550px] w-[300px] mt-20 md:flex justify-between px-5 py-5 rounded-3xl"
    >
      <div className="flex gap-4">
        <div className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
          <img src={`assets/svg/${icon}.svg`} alt="icon" />
        </div>
        <div>
          <p className="font-light text-gray-400">Today's Sale</p>
          <p className="font-bold text-white">$2,000</p>
        </div>
      </div>
      <div className="flex items-end">
        <img src="assets/svg/chart.svg" alt="chart" />
      </div>
    </div>
  );
}

export default HeroItem;
