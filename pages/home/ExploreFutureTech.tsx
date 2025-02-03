import BlogListing from '@/components/utilities/BlogListing'
import SectionHeader from '@/components/utilities/SectionHeader'
import React from 'react'
import { blogCategories } from './data'

type Props = {}

const ExploreFutureTech = ({}: Props) => {
  return (
    <section>
      <SectionHeader
        badgeText='A Knowledge Treasure Trove'
        headerText="Explore FutureTech's In-Depth Blog Posts"
        buttonText='View All Blogs'
        showButton
      />
      <BlogListing data={blogCategories} />
    </section>
  )
}

export default ExploreFutureTech
