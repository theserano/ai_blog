'use client'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import React, { useState } from 'react'
import GlobalClimate from '@/public/assets/global_climate.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import CustomButton from '@/components/utilities/CustomButton'
import NewsCards from './NewsCards'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const [liked, setLiked] = useState(false)
  const MotionImage = motion(Image)
  const router = useRouter();

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
          <CustomHeader type='h1'>Today&apos;s Headlines: Stay</CustomHeader>
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
            <CustomHeader type='h1'>Informed</CustomHeader>
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
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </CustomText>
          </motion.div>
        </div>
      </article>
      <article className='flex flex-col lg:flex-row lg:items-center justify-between gap-[30px] md:gap-[80px] px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px] border-b'>
        <MotionImage
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'linear' }}
          src={GlobalClimate}
          alt='global climate'
          className='lg:max-w-[400px] w-full max-h-[200px] md:max-h-[400px] object-cover rounded-[10px]'
        />
        <div className='flex flex-col gap-[20px] md:gap-[50px]'>
          {/* title and subtext */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
            className='flex flex-col gap-[20px] md:gap-[30px]'
          >
            <CustomHeader type='h3'>
              Global Climate Summit Addresses Urgent Climate Action
            </CustomHeader>
            <CustomText>
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </CustomText>
          </motion.div>
          {/* flex header and subtext */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
            className='flex gap-[50px] justify-start items-center'
          >
            <div className='flex flex-col gap-[4px]'>
              <CustomText>Category</CustomText>
              <CustomText className='text-white'>Environment</CustomText>
            </div>
            <div className='flex flex-col gap-[4px]'>
              <CustomText>Publication Date</CustomText>
              <CustomText className='text-white'>October 10, 2023</CustomText>
            </div>
            <div className='flex flex-col gap-[4px]'>
              <CustomText>Author</CustomText>
              <CustomText className='text-white'>Jane Smith</CustomText>
            </div>
          </motion.div>
          {/* comment, likes and read more  */}
          <div className='flex gap-[20px] justify-between items-center'>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
              className='flex gap-4'
            >
              <Button
                variant='outline'
                size='sm'
                className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
                onClick={() => setLiked(!liked)}
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: liked ? 1.2 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {liked ? (
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
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              <CustomButton
                buttonText='Read More'
                className='bg-transparent w-fit'
                onClick={() => router.push('/blog')}
              />
            </motion.div>
          </div>
        </div>
      </article>
      <NewsCards />
    </section>
  )
}

export default Hero
