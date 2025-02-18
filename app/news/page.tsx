import React from 'react'
import Hero from './Hero'
import NewsHub from './NewsHub'
import FeaturedVideos from './FeaturedVideos'

type Props = {}

const NewsPage = ({}: Props) => {
  return (
    <div>
      <Hero />
      <NewsHub />
      <FeaturedVideos />
    </div>
  )
}

export default NewsPage

