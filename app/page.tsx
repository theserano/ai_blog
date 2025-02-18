import ExploreFutureTech from '@/app/home/ExploreFutureTech'
import Features from '@/app/home/Features'
import HomeHero from '@/app/home/Hero'
import WhatReaders from '@/app/home/WhatReaders'
import YourGateway from '@/app/home/YourGateway'

export default function Home() {
  return (
    <div className=''>
      <HomeHero />
      <Features />
      <ExploreFutureTech />
      <YourGateway />
      <WhatReaders />
    </div>
  )
}
