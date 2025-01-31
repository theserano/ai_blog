import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { CgMenuRight } from 'react-icons/cg'
import Logo from '../../public/logo.svg'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

type Props = {}

const Navbar = ({}: Props) => {
  return (
    <section>
      {/* Top Newsletter Bar */}
      <p className='flex items-center justify-center text-[12px] md:text-[18px] text-[#98989A] px-[24px] py-[12px] mt-[20px] lg:mt-[40px] md"mt-0'>
        Subscribe to our Newsletter For New & latest Blogs and Resources{' '}
        <GoArrowUpRight color='#FFD11A' />
      </p>

      {/* Navbar */}
      <div className='flex items-center justify-between px-[20px] lg:px-[80px] py-[20px] bg-[#1A1A1A] border-[#7E7E81]'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image src={Logo} alt='logo' />
          <h3 className=''>FutureTech</h3>
        </div>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        <div className='hidden lg:flex items-center gap-8'>
          {['Home', 'News', 'Podcasts', 'Resources'].map((item) => (
            <Button
              key={item}
              variant='ghost'
              className='rounded-[6px] hover:!bg-[#141414] !border-[1px] !border-[#1A1A1A] hover:!border-[#333333] hover:!text-white'
              style={{ color: '#7E7E81' }}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Contact Button (Hidden on Small Screens) */}
        <Button className='hidden lg:block text-[#141414] bg-[#FFD11A] rounded-[6px] transition-all duration-300'>
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
              {['Home', 'News', 'Podcasts', 'Resources'].map((item) => (
                <Button
                  key={item}
                  variant='ghost'
                  className='w-full text-left text-white hover:!bg-[#141414] !border-[1px] !border-[#1A1A1A] hover:!border-[#333333]'
                >
                  {item}
                </Button>
              ))}
            </div>

            {/* Contact Button inside Drawer */}
            <Button className='w-full mt-4 text-[#141414] bg-[#FFD11A] rounded-[6px] transition-all duration-300'>
              Contact Us
            </Button>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  )
}

export default Navbar
