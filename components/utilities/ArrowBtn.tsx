import React from 'react'
import { Button } from '../ui/button'
import { GoArrowUpRight } from 'react-icons/go'

type Props = {
  buttonText: string
  className?: string
}

const ArrowBtn = ({ buttonText, className }: Props) => {
  return (
    <Button
      variant={`outline`}
      className={`rounded-[6px] w-full md:w-fit transition-all duration-300 px-[14px] md:px-[24px] py-[24px] bg-[#141414] hover:scale-[1.075] ${className}`}
    >
      {buttonText} <GoArrowUpRight color='#FFD11A' />
    </Button>
  )
}

export default ArrowBtn
