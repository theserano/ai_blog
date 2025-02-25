'use client'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { motion } from 'motion/react'

type Props = {}

const Hero = ({}: Props) => {
  return (
    <section>
      <article className='flex flex-col gap-0 md:gap-[20px] px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px] border-b'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
        >
          <CustomHeader type='h1'>Unlock a World of </CustomHeader>
        </motion.div>
        <div className='flex flex-col md:flex-row gap-[20px] lg:gap-[60px] xl:gap-[80px] md:items-center justify-start'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            <CustomHeader type='h1'>Knowledge</CustomHeader>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            <CustomText>
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and discussions
              on artificial intelligence. Whether you're an enthusiast or a
              professional, our AI podcasts offer a gateway to knowledge and
              innovation.
            </CustomText>
          </motion.div>
        </div>
      </article>
      <div className='grid grid-cols-2 md:flex border-b'>
        <span className='flex flex-col py-[20px] md:py-[50px] w-full border-r border-b md:border-b-0 pl-[20px] xl:pl-[80px] 2xl:pl-[162px]'>
          <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
            300
            <FaPlus color='FFD11A' fontSize={`20px`} />
          </h1>
          <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
            Resources Available
          </p>
        </span>
        <span className='flex flex-col py-[20px] md:py-[50px] w-full border-r border-b md:border-b-0 pl-[20px] xl:pl-[80px]'>
          <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
            12K
            <FaPlus color='FFD11A' fontSize={`20px`} />
          </h1>
          <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
            Total Downloads
          </p>
        </span>
        <span className='flex flex-col py-[20px] md:py-[50px] w-full border-r pl-[20px] xl:pl-[80px]'>
          <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
            10k
            <FaPlus color='FFD11A' fontSize={`20px`} />
          </h1>
          <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
            Active Users
          </p>
        </span>
        <span className='flex flex-col py-[20px] md:py-[50px] w-full border-r  pl-[20px] xl:pl-[80px] pr-[20px] xl:pr-[80px] 2xl:pr-[162px]'>
          <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
            100
            <FaPlus color='FFD11A' fontSize={`20px`} />
          </h1>
          <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
            Countries Accesses Our Content
          </p>
        </span>
      </div>
    </section>
  )
}

export default Hero
