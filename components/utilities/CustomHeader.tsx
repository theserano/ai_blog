import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | string
  type: 'h1' | 'h3'
}

const CustomHeader = ({ children, type }: Props) => {
  return (
    <>
      {type === 'h1' ? (
        <h1 className='font-medium text-[30px] md:text-[40px] xl:text-[55px] 2xl:text-[70px] text-white leading-[120%]'>
          {children}
        </h1>
      ) : type === 'h3' ? (
        <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
          {children}
        </h1>
      ) : null}
    </>
  )
}

export default CustomHeader
