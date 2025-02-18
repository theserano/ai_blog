'use client'
import React, { useState } from "react";
import politics from '@/public/assets/politics.svg'
import techGiants from '@/public/assets/tech_giants.svg'
import covid from '@/public/assets/covid.svg'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import Image from "next/image";
import CustomHeader from "@/components/utilities/CustomHeader";
import CustomText from "@/components/utilities/CustomText";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import CustomButton from "@/components/utilities/CustomButton";

type Props = {
    className?: string;
};

const NewsCards = ({ className }: Props) => {
    const [liked1, setLiked1] = useState(false)
    const [liked2, setLiked2] = useState(false)
    const [liked3, setLiked3] = useState(false)
  return (
    <article className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px] border-b ${className}`}>
      <div className='flex flex-col gap-[20px]'>
        <Image src={politics} alt='image' className='rounded-[12px] w-full' />
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[4px]'>
            <CustomHeader type='h5'>
              A Victory for Progressive Policies
            </CustomHeader>
            <CustomText className='text-white'>Politics</CustomText>
          </div>
          <div className='flex gap-[20px] justify-between items-center'>
            <div className='flex gap-4'>
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
                onClick={() => setLiked1(!liked1)}
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: liked1 ? 1.2 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {liked1 ? (
                    <AiFillHeart className='text-red-500 w-5 h-5' />
                  ) : (
                    <AiOutlineHeart className='text-gray-400 w-5 h-5' />
                  )}
                </motion.span>
                <span className='text-gray-400'>2.5k</span>
              </Button>

              {/* Comment Button */}
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
              >
                <BiMessageRounded className='text-gray-400 w-5 h-5' />
                <span className='text-gray-400'>1.5k</span>
              </Button>
            </div>
            <ArrowBtn buttonText='Read More' className='bg-transparent w-fit' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <Image src={techGiants} alt='image' className='rounded-[12px] w-full' />
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[4px]'>
            <CustomHeader type='h5'>
              Tech Giants Unveil AI Innovations
            </CustomHeader>
            <CustomText className='text-white'>Technology</CustomText>
          </div>
          <div className='flex gap-[20px] justify-between items-center'>
            <div className='flex gap-4'>
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
                onClick={() => setLiked2(!liked2)}
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: liked2 ? 1.2 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {liked2 ? (
                    <AiFillHeart className='text-red-500 w-5 h-5' />
                  ) : (
                    <AiOutlineHeart className='text-gray-400 w-5 h-5' />
                  )}
                </motion.span>
                <span className='text-gray-400'>20.5k</span>
              </Button>

              {/* Comment Button */}
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
              >
                <BiMessageRounded className='text-gray-400 w-5 h-5' />
                <span className='text-gray-400'>3.5k</span>
              </Button>
            </div>
            <ArrowBtn buttonText='Read More' className='bg-transparent w-fit' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <Image src={covid} alt='image' className='rounded-[12px] w-full' />
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[4px]'>
            <CustomHeader type='h5'>COVID-19 Variants</CustomHeader>
            <CustomText className='text-white'>Health</CustomText>
          </div>
          <div className='flex gap-[20px] justify-between items-center'>
            <div className='flex gap-4'>
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
                onClick={() => setLiked3(!liked3)}
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: liked3 ? 1.2 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {liked3 ? (
                    <AiFillHeart className='text-red-500 w-5 h-5' />
                  ) : (
                    <AiOutlineHeart className='text-gray-400 w-5 h-5' />
                  )}
                </motion.span>
                <span className='text-gray-400'>7.5k</span>
              </Button>

              {/* Comment Button */}
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
              >
                <BiMessageRounded className='text-gray-400 w-5 h-5' />
                <span className='text-gray-400'>2.5k</span>
              </Button>
            </div>
            <CustomButton
              buttonText='Read More'
              className='bg-transparent w-fit'
            />
          </div>
        </div>
      </div>
    </article>
  )
};

export default NewsCards;
