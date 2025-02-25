'use client'
import React from 'react'
import Image from 'next/image'
import BlogImage from '@/public/assets/blogImage.svg'
import CustomHeader from '@/components/utilities/CustomHeader'
import BlogDetails from './BlogDetails'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import NewsCards from '../news/NewsCards'
import { motion } from 'motion/react'

type Props = {}

const Blog = ({}: Props) => {
  const MotionImage = motion(Image)
  return (
    <div>
      <section className='relative h-[281px] md:h-[350px] xl:h-[439px] 2xl:h-[598px] flex flex-col justify-end items-center pb-[30px] md:pb-[50px] xl:pb-[80px] px-[20px]'>
        <MotionImage
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 2,
          }}
          src={BlogImage}
          alt='Blog Background'
          layout='size'
          objectFit='cover'
          className='!absolute inset-0 -z-10'
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
        >
          <CustomHeader type='h1' className='!font-bold text-center'>
            The Rise of Artificial Intelligence in Healthcare
          </CustomHeader>
        </motion.div>
      </section>
      <BlogDetails />
      <section className='px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px]'>
        <div className='flex justify-between items-center '>
          <CustomHeader type='h5'>Similar News</CustomHeader>
          <ArrowBtn buttonText='View All News' className='!bg-transparent' />
        </div>
        <NewsCards className='!py-[50px] !px-0' />
      </section>
    </div>
  )
}

export default Blog
