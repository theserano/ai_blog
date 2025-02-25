'use client'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import SectionHeader from '@/components/utilities/SectionHeader'
import Image from 'next/image'
import React from 'react'
import Quantum from '@/public/assets/quantum.svg'
import SpaceExp from '@/public/assets/space_Exp.svg'
import spaceExpImage from '@/public/assets/spaceExpImage.svg'
import QuantumImage from '@/public/assets/quantumImage.svg'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import image1 from '@/public/assets/futureTech.svg'
import image2 from '@/public/assets/spe.svg'
import image3 from '@/public/assets/qc.svg'
import { motion } from 'motion/react'

type Props = {}

const books = [
  {
    title: 'FutureTech Trends 2024',
    description:
      'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
    image: image1,
  },
  {
    title: 'Space Exploration Ebook',
    description:
      'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
    image: image2,
  },
  {
    title: 'Quantum Computing Whitepaper',
    description:
      'An in-depth whitepaper exploring the principles, applications.',
    image: image3,
  },
]

const DiveInto = ({}: Props) => {
  const MotionImage = motion(Image)
  const MotionCard = motion(Card)
  return (
    <section>
      <SectionHeader
        badgeText='Dive into the Details'
        headerText={`In-Depth Reports and Analysis`}
        showButton={false}
      />
      <div className=''>
        <article className='grid grid_cols_2_big'>
          <div className='pl-[20px] xl:pl-[80px] 2xl:pl-[162px] pr-[20px] xl:pr-[80px] py-[50px] flex justify-start xl:justify-center items-center border-t-[1px] xl:border-b-[1px] border-l-[1px] border-r-[1px]'>
            <div className='flex flex-col gap-5 sm:gap-[30px] 2xl:gap-[50px]'>
              <MotionImage
                initial={{ rotate: 0, opacity: 0 }}
                whileInView={{ rotate: 360, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
                src={Quantum}
                alt='image'
                className='mb-4'
              />
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
              >
                <CustomHeader type='h3'>
                  Quantum Computing Whitepaper
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
              >
                <CustomText>
                  Provides technical specifications and requirements for
                  implementing quantum computing systems.
                </CustomText>
              </motion.div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] p-[20px] xl:p-[80px] xl:border-t-[1px] border-b-[1px] border-r-[1px]'>
            <MotionImage
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'linear' }}
              src={spaceExpImage}
              alt='ebooks_image'
              className='w-full'
            />
            <div className='flex flex-col md:flex-row gap-4  justify-between items-center'>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='flex flex-col justify-between gap-2 sm:gap-4'
              >
                <CustomHeader type='h4'>
                  Quantum Computing Whitepaper
                </CustomHeader>
                <CustomText>
                  An in-depth whitepaper exploring the principles, applications,
                  and potential impact of quantum computing.
                </CustomText>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
              >
                <ArrowBtn buttonText='Download PDF Now' />
              </motion.div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[20px] flex flex-1 flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Publication Date</CustomText>
                <CustomHeader className='whitespace-nowrap' type='h5'>
                  July 2024
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[20px] flex flex-1 flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Category</CustomText>
                <CustomHeader className='whitespace-nowrap' type='h5'>
                  Quantum Computing
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[20px] flex flex-1 flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Author</CustomText>
                <CustomHeader className='whitespace-nowrap' type='h5'>
                  Dr. Quantum
                </CustomHeader>
              </motion.div>
            </div>
          </div>
        </article>
        <article className='grid grid_cols_2_big'>
          <div className='pl-[20px] xl:pl-[80px] 2xl:pl-[162px] pr-[20px] xl:pr-[80px] py-[50px] flex justify-start xl:justify-center items-center xl:border-b-[1px] border-l-[1px] border-r-[1px]'>
            <div className='flex flex-col gap-5 sm:gap-[30px] 2xl:gap-[50px]'>
              <MotionImage
                initial={{ rotate: 0, opacity: 0 }}
                whileInView={{ rotate: 360, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
                src={SpaceExp}
                alt='image'
                className='mb-4'
              />
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
              >
                <CustomHeader type='h3'>
                  Space Exploration Whitepaper
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
              >
                <CustomText>
                  Explores Mars colonization, asteroid resource potential, and
                  space tourism.
                </CustomText>
              </motion.div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] p-[20px] xl:p-[80px] border-b-[1px] border-r-[1px]'>
            <Image src={QuantumImage} alt='ebooks_image' className='w-full' />
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
                className='flex flex-col justify-between gap-2 sm:gap-8'
              >
                <CustomHeader type='h4'>
                  Space Exploration Whitepaper
                </CustomHeader>
                <CustomText>
                  An in-depth whitepaper covering the latest advancements in
                  space exploration, including Mars missions and asteroid
                  mining.
                </CustomText>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
              >
                <ArrowBtn buttonText='Download PDF Now' />
              </motion.div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[20px] flex flex-1 flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Publication Date</CustomText>
                <CustomHeader className='whitespace-nowrap' type='h5'>
                  September 2023
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[20px] flex flex-1 flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Category</CustomText>
                <CustomHeader className='whitespace-nowrap' type='h5'>
                  Space Exploration
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[20px] flex flex-1 flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Author</CustomText>
                <CustomHeader className='whitespace-nowrap' type='h5'>
                  FutureTech Space Division
                </CustomHeader>
              </motion.div>
            </div>
          </div>
        </article>
      </div>

      {/* grid cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] xl:gap-[80px] px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px]'>
        {books.map((book, index) => (
          <MotionCard
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.2,
              ease: [0.34, 1.56, 0.64, 1],
              duration: 2,
            }}
            key={index}
            className='border-none'
          >
            <Image
              src={book.image}
              alt={book.title}
              className='w-full h-48 object-cover rounded-[12px]'
            />
            <CardContent className='py-4 px-0'>
              <CustomHeader type='h5' className='text-lg font-semibold'>
                {book.title}
              </CustomHeader>
              <CustomText className='mt-2'>{book.description}</CustomText>
              <div className='flex gap-4 mt-4'>
                <Button
                  variant='outline'
                  className='rounded-[6px] w-full transition-all duration-300 px-[14px] md:px-[24px] py-[24px] text-[#98989A]'
                >
                  View Details
                </Button>
                <Button className='rounded-[6px] w-full transition-all duration-300 px-[14px] md:px-[24px] py-[24px] bg-[#141414] text-[#98989A]'>
                  Download PDF Now
                </Button>
              </div>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}

export default DiveInto
