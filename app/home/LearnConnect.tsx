'use client'
import Image from 'next/image'
import React from 'react'
import BigLogo from '@/public/assets/big_logo.svg'
import { Badge } from '@/components/ui/badge'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import { Card, CardContent } from '@/components/ui/card'
import arrow from '@/public/assets/arrow-side-btn.svg'
import { motion } from 'motion/react'

interface cardProps {
  title: string
  content: string
}

const cards: cardProps[] = [
  {
    title: 'Resource Access',
    content:
      'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
  },
  {
    title: 'Community Forum',
    content:
      'Join our active community forum to discuss industry trends, share insights, and collaborate with peers.',
  },
  {
    title: 'Tech Events',
    content:
      'Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.',
  },
]

const LearnConnect = () => {
  const MotionImage = motion(Image)
  const MotionCard = motion(Card)
  return (
    <section className='flex flex-col gap-8 lg:gap-12 xl:gap-20 bg-[#1A1A1A] mt-8 px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center justify-between'>
        <div className='flex items-center gap-4'>
          <MotionImage
            src={BigLogo}
            alt='logo'
            className='w-[60px] lg:w-fit h-[60px] lg:h-fit'
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: 360, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 2,
            }}
          />
          <Badge
            className='block lg:hidden w-fit h-fit text-[14px] xl:text-[16px] 2xl:text-[20px]'
            variant={`secondary`}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              Learn, Connect, and Innovate
            </motion.div>
          </Badge>
        </div>
        <div className='flex flex-col gap-2'>
          <Badge
            className='hidden lg:block w-fit text-[14px] xl:text-[16px] 2xl:text-[20px]'
            variant={`secondary`}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              Learn, Connect, and Innovate
            </motion.div>
          </Badge>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            <CustomHeader type='h1'>
              Be Part of the Future Tech Revolution
            </CustomHeader>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            <CustomText>
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </CustomText>
          </motion.div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-5 p-[10px] sm:p-5 bg-[#141414] rounded-[12px]'>
        {cards.map((item, key) => (
          <MotionCard
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
            transition={{
              delay: 0.5 + key * 0.2,
              ease: [0.34, 1.56, 0.64, 1],
              duration: 2,
            }}
            key={key}
            className='bg-[#1A1A1A] border p-[20px] xl:p-[30px] 2xl:p-[40px]'
          >
            <CardContent className='bg-[#1A1A1A] !p-0'>
              <div className='flex justify-between items-center mb-4'>
                <CustomHeader type='h4'>{item.title}</CustomHeader>
                <MotionImage
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: 360, opacity: 1 }}
                  transition={{
                    delay: 0.5 + key * 0.4,
                    ease: [0.34, 1.56, 0.64, 1],
                    duration: 2,
                  }}
                  src={arrow}
                  alt='arrow'
                  className='w-[40px] xl:w-[52px] h-[40px] xl:h-[52px]'
                />
              </div>
              <CustomText>{item.content}</CustomText>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}

export default LearnConnect
