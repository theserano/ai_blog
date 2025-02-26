'use client'
import BlogListing from '@/components/utilities/BlogListing'
import SectionHeader from '@/components/utilities/SectionHeader'
import React from 'react'
import { blogCategories } from '../home/data'
import { useRouter } from 'next/navigation'

const NewsHub = () => {
  const router = useRouter();
  return (
    <section>
      <SectionHeader
        badgeText='Welcome to Our News Hub'
        headerText='Discover the World of Headlines'
        buttonText='View All News'
        buttonClick={() => router.push('/news')}
        showButton
      />
      <BlogListing data={blogCategories} />
    </section>
  )
}

export default NewsHub
