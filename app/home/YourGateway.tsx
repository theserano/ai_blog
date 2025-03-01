'use client'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import SectionHeader from '@/components/utilities/SectionHeader'
import Image from 'next/image'
import React from 'react'
import Ebooks from '@/public/assets/ebooks.svg'
import Whitepapers from '@/public/assets/whitepapers.svg'
import WhitepapersImage from '@/public/assets/whitepapers_image.svg'
import EbooksImage from '@/public/assets/ebooks_image.svg'
import users from '@/public/users.png'
import { FaEye } from 'react-icons/fa6'
import CustomButton from '@/components/utilities/CustomButton'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

const YourGateway = () => {
  const MotionImage = motion(Image)
  const router = useRouter()
  return (
    <section>
      <SectionHeader
        badgeText='Your Gateway to In-Depth Information'
        buttonText='View All Resources'
        headerText={`Unlock Valuable Knowledge with FutureTech's Resources`}
        buttonClick={() => router.push('/resources')}
        showButton
      />
      <div>
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
                src={Ebooks}
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
                <CustomHeader type='h4'>Ebooks</CustomHeader>
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
                  Explore our collection of ebooks covering a wide spectrum of
                  future technology topics.
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
                <ArrowBtn
                  buttonText='Download Ebooks Now'
                  onClick={() => router.push('/resources')}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[30px] rounded-[10px] border flex items-center justify-between gap-8 bg-[#1A1A1A]'
              >
                <div className='flex flex-col gap-2'>
                  <CustomText>Downloaded By</CustomText>
                  <CustomHeader type='h4' className='whitespace-nowrap'>
                    10k + Users
                  </CustomHeader>
                </div>
                <div className='bg-[#141414] p-[10px] rounded-[9px]'>
                  <Image
                    src={users}
                    alt='people'
                    className='!max-w-[143px] !max-h-[50px]'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] p-[20px] xl:p-[80px] xl:border-t-[1px] border-b-[1px] border-r-[1px]'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-8'>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
              >
                <CustomHeader className='whitespace-nowrap' type='h4'>
                  Variety of Topics
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
              >
                <CustomText>
                  Topics include AI in education (25%), renewable energy (20%),
                  healthcare (15%), space exploration (25%), and biotechnology
                  (15%).
                </CustomText>
              </motion.div>
            </div>
            <MotionImage
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'linear' }}
              src={EbooksImage}
              alt='ebooks_image'
              className='w-full'
            />
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8'>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[30px] flex flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Total Ebooks</CustomText>
                <CustomHeader type='h4'>Over 100 ebooks</CustomHeader>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='flex justify-between items-center gap-8 flex-1 border bg-[#1A1A1A] rounded-[13px] p-[30px]'
              >
                <div className='flex flex-col gap-2'>
                  <CustomText className='whitespace-nowrap'>
                    Download formats
                  </CustomText>
                  <CustomHeader type='h4'>PDF format for access.</CustomHeader>
                </div>
                <CustomButton
                  buttonText='Preview'
                  buttonIcon={<FaEye color='#FFD11A' />}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
              transition={{
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
              className='flex flex-col p-[30px] bg-[#1A1A1A] rounded-[13px]'
            >
              <CustomText>Average Author Expertise</CustomText>
              <CustomHeader type='h4'>
                Ebooks are authored by renowned experts with an average of 15
                years of experience
              </CustomHeader>
            </motion.div>
          </div>
        </article>

        {/* next article section */}
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
                src={Whitepapers}
                alt='image'
                className='mb-4'
              />
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
              >
                <CustomHeader type='h4'>Whitepapers</CustomHeader>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
              >
                <CustomText>
                  Dive into comprehensive reports and analyses with our
                  collection of whitepapers.
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
                <ArrowBtn
                  buttonText='Download Whitepapers Now'
                  onClick={() => router.push('/resources')}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[30px] rounded-[10px] border flex items-center justify-between gap-8 bg-[#1A1A1A]'
              >
                <div className='flex flex-col gap-2'>
                  <CustomText>Downloaded By</CustomText>
                  <CustomHeader type='h4' className='whitespace-nowrap'>
                    15k + Users
                  </CustomHeader>
                </div>
                <div className='bg-[#141414] p-[10px] rounded-[9px]'>
                  <Image
                    src={users}
                    alt='people'
                    className='!max-w-[143px] !max-h-[50px]'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] p-[20px] xl:p-[80px] border-b-[1px] border-r-[1px]'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-8'>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
              >
                <CustomHeader className='whitespace-nowrap' type='h4'>
                  Topics Coverage
                </CustomHeader>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
              >
                <CustomText>
                  Whitepapers cover quantum computing (20%), AI ethics (15%),
                  space mining prospects (20%), AI in healthcare (15%), and
                  renewable energy strategies (30%).
                </CustomText>
              </motion.div>
            </div>
            <MotionImage
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'linear' }}
              src={WhitepapersImage}
              alt='ebooks_image'
              className='w-full'
            />
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8'>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='p-[30px] flex flex-col gap-2 border bg-[#1A1A1A] rounded-[13px]'
              >
                <CustomText>Total Whitepapers</CustomText>
                <CustomHeader type='h4'>Over 50 whitepapers</CustomHeader>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 1,
                }}
                className='flex justify-between items-center gap-8 flex-1 border bg-[#1A1A1A] rounded-[13px] p-[30px]'
              >
                <div className='flex flex-col gap-2'>
                  <CustomText className='whitespace-nowrap'>
                    Download formats
                  </CustomText>
                  <CustomHeader type='h4'>PDF format for access.</CustomHeader>
                </div>
                <CustomButton
                  buttonText='Preview'
                  buttonIcon={<FaEye color='#FFD11A' />}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
              transition={{
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
              }}
              className='flex flex-col p-[30px] bg-[#1A1A1A] rounded-[13px]'
            >
              <CustomText>Average Author Expertise</CustomText>
              <CustomHeader type='h4'>
                Whitepapers are authored by subject matter experts with an
                average of 20 years of experience.
              </CustomHeader>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default YourGateway
