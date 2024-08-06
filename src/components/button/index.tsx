import React from "react";

const Button = ({
  title,
  onClick,
  bgColor,
  icon,
  size,
  color,
  border,
}: {
  title: string;
  onClick?: any;
  bgColor?: string;
  icon?: string;
  mailto?: string;
  size?: string;
  color?: string;
  border?: string;
}) => {
  const defaultButtonClass = "text-white";
  const buttonClass = bgColor
    ? `bg-${bgColor} ${defaultButtonClass} ${color} `
    : "bg-black text-white";

  const width =
    size === "md"
      ? "px-5 md:px-10 shadow-none"
      : size === "lg"
      ? "w-full py-3 "
      : "px-10 py-2 md:py-3";

  return (
    <button
      type="button"
      className={` rounded-3xl shadow-lg  shadow-black flex items-center justify-center gap-2 text-[12px] md:text-[14px] ${width} ${buttonClass}`}
      onClick={onClick}
      style={{ backgroundColor: bgColor, color, border }}
    >
      <p className={size === "md" ? "text-[14px] py-3 " : "text-[12px]"}>
        {title}
      </p>
      {icon && <img src={icon} alt="" />}
    </button>
  );
};

export default Button;

// import React from "react";

// const Button = ({
//   title,
//   onClick,
//   bgColor,
//   icon,
//   size,
// }: {
//   title: string;
//   onClick?: any;
//   bgColor?: string;
//   icon?: string;
//   mailto?: string;
//   size?: string;
// }) => {
//   const buttonClass = bgColor
//     ? "bg-white border border-green-main text-black"
//     : "bg-green-main text-white";

//   const width =
//     size === "md"
//       ? "px-24  shadow-md shadow-[#008753] bg-[#008753] "
//       : "px-3 md:px-5";

//   return (
//     <button
//       type="button"
//       className={`py-2 md:py-3 px-10 rounded-xl shadow-lg shadow-black flex items-center gap-2 text-[12px] md:text-[14px] size-{size} text-white     `}
//       onClick={onClick}
//     >
//       <p className={size === "md" ? "text-[18px]" : "text-[12px]"}>{title}</p>
//       {icon && <img src={icon} />}
//     </button>
//   );
// };

// export default Button;
