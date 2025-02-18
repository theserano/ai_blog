import React from 'react'
import { Badge } from '../ui/badge'
import CustomHeader from './CustomHeader'
import { Button } from '../ui/button'
import ArrowBtn from './ArrowBtn'

type Props = {
  badgeText: string
  headerText: string
  buttonText?: string
  showButton?: boolean
}

const SectionHeader = ({
  badgeText,
  headerText,
  buttonText,
  showButton = false,
}: Props) => {
  return (
    <div className='bg-[#1A1A1A] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-16 px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
      <div className='flex flex-col gap-2'>
        <Badge
          className='w-fit text-[14px] xl:text-[16px] 2xl:text-[20px]'
          variant={`secondary`}
        >
          {badgeText}
        </Badge>
        <CustomHeader type='h1'>{headerText}</CustomHeader>
      </div>
      {showButton && <ArrowBtn buttonText={buttonText ? buttonText : ''} />}
    </div>
  )
}

export default SectionHeader
