'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Heart, Eye, Send, ArrowDown, ArrowUp } from 'lucide-react'
import CustomButton from '@/components/utilities/CustomButton'
import CustomText from '@/components/utilities/CustomText'
import { motion } from 'motion/react'
import CustomHeader from '@/components/utilities/CustomHeader'

const BlogDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className='mx-auto px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px]'>
      {/* Blog Content & Sidebar */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
        {/* Main Blog Content */}
        <div className='lg:col-span-2 space-y-6'>
          <Card className='p-6 bg-neutral-900'>
            <CustomHeader type='h4' className='font-semibold'>
              Introduction
            </CustomHeader>
            <CustomText>
              Artificial Intelligence (AI) has emerged as a transformative force
              in the healthcare industry, reshaping patient care, diagnostics,
              and research. In this blog post, we explore the profound impact of
              AI in healthcare, from revolutionizing diagnostic accuracy to
              enhancing patient outcomes.
            </CustomText>
          </Card>

          <Card className='p-6 bg-neutral-900'>
            <CustomHeader type='h4' className='!font-semibold'>
              Artificial Intelligence (AI)
            </CustomHeader>
            <CustomText className=' mt-2'>
              Artificial Intelligence (AI) has permeated virtually every aspect
              of our lives, and healthcare is no exception. The integration of
              AI in healthcare is ushering in a new era of medical practice,
              where machines complement healthcare professionals, ultimately
              improving patient outcomes.
            </CustomText>

            <CustomHeader type='h4' className='font-semibold mt-6'>
              Predictive Analytics and Disease Prevention
            </CustomHeader>
            <CustomText className='mt-2'>
              One of the most prominent applications of AI in healthcare is
              diagnostic imaging. AI algorithms have demonstrated remarkable
              proficiency in interpreting medical images such as X-rays, MRIs,
              and CT scans.
            </CustomText>
            <CustomText className=' mt-2'>
              AI-based systems are particularly valuable in early disease
              detection. For instance, AI can aid radiologists in detecting
              minute irregularities in mammograms or identifying subtle
              anomalies in chest X-rays, which may be indicative of
              life-threatening conditions such as lung cancer or tuberculosis.
            </CustomText>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className={`overflow-hidden mt-4 space-y-4`}
            >
              <CustomText>
                In addition to diagnostics, AI plays a critical role in disease
                prevention through predictive analytics. By analyzing vast
                datasets of patient histories, AI models can recognize patterns
                that might indicate an increased risk of developing chronic
                illnesses such as diabetes, cardiovascular diseases, and
                neurodegenerative disorders.
              </CustomText>
              <CustomText>
                AI-driven predictive models are revolutionizing population
                health management. Governments and healthcare institutions use
                these models to identify trends in disease outbreaks, optimize
                resource allocation, and develop targeted public health
                policies.
              </CustomText>
              <CustomText>
                AI-driven wearables and health-monitoring apps empower
                individuals to take charge of their well-being. These devices
                continuously collect physiological data, such as heart rate,
                blood oxygen levels, and sleep patterns, providing real-time
                insights into one's health.
              </CustomText>
            </motion.div>

            <CustomButton
              buttonText={isExpanded ? 'Read Less' : 'Read Full Blog'}
              className='mt-3 flex items-center gap-2'
              onClick={() => setIsExpanded(!isExpanded)}
              buttonIcon={
                isExpanded ? (
                  <ArrowUp color='#FFD11A' />
                ) : (
                  <ArrowDown color='#FFD11A' />
                )
              }
            />
          </Card>
        </div>

        {/* Sidebar Section */}
        <aside className='space-y-6'>
          {/* Blog Stats */}
          <Card className='p-4 bg-neutral-900 flex justify-between items-center'>
            <div className='flex gap-4'>
              <div className='flex items-center gap-1'>
                <Heart className='w-5 h-5 text-red-500' />
                <span>24.5k</span>
              </div>
              <div className='flex items-center gap-1'>
                <Eye className='w-5 h-5 text-blue-500' />
                <span>50k</span>
              </div>
              <div className='flex items-center gap-1'>
                <Send className='w-5 h-5 text-green-500' />
                <span>206</span>
              </div>
            </div>
          </Card>

          {/* Blog Metadata */}
          <Card className='p-4 bg-neutral-900 space-y-2'>
            <p className='flex gap-1'>
              <CustomText>Publication Date:</CustomText>{' '}
              <strong>October 15, 2024</strong>
            </p>
            <p className='flex gap-1'>
              <CustomText>Category:</CustomText> <strong>Healthcare</strong>
            </p>
            <p className='flex gap-1'>
              <CustomText>Reading Time:</CustomText> <strong>10 Min</strong>
            </p>
            <p className='flex gap-1'>
              <CustomText>Author:</CustomText> <strong>Dr. Emily Walker</strong>
            </p>
          </Card>

          {/* Table of Contents */}
          <Card className='p-4 bg-neutral-900'>
            <h3 className='text-lg font-semibold'>Table of Contents</h3>
            <ul className='mt-2 space-y-2 text-neutral-400'>
              <li>• Introduction</li>
              <li>• AI in Diagnostic Imaging</li>
              <li>• Predictive Analytics and Disease Prevention</li>
              <li>• Personalized Treatment Plans</li>
              <li>• Drug Discovery and Research</li>
              <li>• AI in Telemedicine</li>
              <li>• Ethical Considerations</li>
              <li>• The Future of AI in Healthcare</li>
              <li>• Conclusion</li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  )
}

export default BlogDetails
