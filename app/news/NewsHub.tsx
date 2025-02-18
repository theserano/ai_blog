import BlogListing from '@/components/utilities/BlogListing'
import SectionHeader from '@/components/utilities/SectionHeader'
import React from 'react'
import { blogCategories } from '../home/data'

type Props = {}

const NewsHub = ({}: Props) => {
  return (
    <section>
      <SectionHeader
        badgeText='Welcome to Our News Hub'
        headerText='Discover the World of Headlines'
        buttonText='View All News'
        showButton
      />
      <BlogListing data={blogCategories} />
    </section>
  )
}

export default NewsHub
