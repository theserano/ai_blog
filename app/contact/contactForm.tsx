import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import image1 from '@/public/assets/ft_blog.svg'
import image2 from '@/public/assets/ri_blog.svg'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomButton from '@/components/utilities/CustomButton'
import CustomText from '@/components/utilities/CustomText'
import ArrowBtn from '@/components/utilities/ArrowBtn'

const ContactSection = () => {
  return (
    <div className=''>
      <div className='grid grid_cols_2_big gap-12 px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
        {/* Left Section */}
        <div className='flex flex-col justify-center'>
          <div>
            <Image src={image1} alt='yes' className='mb-8' />
            <CustomHeader type='h1'>Get in Touch with AI Podcasts</CustomHeader>
          </div>
        </div>

        {/* Right Section */}
        <Card className='bg-transparent border-none'>
          <CardContent className='space-y-8 p-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Input
                placeholder='Enter First Name'
                className='rounded-[5px] text-[14px] md:text-[16px] bg-[#1A1A1A] p-[20px] border-[#262626] outline-[#262626]'
              />
              <Input
                placeholder='Enter Last Name'
                className='rounded-[5px] text-[14px] md:text-[16px] bg-[#1A1A1A] p-[20px] border-[#262626] outline-[#262626]'
              />
            </div>
            <Input
              placeholder='Enter your Email'
              className='rounded-[5px] text-[14px] md:text-[16px] bg-[#1A1A1A] p-[20px] border-[#262626] outline-[#262626]'
            />
            <Input
              placeholder='Enter Phone Number'
              className='rounded-[5px] text-[14px] md:text-[16px] bg-[#1A1A1A] p-[20px] border-[#262626] outline-[#262626]'
            />
            <Textarea
              placeholder='Enter your Message'
              className='rounded-[5px] text-[14px] md:text-[16px] bg-[#1A1A1A] p-[20px] border-[#262626] outline-[#262626]'
              rows={7}
            />
            <div className='flex flex-col md:flex-row gap-4 justify-between items-start md:items-center'>
              <div className='flex items-center gap-2'>
                <Checkbox className='border-gray-700' />
                <p className='text-sm'>
                  I agree with Terms of Use and Privacy Policy
                </p>
              </div>
              <CustomButton
                buttonText='Send'
                className='!bg-[#FFD11A] !border-none !text-[#141414]'
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className='grid grid_cols_2_big gap-12 mt-4 px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
        {/* Left Section */}
        <div>
          <Image src={image2} alt='yes' className='mb-8' />
          <CustomHeader type='h3'>Asked question</CustomHeader>
          <CustomText className='mt-4'>
            If the question is not available on our FAQ section, feel free to
            contact us personally. We will resolve your respective doubts.
          </CustomText>
          <ArrowBtn buttonText='Ask Question' className='mt-6' />
        </div>

        {/* Right Section - FAQ */}
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>What is AI?</AccordionTrigger>
            <AccordionContent>
              AI stands for Artificial Intelligence, which refers to the
              simulation of human intelligence in machines. It enables them to
              perform tasks like problem-solving, learning, and decision-making.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              How can I listen to your podcasts?
            </AccordionTrigger>
            <AccordionContent>
              Our podcasts are available on all major streaming platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Are your podcasts free to listen to?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our podcasts are completely free to listen to.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Can I download episodes to listen offline?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can download episodes for offline listening.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>
              How often do you release new episodes?
            </AccordionTrigger>
            <AccordionContent>We release new episodes weekly.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default ContactSection
