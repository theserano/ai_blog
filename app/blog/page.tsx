import React from 'react'
import Image from 'next/image'
import BlogImage from '@/public/assets/blogImage.svg'
import CustomHeader from '@/components/utilities/CustomHeader'
import BlogDetails from './BlogDetails'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import NewsCards from '../news/NewsCards'

type Props = {}

const Blog = ({}: Props) => {
  return (
    <div>
      <section className='relative h-[281px] md:h-[350px] xl:h-[439px] 2xl:h-[598px] flex flex-col justify-end items-center pb-[30px] md:pb-[50px] xl:pb-[80px] px-[20px] border-b'>
        <Image
          src={BlogImage}
          alt='Blog Background'
          layout='fill'
          objectFit='cover'
          className='!absolute inset-0 -z-10'
        />
        <CustomHeader type='h1' className='!font-bold text-center'>
          The Rise of Artificial Intelligence in Healthcare
        </CustomHeader>
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
