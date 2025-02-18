import React, { ReactNode } from "react";

type Props = {
    children: ReactNode | string;
    className?: string;
};

const CustomText = ({ children, className }: Props) => {
  return (
    <p className={`text-[#7E7E81] text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[150%] ${className}`}>
      {children}
    </p>
  )
};

export default CustomText;
