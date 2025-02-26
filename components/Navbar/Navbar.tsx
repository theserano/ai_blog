'use client'
import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { CgMenuRight } from 'react-icons/cg'
import Logo from '../../public/logo.svg'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import CustomHeader from '../utilities/CustomHeader'

const navLinks: { name: string; link: string }[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'News',
    link: '/news',
  },
  {
    name: 'Podcasts',
    link: '/podcasts',
  },
  {
    name: 'Resources',
    link: '/resources',
  },
]

const Navbar = () => {
  const router = useRouter()
  const path = usePathname()
  const MotionImage = motion(Image)

  return (
    <section>
      {/* Top Newsletter Bar */}
      <p
        className='flex items-center justify-center text-[12px] md:text-[14px] lg:text-[16px] text-[#98989A] px-[24px] py-[12px] h-12'
      >
        Subscribe to our Newsletter For New & latest Blogs and Resources
        <GoArrowUpRight color='#FFD11A' />
      </p>

      {/* Navbar */}
      <div className='flex items-center justify-between px-[20px] lg:px-[80px] py-[20px] bg-[#1A1A1A] border-[#7E7E81]'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <MotionImage
            src={Logo}
            alt='logo'
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{
              duration: 2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          />
          <CustomHeader type='h5' className=''>
            FutureTech
          </CustomHeader>
        </div>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        <div className='hidden lg:flex items-center gap-8'>
          {navLinks.map((item, key) => (
            <Button
              key={key}
              variant='ghost'
              className={`rounded-[6px] hover:!bg-[#141414] !border-[1px] !border-[#1A1A1A] hover:!border-[#333333] hover:!text-white ${
                path === item.link ? '!bg-[#141414] !border-[#333333]' : ''
              }`}
              style={{ color: '#7E7E81' }}
              onClick={() => router.push(item.link)}
            >
              {item.name}
            </Button>
          ))}
        </div>

        {/* Contact Button (Hidden on Small Screens) */}
        <Button
          onClick={() => router.push('/contact')}
          className='hidden lg:block text-[#141414] bg-[#FFD11A] rounded-[6px] transition-all duration-300'
        >
          Contact Us
        </Button>

        {/* Mobile Menu Button (Shown on Small Screens) */}
        <Drawer>
          <DrawerTrigger className='lg:hidden'>
            <CgMenuRight fontSize='24px' />
          </DrawerTrigger>
          <DrawerContent className='bg-[#1A1A1A] p-4'>
            <DrawerHeader>
              <DrawerTitle className='text-white text-center'>Menu</DrawerTitle>
            </DrawerHeader>

            {/* Drawer Navigation Links */}
            <div className='flex flex-col gap-4'>
              {navLinks.map((item, key) => (
                <Button
                  key={key}
                  variant='ghost'
                  className={`rounded-[6px] hover:!bg-[#141414] !border-[1px] !border-[#1A1A1A] hover:!border-[#333333] hover:!text-white ${
                    path === item.link ? '!bg-[#141414] !border-[#333333]' : ''
                  }`}
                  style={{ color: '#7E7E81' }}
                  onClick={() => router.push(item.link)}
                >
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Contact Button inside Drawer */}
            <Button
              onClick={() => router.push('/contact')}
              className='w-full mt-4 text-[#141414] bg-[#FFD11A] rounded-[6px] transition-all duration-300'
            >
              Contact Us
            </Button>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  )
}

export default Navbar
