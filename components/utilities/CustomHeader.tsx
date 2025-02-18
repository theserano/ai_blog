import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | string
  type: 'h1' | 'h3' | 'h4' | 'h5',
  className?: string;
}

const CustomHeader = ({ children, type, className }: Props) => {
  return (
    <>
      {type === 'h1' ? (
        <h1 className={`font-medium text-[30px] md:text-[40px] xl:text-[55px] 2xl:text-[70px] text-white leading-[120%] ${className}`}>
          {children}
        </h1>
      ) : type === 'h3' ? (
        <h3 className={`text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center ${className}`}>
          {children}
        </h3>
      ) : type === 'h4' ? (
        <h4 className={`text-[18px] font-semibold md:text-[22px] 2xl:text-[26px] ${className}`}>{children}</h4>
      ) : type === 'h5' ? (
        <h4 className={`text-[16px] font-semibold md:text-[18px] 2xl:text-[20px] ${className}`}>{children}</h4>
      ) : null}
    </>
  )
}

export default CustomHeader
