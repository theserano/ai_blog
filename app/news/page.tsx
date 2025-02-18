import React from 'react'
import Hero from './Hero'
import NewsHub from './NewsHub'
import FeaturedVideos from './FeaturedVideos'
import LearnConnect from '../home/LearnConnect'

type Props = {}

const NewsPage = ({}: Props) => {
  return (
    <div>
      <Hero />
      <NewsHub />
      <FeaturedVideos />
      <LearnConnect />
    </div>
  )
}

export default NewsPage

