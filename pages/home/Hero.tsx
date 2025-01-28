import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import users from '../../public/users.png'
import shineImage from '../../public/assets/shine-dark-hero.svg'
import arrowBtn from '../../public/assets/arrow-side-btn.svg'
import latest from '../../public/assets/latest-news.svg'
import expert from '../../public/assets/expert-contributions.svg'
import global from '../../public/assets/global-read.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { GoArrowUpRight } from 'react-icons/go'

const HomeHero = () => {
  return (
    <section>
      <div className='grid grid_cols_2'>
        <div className='flex flex-col gap-[100px] pt-[150px] border-r-[1px]'>
          <article className='flex flex-col gap-4 pl-[162px] pr-[50px]'>
            <p className='text-[#666666] text-[30px] font-medium leading--[120%] mb-4'>
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className='font-medium text-[70px] text-white leading-[120%]'>
              Explore the Frontiers of<br /> Artificial Intelligence
            </h1>
            <p className='text-[#7E7E81] text-[18px] leading-[150%]'>
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </article>
          <div className='flex'>
            <span className='flex flex-col py-[50px] w-full border-[1px] pl-[162px]'>
              <h1 className='text-[40px] font-semibold flex items-center'>
                300
                <FaPlus color='FFD11A' fontSize={`20px`} />
              </h1>
              <p className='text-[#7E7E81] text-[18px] leading-[150%]'>
                Resources Available
              </p>
            </span>
            <span className='flex flex-col py-[50px] w-full border-[1px] pl-[50px]'>
              <h1 className='text-[40px] font-semibold flex items-center'>
                12K
                <FaPlus color='FFD11A' fontSize={`20px`} />
              </h1>
              <p className='text-[#7E7E81] text-[18px] leading-[150%]'>
                Total Downloads
              </p>
            </span>
            <span className='flex flex-col py-[50px] w-full border-t-[1px] border-b-[1px] pl-[50px]'>
              <h1 className='text-[40px] font-semibold flex items-center'>
                10k
                <FaPlus color='FFD11A' fontSize={`20px`} />
              </h1>
              <p className='text-[#7E7E81] text-[18px] leading-[150%]'>
                Active Users
              </p>
            </span>
          </div>
        </div>
        <div className='flex justify-end flex-col p-[80px] relative'>
          <Image
            src={shineImage}
            alt='shine'
            className='!absolute top-0 left-0 opacity-30 -z-10'
          />
          <article className='flex flex-col gap-4'>
            <Image
              src={users}
              alt='users'
              className='max-w-[218px] max-h-[80px]'
            />
            <h3 className='font-medium text-[24px] leading-[150%]'>
              Explore 1000+ resources
            </h3>
            <p className='text-[#7E7E81] text-[18px] leading-[150%]'>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <Button
              variant={`outline`}
              className='rounded-[6px] w-fit transition-all duration-300 px-[24px] py-[18px]'
            >
              Explore Resources <GoArrowUpRight color='#FFD11A' />
            </Button>
          </article>
        </div>
      </div>
      <article className='flex'>
        <div className='flex flex-row items-center w-full border-[1px] py-[50px] pr-[80px] pl-[162px]'>
          <div className='flex flex-col gap-4'>
            <Image src={latest} alt='image' />
            <span className='flex flex-col gap-2'>
              <h4 className='font-medium text-[20px] leading-[150%]'>
                Latest News Updates
              </h4>
              <p className='text-[18px] text-[#7E7E81]'>Stay Current</p>
            </span>
            <p className='text-[20px] text-[#98989A]'>
              Over 1,000 articles published monthly
            </p>
          </div>
          <Image src={arrowBtn} alt='arrow' />
        </div>
        <div className='flex flex-row items-center w-full border-[1px] py-[50px] px-[80px]'>
          <div className='flex flex-col gap-4'>
            <Image src={expert} alt='image' />
            <span className='flex flex-col gap-2'>
              <h4 className='font-medium text-[20px] leading-[150%]'>
                Expert Contributors
              </h4>
              <p className='text-[18px] text-[#7E7E81]'>Trusted Insights</p>
            </span>
            <p className='text-[20px] text-[#98989A]'>
              50+ renowned AI experts on our team
            </p>
          </div>
          <Image src={arrowBtn} alt='arrow' />
        </div>
        <div className='flex flex-row items-center w-full border-[1px] py-[50px] px-[80px]'>
          <div className='flex flex-col gap-4'>
            <Image src={global} alt='image' />
            <span className='flex flex-col gap-2'>
              <h4 className='font-medium text-[20px] leading-[150%]'>
                Global Readership
              </h4>
              <p className='text-[18px] text-[#7E7E81]'>Worldwide Impact</p>
            </span>
            <p className='text-[20px] text-[#98989A]'>
              2 million monthly readers
            </p>
          </div>
          <Image src={arrowBtn} alt='arrow' />
        </div>
      </article>
    </section>
  )
}

export default HomeHero
