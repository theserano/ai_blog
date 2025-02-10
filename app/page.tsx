import ExploreFutureTech from '@/pages/home/ExploreFutureTech'
import Features from '@/pages/home/Features'
import HomeHero from '@/pages/home/Hero'
import LearnConnect from '@/pages/home/LearnConnect'
import WhatReaders from '@/pages/home/WhatReaders'
import YourGateway from '@/pages/home/YourGateway'

export default function Home() {
  return (
    <div className=''>
      <HomeHero />
      <Features />
      <ExploreFutureTech />
      <YourGateway />
      <WhatReaders />
      <LearnConnect />
    </div>
  )
}
