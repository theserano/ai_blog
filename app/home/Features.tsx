'use client'
import CustomHeader from '@/components/utilities/CustomHeader'
import Image from 'next/image'
import React from 'react'
import FTBlog from '@/public/assets/ft_blog.svg'
import RIBlog from '@/public/assets/ri_blog.svg'
import CustomText from '@/components/utilities/CustomText'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeader from '@/components/utilities/SectionHeader'
import { motion } from 'motion/react'

type Props = {}

interface cardDetails {
  title: string
  body: string
}

const futureCardDetails: cardDetails[] = [
  {
    title: 'Quantity',
    body: 'Over 1,000 articles on emerging tech trends and breakthroughs.',
  },
  {
    title: 'Variety',
    body: 'Articles cover fields like AI, robotics, biotechnology, and more.',
  },
  {
    title: 'Frequency',
    body: 'Fresh content added daily to keep you up to date.',
  },
  {
    title: 'Authoritative',
    body: 'Written by our team of tech experts and industry professionals.',
  },
]

const researchCardDetails: cardDetails[] = [
  {
    title: 'Depth',
    body: '500+ research articles for in-depth understanding.',
  },
  {
    title: 'Graphics',
    body: 'Visual aids and infographics to enhance comprehension.',
  },
  {
    title: 'Trends',
    body: 'Explore emerging trends in future technology research.',
  },
  {
    title: 'Contributors',
    body: 'Contributions from tech researchers and academics.',
  },
]

const Features = ({}: Props) => {
  const MotionCard = motion(Card)
  const MotionImage = motion(Image)
  return (
    <section>
      <SectionHeader
        badgeText='Unlock the Power of'
        headerText='FutureTech Features'
        buttonText='Explore'
        showButton
      />

      <div className='grid grid_cols_2_big'>
        <div className='pl-[20px] xl:pl-[80px] 2xl:pl-[162px] pr-[20px] xl:pr-[80px] py-[50px] flex justify-start xl:justify-center items-center border-t-[1px] xl:border-b-[1px] border-l-[1px] border-r-[1px]'>
          <div className='flex flex-col gap-2'>
            <MotionImage
              initial={{ rotate: 0, opacity: 0 }}
              whileInView={{ rotate: 360, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 2,
              }}
              src={FTBlog}
              alt='image'
              className='mb-4'
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              <CustomHeader type='h3'>Future Technology Blog</CustomHeader>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              <CustomText>
                Stay informed with our blog section dedicated to future
                technology.
              </CustomText>
            </motion.div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] p-[20px] xl:p-[80px] xl:border-t-[1px] border-b-[1px] border-r-[1px]'>
          {futureCardDetails.map((card, key) => (
            <MotionCard
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
              transition={{
                delay: 0.5 + key * 0.2,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 2,
              }}
              className='bg-[#1A1A1A]'
              key={key}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-[#98989A]'>{card.body}</CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
      <div className='grid grid_cols_2_big'>
        <div className='pl-[20px] xl:pl-[80px] 2xl:pl-[162px] pr-[20px] xl:pr-[80px] py-[50px] flex justify-start xl:justify-center items-center xl:border-b-[1px] border-l-[1px] border-r-[1px]'>
          <div className='flex flex-col gap-2'>
            <MotionImage
              initial={{ rotate: 0, opacity: 0 }}
              whileInView={{ rotate: 360, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 2,
              }}
              src={RIBlog}
              alt='image'
              className='mb-4'
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              <CustomHeader type='h3'>Research Insights Blogs</CustomHeader>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
            >
              <CustomText>
                Dive deep into future technology concepts with our research
                section.
              </CustomText>
            </motion.div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] p-[20px] xl:p-[80px] border-b-[1px] border-r-[1px]'>
          {researchCardDetails.map((card, key) => (
            <MotionCard
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
              transition={{
                delay: 0.5 + key * 0.2,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 2,
              }}
              className='bg-[#1A1A1A]'
              key={key}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-[#98989A]'>{card.body}</CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
