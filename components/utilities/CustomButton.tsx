import React, { ReactElement } from 'react'
import { Button } from '../ui/button'

type Props = {
  buttonText: string
  className?: string
  buttonIcon?: ReactElement
  onClick?: () => void
}

const CustomButton = ({ buttonText, className, buttonIcon, onClick }: Props) => {
  return (
    <Button
      variant={`outline`}
      className={`rounded-[6px] w-full md:w-fit transition-all duration-300 px-[14px] md:px-[24px] py-[24px] bg-[#141414] ${className}`}
      onClick={onClick}
    >
      {buttonText} {buttonIcon ? buttonIcon : ''}
    </Button>
  )
}

export default CustomButton
