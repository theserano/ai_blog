'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FaTwitter, FaMedium, FaLinkedin } from 'react-icons/fa6'
import CustomHeader from '../utilities/CustomHeader'
import { GoArrowUpRight } from 'react-icons/go'

const footerLinks = [
  {
    title: 'Home',
    links: [
      { name: 'Features' },
      { name: 'Blogs' },
      { name: 'Resources', new: true },
      { name: 'Testimonials' },
      { name: 'Contact Us' },
      { name: 'Newsletter' },
    ],
  },
  {
    title: 'News',
    links: [
      { name: 'Trending Stories' },
      { name: 'Featured Videos' },
      { name: 'Technology' },
      { name: 'Health' },
      { name: 'Politics' },
      { name: 'Environment' },
    ],
  },
  {
    title: 'Blogs',
    links: [
      { name: 'Quantum Computing' },
      { name: 'AI Ethics' },
      { name: 'Space Exploration' },
      { name: 'Biotechnology', new: true },
      { name: 'Renewable Energy' },
      { name: 'Biohacking' },
    ],
  },
  {
    title: 'Podcasts',
    links: [
      { name: 'AI Revolution' },
      { name: 'AI Revolution', new: true },
      { name: 'TechTalk AI' },
      { name: 'AI Conversations' },
    ],
  },
]

const resources = ['Whitepapers', 'Ebooks', 'Reports', 'Research Papers']

const Footer = () => {
  return (
    <footer className='bg-[#141414] text-white px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
      {/* Links Section */}
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
        {footerLinks.map((section, index) => (
          <div key={index}>
            <CustomHeader type='h4' className='mb-4'>
              {section.title}
            </CustomHeader>
            <ul className='space-y-2'>
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className='flex items-center gap-2 text-[#666666] text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[150%] hover:text-white'
                >
                  {link.name}
                  {link.new && (
                    <Button
                      variant={`outline`}
                      size={`sm`}
                      className='rounded-[5px] text-xs'
                    >
                      New
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Resources Section */}
        <div className='hidden lg:block'>
          <h3 className='text-lg font-semibold mb-3'>Resources</h3>
          <ul className='flex items-center gap-2 flex-wrap'>
            {resources.map((resource, i) => (
              <li key={i}>
                <Button
                  variant='outline'
                  className='rounded-[6px] w-full md:w-fit transition-all duration-300 px-[14px] md:px-[24px] py-[24px] bg-[#141414]'
                >
                  {resource}
                  <GoArrowUpRight color='#FFD11A' />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='block lg:hidden'>
        <h3 className='text-lg font-semibold mb-3'>Resources</h3>
        <ul className='flex items-center gap-2 flex-wrap'>
          {resources.map((resource, i) => (
            <li key={i}>
              <Button
                variant='outline'
                className='rounded-[6px] w-full md:w-fit transition-all duration-300 px-[14px] md:px-[24px] py-[24px] bg-[#141414]'
              >
                {resource}
                <GoArrowUpRight color='#FFD11A' />
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom Section */}
      <div className='border-t border-gray-700 mt-6 pt-4 flex gap-4 flex-col md:flex-row items-center justify-between text-[#666666] text-sm'>
        <div className='flex gap-4'>
          <span>Terms & Conditions</span>
          <span>|</span>
          <span>Privacy Policy</span>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-4 text-xl'>
          <FaTwitter className='hover:text-grey text-white cursor-pointer' />
          <FaMedium className='hover:text-grey text-white cursor-pointer' />
          <FaLinkedin className='hover:text-grey text-white cursor-pointer' />
        </div>

        <span>© 2024 FutureTech. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
