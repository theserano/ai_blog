import React, { ReactElement } from "react";

type Props = {
    children: ReactElement | string
};

const CustomText = ({ children }: Props) => {
  return (
    <p className='text-[#7E7E81] text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[150%]'>
      {children}
    </p>
  )
};

export default CustomText;
