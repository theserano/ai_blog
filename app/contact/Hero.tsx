import ArrowBtn from '@/components/utilities/ArrowBtn'
import CustomButton from '@/components/utilities/CustomButton'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import React from 'react'
import { FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section>
      <article className='border-t lg:border-b px-[20px] xl:px-[80px] 2xl:px-[162px]'>
        <div className='grid grid-cols-1w md:grid-cols-2 lg:grid-cols-4'>
          <div className='py-[50px] xl:py-[80px] md:pl-[20px] lg:pl-0 md:pr-[20px] xl:pr-[50px] border-b lg:border-b-0 md:border-r'>
            <CustomHeader className='mb-[30px]' type='h5'>
              General Inquires
            </CustomHeader>
            <ArrowBtn className='mb-2' buttonText='contact@ai-podcasts.com' />
            <ArrowBtn buttonText='+1 (123) 456-7890' />
          </div>
          <div className='py-[50px] xl:py-[80px] md:px-[20px] xl:px-[50px] border-b lg:border-b-0 lg:border-r'>
            <CustomHeader className='mb-[30px]' type='h5'>
              Technical Support
            </CustomHeader>
            <ArrowBtn className='mb-2' buttonText='help@ai-podcasts.com' />
            <ArrowBtn buttonText='+1 (123) 456-7890' />
          </div>
          <div className='py-[50px] xl:py-[80px] md:px-[20px] xl:px-[50px] border-b md:border-b-0 md:border-r'>
            <CustomHeader className='mb-[30px]' type='h5'>
              Our Office
            </CustomHeader>
            <CustomText className='mb-2'>
              Address: 123 AI Tech Avenue, Techville, 54321
            </CustomText>
            <ArrowBtn buttonText='Get Directions' />
          </div>
          <div className='py-[50px] xl:py-[80px] md:pl-[20px] xl:pl-[50px]'>
            <CustomHeader className='mb-[30px]' type='h5'>
              Connect with us
            </CustomHeader>
            <div className='flex gap-2'>
              <CustomButton buttonText='' buttonIcon={<FaTwitter />} />
              <CustomButton buttonText='' buttonIcon={<FaDiscord />} />
              <CustomButton buttonText='' buttonIcon={<FaLinkedin />} />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Hero
