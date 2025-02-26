import React from 'react'

type Props = {}

const Loading = ({}: Props) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-[#141414] z-[9999]'>
      <div className='container_load'>
        <div className='line_load'></div>
      </div>
    </div>
  )
}

export default Loading
