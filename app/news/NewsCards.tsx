'use client'
import React, { useState } from 'react'
import politics from '@/public/assets/politics.svg'
import techGiants from '@/public/assets/tech_giants.svg'
import covid from '@/public/assets/covid.svg'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import Image from 'next/image'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import CustomButton from '@/components/utilities/CustomButton'
import { useRouter } from 'next/navigation'

type Props = {
  className?: string
}

type NewsItem = {
  id: number
  image: string
  title: string
  category: string
  likes: number
  comments: number
}

const newsData: NewsItem[] = [
  {
    id: 1,
    image: politics,
    title: 'A Victory for Progressive Policies',
    category: 'Politics',
    likes: 2500,
    comments: 1500,
  },
  {
    id: 2,
    image: techGiants,
    title: 'Tech Giants Unveil AI Innovations',
    category: 'Technology',
    likes: 20500,
    comments: 3500,
  },
  {
    id: 3,
    image: covid,
    title: 'COVID-19 Variants',
    category: 'Health',
    likes: 7500,
    comments: 2500,
  },
]

const NewsCards = ({ className }: Props) => {
  const [liked, setLiked] = useState<Record<number, boolean>>({})
  const router = useRouter();

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-5 xl:px-20 2xl:px-40 py-12 md:py-20 2xl:py-32 border-b ${className}`}
    >
      {newsData.map((news, index) => (
        <motion.div
          key={news.id}
          className='flex flex-col gap-5'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Image
            src={news.image}
            alt={news.title}
            className='rounded-lg w-full'
          />
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <CustomHeader type='h5'>{news.title}</CustomHeader>
              <CustomText className='text-white'>{news.category}</CustomText>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-4'>
                <Button
                  variant='outline'
                  size='sm'
                  className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
                  onClick={() =>
                    setLiked((prev) => ({ ...prev, [news.id]: !prev[news.id] }))
                  }
                >
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: liked[news.id] ? 1.2 : 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {liked[news.id] ? (
                      <AiFillHeart className='text-red-500 w-5 h-5' />
                    ) : (
                      <AiOutlineHeart className='text-gray-400 w-5 h-5' />
                    )}
                  </motion.span>
                  <span className='text-gray-400'>
                    {news.likes.toLocaleString()}
                  </span>
                </Button>

                <Button
                  variant='outline'
                  size='sm'
                  className='rounded-full px-4 py-2 flex items-center gap-1 border-gray-700'
                >
                  <BiMessageRounded className='text-gray-400 w-5 h-5' />
                  <span className='text-gray-400'>
                    {news.comments.toLocaleString()}
                  </span>
                </Button>
              </div>
              <ArrowBtn
                buttonText='Read More'
                className='bg-transparent w-fit'
                onClick={() => router.push(`/blog`)}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </article>
  )
}

export default NewsCards
