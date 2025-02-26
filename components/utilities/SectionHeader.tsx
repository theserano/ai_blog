'use client'
import React from 'react'
import { Badge } from '../ui/badge'
import CustomHeader from './CustomHeader'
import { Button } from '../ui/button'
import ArrowBtn from './ArrowBtn'
import { motion } from 'motion/react'

type Props = {
  badgeText: string
  headerText: string
  buttonText?: string
  showButton?: boolean
  buttonClick?: () => void
}

const SectionHeader = ({
  badgeText,
  headerText,
  buttonText,
  showButton = false,
  buttonClick
}: Props) => {
  const MotionBadge = motion(Badge);
  return (
    <div className='bg-[#1A1A1A] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-16 px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
      <div className='flex flex-col gap-2'>
        <MotionBadge
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
          className='w-fit text-[14px] xl:text-[16px] 2xl:text-[20px]'
          variant={`secondary`}
        >
          {badgeText}
        </MotionBadge>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
        >
          <CustomHeader type='h1'>{headerText}</CustomHeader>
        </motion.div>
      </div>
      {showButton && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
        >
          <ArrowBtn onClick={() => {if(buttonClick) buttonClick()}} buttonText={buttonText ? buttonText : ''} />
        </motion.div>
      )}
    </div>
  )
}

export default SectionHeader
