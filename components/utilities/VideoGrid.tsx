import React from 'react'
import CustomHeader from './CustomHeader'
import CustomText from './CustomText'
import Image from 'next/image'

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
}

interface VideoGridProps {
  videos: Video[]
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] lg:gap-[50px] xl:gap-[100px] 2xl:gap-[160px] p-6 bg-transparent px-[20px] xl:px-[80px] 2xl:px-[162px] py-[50px] xl:py-[80px] 2xl:py-[120px]'>
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.videoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='relative bg-transparent rounded-lg overflow-hidden block'
        >
          <Image
            src={video.thumbnail}
            alt={video.title}
            className='w-full max-h-[412px] object-cover'
          />
          <div className='py-4'>
            <CustomHeader type='h4' className='text-white font-semibold'>
              {video.title}
            </CustomHeader>
            <CustomText className='mt-1 flex justify-between'>
              {video.description}
            </CustomText>
          </div>
        </a>
      ))}
    </div>
  )
}

export default React.memo(VideoGrid)
