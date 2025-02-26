'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import CustomHeader from './CustomHeader'
import CustomText from './CustomText'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiMessageRounded, BiSend } from 'react-icons/bi'

import { motion } from 'motion/react'
import ArrowBtn from './ArrowBtn'

interface BlogItemsProps {
  id: number
  author: string
  category: string
  date: string
  title: string
  description: string
  likes: string
  comments: number
  shares: number
  avatar: string
}

export interface BlogListingProps {
  category: string
  items: BlogItemsProps[]
}

type Props = {
  data: BlogListingProps[]
}

const BlogCard = ({
  author,
  avatar,
  category,
  comments,
  date,
  description,
  likes,
  shares,
  title,
  id,
}: BlogItemsProps) => {
  const [liked, setLiked] = useState(false)

  return (
    <article
      key={id}
      className='grid grid_cols_2_bCard gap-4 md:gap-8 justify-between items-start px-[20px] xl:px-[80px] 2xl:px-[162px] py-[20px] lg:py-[50px] border-b-[1px] border-x-[1px]'
    >
      <div className='flex flex-row justify-between items-center gap-4'>
        <div className='flex flex-row gap-4 items-center'>
          <div className='relative w-[80px] h-[80px] rounded-[50%] overflow-hidden'>
            <Image
              src={avatar}
              alt='person'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 80px, (max-width: 1200px) 100px, 120px'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[18px] 2xl:text-[20px]font-semibold'>{author}</p>
            <p className='text-[#98989A] text-[14px] xl:text-[16px] 2xl:text-[18px]'>
              {category}
            </p>
          </div>
        </div>
        <ArrowBtn buttonText='View Blogs' className='flex lg:hidden w-fit' />
      </div>
      <div className='flex gap-[50px] justify-between items-center'>
        <div className='flex flex-col gap-2 items-start'>
          <p className='text-[16px] xl:text-[18px] 12xl:text-[20px] text-[#98989A] font-semibold mb-2 sm:mb-4'>
            {date}
          </p>
          <CustomHeader type='h4'>{title}</CustomHeader>
          <CustomText className='mb-2 sm:mb-4'>{description}</CustomText>
          <div className='flex gap-3'>
            {/* Like Button */}
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
              <span className='text-gray-400'>{likes}</span>
            </Button>

            {/* Comment Button */}
            <Button
              variant='outline'
              size='sm'
              className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
            >
              <BiMessageRounded className='text-gray-400 w-5 h-5' />
              <span className='text-gray-400'>{comments}</span>
            </Button>

            {/* Share Button */}
            <Button
              variant='outline'
              size='sm'
              className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
            >
              <BiSend className='text-gray-400 w-5 h-5' />
              <span className='text-gray-400'>{shares}</span>
            </Button>
          </div>
        </div>
        <ArrowBtn buttonText='View Blogs' className='w-fit hidden lg:flex' />
      </div>
    </article>
  )
}

const BlogListing = ({ data }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Quantum Computing')
  const MotionButton = motion(Button);

  const renderData = (data: BlogListingProps[]) => {
    if (selectedCategory === 'All') {
      const newData = data.flatMap((element) => element.items)

      return newData.map((value) => {
        return (
          <div key={Math.random()}>
            <BlogCard
              key={value.id}
              author={value.author}
              avatar={value.avatar}
              category={value.category}
              comments={value.comments}
              date={value.date}
              description={value.description}
              likes={value.likes}
              shares={value.shares}
              title={value.title}
              id={value.id}
            />
          </div>
        )
      })
    } else {
      const newData = data.find((item) => item.category === selectedCategory)
      return newData?.items.map((value) => {
        return (
          <div key={Math.random()}>
            <BlogCard
              key={value.id}
              author={value.author}
              avatar={value.avatar}
              category={value.category}
              comments={value.comments}
              date={value.date}
              description={value.description}
              likes={value.likes}
              shares={value.shares}
              title={value.title}
              id={value.id}
            />
          </div>
        )
      })
    }
  }

  return (
    <section className=''>
      <div className='flex flex-row gap-[14px] sticky top-[-5px] bg-[#0A0A0A] xl:gap-[20px] w-full overflow-x-scroll px-[20px] xl:px-[80px] 2xl:px-[162px] py-[20px] lg:py-[50px] border-[1px] z-20'>
        {data.map((value, key) => (
          <MotionButton
            key={key}
            className={`px-[16px] lg:px-[20px] xl:px-[24px] py-[18px] lg:py-[24px] xl:py-[30px] text-[#98989A] text-[14px] lg:text-[16px] xl:text-[18px] rounded-[4px] ${
              selectedCategory === value.category ? 'bg-[#262626]' : ''
            }`}
            variant={`outline`}
            onClick={() => setSelectedCategory(value.category)}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5 + key * 0.2,
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            {value.category}
          </MotionButton>
        ))}
      </div>
      <div className='flex flex-col max-h-[400px] md:max-h-[850px] overflow-y-scroll'>
        {renderData(data)}
      </div>
    </section>
  )
}

export default BlogListing
