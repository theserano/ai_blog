'use client'
import CustomHeader from '@/components/utilities/CustomHeader'
import CustomText from '@/components/utilities/CustomText'
import React from 'react'
import PodcastList from './PodcastList'
import aiRev from '@/public/assets/ai_rev.svg'
import aiConv from '@/public/assets/ai_conv.svg'
import SectionHeader from '@/components/utilities/SectionHeader'
import LatestPodcasts from './LatestPodcasts'
import { motion  } from 'motion/react'

const podcasts = [
  {
    host: 'Dr. Sarah Mitchell',
    title: 'AI Revolution',
    description:
      'Delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies.',
    episodes: 50,
    episodeLength: 30,
    frequency: 'Weekly',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A', // YouTube embed URL
    thumbnailUrl: aiRev.src,
  },
  {
    host: 'Mark Anderson',
    title: 'AI Conversations',
    description:
      'Engage in thought-provoking conversations with leading experts.',
    episodes: 40,
    episodeLength: 40,
    frequency: 'Monthly',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // YouTube embed URL
    thumbnailUrl: aiConv.src,
  },
]

const latestPodcasts = [
  {
    title: 'AI in Healthcare',
    host: 'Dr. Lisa Adams',
    description:
      'Discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.',
    episodes: 7,
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A', // Real YouTube video (Lofi music stream)
    thumbnailUrl:
      'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Real image from Pexels
  },
  {
    title: 'AI Ethics',
    host: 'Dr. Michael Turner',
    description:
      'Explore the ethical dilemmas and considerations surrounding AI.',
    episodes: 7,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Real YouTube video (Rick Astley - Never Gonna Give You Up)
    thumbnailUrl:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Real image from Pexels
  },
  {
    title: 'Machine Learning Explained',
    host: 'Sarah Davis',
    description:
      'Dive into the intricacies of machine learning with AI expert Sarah Davis.',
    episodes: 7,
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk', // Real YouTube video (3Blue1Brown - Neural Networks)
    thumbnailUrl:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Real image from Pexels
  },
  {
    title: 'AI and the Future of Work',
    host: 'Dr. Olivia White',
    description: 'Discusses the evolving role of AI in the workplace.',
    episodes: 7,
    videoUrl: 'https://www.youtube.com/embed/RzkD_rTEBYs', // Real YouTube video (AI and the Future of Work)
    thumbnailUrl:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Real image from Pexels
  },
  {
    title: 'AI in Education',
    host: 'Emily Turner',
    description: 'Explore how AI is transforming the learning experience.',
    episodes: 7,
    videoUrl: 'https://www.youtube.com/embed/BW2iZq8w5R0', // Real YouTube video (AI in Education)
    thumbnailUrl:
      'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Real image from Pexels
  },
  {
    title: 'AI in Entertainment',
    host: 'David Smith',
    description: 'Explore the influence of AI in the entertainment industry.',
    episodes: 7,
    videoUrl: 'https://www.youtube.com/embed/8d4RtvMQp10', // Real YouTube video (AI in Entertainment)
    thumbnailUrl:
      'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Real image from Pexels
  },
]
const page = () => {
  return (
    <section>
      <article className='flex flex-col gap-0 md:gap-[20px] px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] md:py-[80px] 2xl:py-[120px] border-b'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
        >
          <CustomHeader type='h1' className='hidden lg:block'>
            Unlock the World of Artificial Intelligence{' '}
          </CustomHeader>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.34, 1.56, 0.64, 1],
            duration: 1,
          }}
        >
          <CustomHeader type='h1' className='block lg:hidden'>
            Unlock the World of Artificial Intelligence through podcasts
          </CustomHeader>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[60px] xl:gap-[80px] md:items-center justify-start'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            <CustomHeader
              type='h1'
              className='whitespace-nowrap hidden lg:block'
            >
              through Podcasts
            </CustomHeader>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
          >
            <CustomText>
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you&apos;re an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </CustomText>
          </motion.div>
        </div>
      </article>
      <PodcastList podcasts={podcasts} />
      <SectionHeader
        badgeText='Stay Informed with Fresh Content'
        headerText='Latest Podcast Episodes'
        showButton={false}
      />
      <LatestPodcasts podcasts={latestPodcasts} />
    </section>
  )
}

export default page
