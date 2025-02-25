'use client'
import React from 'react'
import Hero from './Hero'
import ContactSection from './contactForm'

type Props = {}

const page = ({}: Props) => {
  return (
    <div>
      <Hero />
      <ContactSection />
    </div>
  )
}

export default page
