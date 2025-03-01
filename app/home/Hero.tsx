'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import users from '@/public/users.png'
import shineImage from '@/public/assets/shine-dark-hero.svg'
import arrowBtn from '@/public/assets/arrow-side-btn.svg'
import latest from '@/public/assets/latest-news.svg'
import expert from '@/public/assets/expert-contributions.svg'
import global from '@/public/assets/global-read.svg'
import Image from 'next/image'
import CustomHeader from '@/components/utilities/CustomHeader'
import ArrowBtn from '@/components/utilities/ArrowBtn'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { Typewriter } from 'react-simple-typewriter'

const HomeHero = () => {
  const MotionImage = motion(Image)
  const router = useRouter()
  return (
    <section>
      <div className='grid grid_cols_2'>
        <div className='flex flex-col gap-[40px] lg:gap-[100px] pt-[40px] lg:pt-[150px] border-r-[1px]'>
          <article className='flex flex-col gap-4 pl-[20px] xl:pl-[80px] 2xl:pl-[162px] pr-[20px] lg:pr-[50px]'>
            <p className='text-[#666666] text-[16px] xl:text-[22px] 2xl:text-[30px] font-medium leading--[120%] mb-0 xl:mb-4 min-h-8'>
              {/* <TypeEffect
                text='Your Journey to Tomorrow Begins Here'
                delay={8000}
              /> */}
              <Typewriter
                words={['Your Journey to Tomorrow Begins Here']}
                loop={0}
                cursor
                cursorStyle={`|`}
                typeSpeed={50}
                delaySpeed={8000}
                deleteSpeed={50}
              />
            </p>
            <CustomHeader type='h1' className='overflow-x-hidden'>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                Explore the Frontiers of
                <br /> Artificial Intelligence
              </motion.p>
            </CustomHeader>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className='text-[#7E7E81] text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[150%]'
            >
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </motion.p>
          </article>
          <div className='flex'>
            <span className='flex flex-col py-[20px] md:py-[50px] w-full border-[1px] border-b-[1px] lg:border-b-0 pl-[20px] xl:pl-[80px] 2xl:pl-[162px]'>
              <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
                300
                <FaPlus color='FFD11A' fontSize={`20px`} />
              </h1>
              <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
                Resources Available
              </p>
            </span>
            <span className='flex flex-col py-[20px] md:py-[50px] w-full border-[1px] border-b-[1px] lg:border-b-0 pl-[20px] xl:pl-[80px]'>
              <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
                12K
                <FaPlus color='FFD11A' fontSize={`20px`} />
              </h1>
              <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
                Total Downloads
              </p>
            </span>
            <span className='flex flex-col py-[20px] md:py-[50px] w-full border-t-[1px] border-b-[1px] lg:border-b-0 pl-[20px] xl:pl-[80px]'>
              <h1 className='text-[24px] md:text-[30px] 2xl:text-[40px] font-semibold flex items-center'>
                10k
                <FaPlus color='FFD11A' fontSize={`20px`} />
              </h1>
              <p className='text-[#7E7E81] text-[14px] 2xl:text-[18px] leading-[150%]'>
                Active Users
              </p>
            </span>
          </div>
        </div>
        <div className='flex justify-end flex-col pt-[100px] p-[50px] pb-[60px] xl:p-[80px] relative'>
          <MotionImage
            src={shineImage}
            alt='shine'
            className='!absolute top-0 left-0 -z-10 w-[250px] lg:w-fit'
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: [0.1, 0.5, 0.1, 0.5, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
          <article className='flex flex-col gap-4'>
            <MotionImage
              src={users}
              alt='users'
              className='max-w-[134px] lg:max-w-[174px] xl:max-w-[218px] h-fit'
              initial={{ scale: 1, opacity: 0 }}
              whileInView={{ scale: [1, 1.1, 1], opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
            <motion.h3
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className='font-medium text-[16px] xl:text-[20px] 2xl:text-[24px] leading-[150%]'
            >
              Explore 1000+ resources
            </motion.h3>
            <p className='text-[#7E7E81] text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[150%]'>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <ArrowBtn
              buttonText='Explore Resource'
              className='bg-transparent'
              onClick={() => router.push('/resources')}
            />
          </article>
        </div>
      </div>
      <article className='flex flex-col sm:flex-row'>
        <div className='flex flex-row items-center justify-between w-full border-[1px] py-[50px] pr-[20px] pl-[20px] xl:pr-[80px] xl:pl-[80px] 2xl:pl-[162px]'>
          <div className='flex flex-col gap-4'>
            <Image src={latest} alt='image' />
            <span className='flex flex-col gap-2'>
              <h4 className='font-medium text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[150%]'>
                Latest News Updates
              </h4>
              <p className='text-[12px] xl:text-[16px] 2xl:text-[18px] text-[#7E7E81]'>
                Stay Current
              </p>
            </span>
            <p className='text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#98989A]'>
              Over 1,000 articles published monthly
            </p>
          </div>
          <MotionImage
            src={arrowBtn}
            alt='arrow'
            className='w-[44px] h-[44px] xl:w-[52px] xl:h-[52px]'
            initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          />
        </div>
        <div className='flex flex-row items-center justify-between w-full border-[1px] py-[50px] px-[20px] xl:px-[80px]'>
          <div className='flex flex-col gap-4'>
            <Image src={expert} alt='image' />
            <span className='flex flex-col gap-2'>
              <h4 className='font-medium text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[150%]'>
                Expert Contributors
              </h4>
              <p className='text-[12px] xl:text-[16px] 2xl:text-[18px] text-[#7E7E81]'>
                Trusted Insights
              </p>
            </span>
            <p className='text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#98989A]'>
              50+ renowned AI experts on our team
            </p>
          </div>
          <MotionImage
            src={arrowBtn}
            alt='arrow'
            className='w-[44px] h-[44px] xl:w-[52px] xl:h-[52px]'
            initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          />
        </div>
        <div className='flex flex-row items-center justify-between w-full border-[1px] py-[50px] px-[20px] xl:px-[80px]'>
          <div className='flex flex-col gap-4'>
            <Image src={global} alt='image' />
            <span className='flex flex-col gap-2'>
              <h4 className='font-medium text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[150%]'>
                Global Readership
              </h4>
              <p className='text-[12px] xl:text-[16px] 2xl:text-[18px] text-[#7E7E81]'>
                Worldwide Impact
              </p>
            </span>
            <p className='text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#98989A]'>
              2 million monthly readers
            </p>
          </div>
          <MotionImage
            src={arrowBtn}
            alt='arrow'
            className='w-[44px] h-[44px] xl:w-[52px] xl:h-[52px]'
            initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          />
        </div>
      </article>
    </section>
  )
}

export default HomeHero
