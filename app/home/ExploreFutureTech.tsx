'use client'
import BlogListing from '@/components/utilities/BlogListing'
import SectionHeader from '@/components/utilities/SectionHeader'
import React from 'react'
import { blogCategories } from './data'
import { useRouter } from 'next/navigation'

type Props = {}

const ExploreFutureTech = ({}: Props) => {
  const router = useRouter();
  return (
    <section>
      <SectionHeader
        badgeText='A Knowledge Treasure Trove'
        headerText="Explore FutureTech's In-Depth Blog Posts"
        buttonText='View All Blogs'
        buttonClick={() => router.push('/blog')}
        showButton
      />
      <BlogListing data={blogCategories} />
    </section>
  )
}

export default ExploreFutureTech
