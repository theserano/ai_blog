'use client'
import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import CustomText from '@/components/utilities/CustomText'
import { motion } from 'motion/react'

interface Podcast {
  title: string
  host: string
  description: string
  episodes: number
  videoUrl: string // Video URL (YouTube embed or direct video URL)
  thumbnailUrl: string // Thumbnail image URL
}

const LatestPodcasts: React.FC<{ podcasts: Podcast[] }> = ({ podcasts }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const MotionCard = motion(Card);

  const handleVideoClick = (index: number) => {
    setPlayingIndex(index)
  }

  return (
    <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {podcasts.map((podcast, index) => (
        <MotionCard
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: [0.7, 1, 1], opacity: 1 }}
          transition={{
            delay: 0.5 + index * 0.2,
            ease: [0.34, 1.56, 0.64, 1],
            duration: 2,
          }}
          key={index}
          className='hover:shadow-lg transition-shadow'
        >
          <CardHeader>
            <div className='relative'>
              {/* Show thumbnail if video is not playing */}
              {playingIndex !== index && (
                <div
                  className='w-full h-48 bg-cover bg-center cursor-pointer rounded-lg'
                  style={{ backgroundImage: `url(${podcast.thumbnailUrl})` }}
                  onClick={() => handleVideoClick(index)}
                >
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-12 w-12 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                </div>
              )}
              {/* Show YouTube iframe when video is playing */}
              {playingIndex === index && (
                <iframe
                  src={`${podcast.videoUrl}?autoplay=1`} // Autoplay when clicked
                  className='w-full h-48 rounded-lg'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <CardTitle className='text-xl font-bold mt-4'>
              {podcast.title}
            </CardTitle>
            <CardDescription>
              <CustomText>{podcast.host}</CustomText>
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <CustomText>{podcast.description}</CustomText>
            <div className='flex items-center space-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
              <CustomText>
                <span className='font-semibold'>Episodes:</span>{' '}
                {podcast.episodes}
              </CustomText>
            </div>
          </CardContent>
        </MotionCard>
      ))}
    </div>
  )
}

export default LatestPodcasts
