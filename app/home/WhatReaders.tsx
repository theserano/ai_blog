'use client'
import SectionHeader from '@/components/utilities/SectionHeader'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { FaStar } from 'react-icons/fa'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

// Testimonial Data
const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'San Francisco, USA',
    feedback:
      'The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.',
  },
  {
    name: 'Raj Patel',
    location: 'Mumbai, India',
    feedback:
      'The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.',
  },
  {
    name: 'Emily Adams',
    location: 'London, UK',
    feedback:
      'The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.',
  },
  {
    name: 'Alan Jackson',
    location: 'Houston, USA',
    feedback:
      'The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.',
  },
  {
    name: 'Jessica Miller',
    location: 'Boston, USA',
    feedback:
      'The research papers on genomic breakthroughs have been a goldmine of information. They’ve shaped the direction of my research in genomics.',
  },
  {
    name: 'Diego Lopez',
    location: 'Barcelona, Spain',
    feedback:
      'The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.',
  },
]

const WhatReaders = () => {
  const MotionCard = motion(Card);
  const router = useRouter();
  return (
    <section>
      <SectionHeader
        badgeText='What Our Readers Say'
        headerText='Real Words from Real Readers'
        buttonText='View All Testimonials'
        buttonClick={() => router.push('/news')}
        showButton
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
        {testimonials.map((testimonial, index) => (
          <MotionCard
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.2,
              ease: [0.34, 1.56, 0.64, 1],
              duration: 1,
            }}
            key={index}
            className='bg-[#121212] border p-6'
          >
            <CardContent className='flex flex-col items-center text-center gap-4'>
              {/* Avatar */}
              <Avatar className='w-16 h-16'>
                <AvatarImage
                  src={`https://randomuser.me/api/portraits/${
                    index % 2 === 0 ? 'women' : 'men'
                  }/${index + 6}.jpg`}
                  alt={testimonial.name}
                />
              </Avatar>

              {/* Name & Location */}
              <div>
                <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
                <p className='text-gray-400 text-sm'>{testimonial.location}</p>
              </div>

              {/* Stars */}
              <div className='flex gap-1'>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className='text-yellow-500' />
                  ))}
              </div>

              {/* Feedback */}
              <p className='text-gray-300 text-sm bg-[#1a1a1a] p-4 rounded-[13px]'>
                {testimonial.feedback}
              </p>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}

export default WhatReaders
