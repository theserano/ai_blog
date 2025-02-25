'use client'
import SectionHeader from '@/components/utilities/SectionHeader'
import VideoGrid from '@/components/utilities/VideoGrid'
import React from 'react'
import mars from '@/public/assets/mars.svg'
import blockChain from '@/public/assets/block_chain.svg'
import breaking from '@/public/assets/breaking.svg'
import revol from '@/public/assets/revol.svg'
import { useRouter } from 'next/navigation'

type Props = {}

const videos = [
  {
    id: '1',
    title: 'Mars Exploration: Unveiling Alien Landscapes',
    description:
      'Embark on a journey through the Red Planet’s breathtaking landscapes.',
    thumbnail: mars,
    videoUrl: 'https://www.youtube.com/watch?v=wEWT08KmaU8',
  },
  {
    id: '2',
    title: 'Blockchain Explained: A Revolution in Finance',
    description: 'Delve into blockchain technology and its impact on finance.',
    thumbnail: blockChain,
    videoUrl: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
  },
  {
    id: '3',
    title: 'Breaking the Silence: Mental Health Awareness',
    description: 'An exploration of mental health awareness in workplaces.',
    thumbnail: breaking,
    videoUrl: 'https://www.youtube.com/watch?v=O4v8ntIX9xc',
  },
  {
    id: '4',
    title: 'Revolutionizing Investment Strategies',
    description: 'A look at efforts to conserve biodiversity.',
    thumbnail: revol,
    videoUrl: 'https://www.youtube.com/watch?v=xAjj3hmsz3w',
  },
]


const FeaturedVideos = ({}: Props) => {
  const router = useRouter()
  return (
    <section>
      <SectionHeader
        badgeText='Featured Videos'
        headerText='Visual Insights for the Modern Viewer'
        buttonText='View All'
        buttonClick={() => router.push('/podcasts')}
        showButton
      />
      <VideoGrid videos={videos} />
    </section>
  )
}

export default FeaturedVideos
