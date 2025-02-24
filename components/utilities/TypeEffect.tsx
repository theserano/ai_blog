'use client'
import React from 'react'
import Typical from 'react-typical'

type Props = {
  text: string;
  delay?: number;
}

const TypeEffect = ({ text, delay }: Props) => {
  return (
    <Typical
      steps={[`${text}`, delay ? delay : 5000, '', 500]}
      loop={Infinity}
      wrapper='span'
    />
  )
}

export default TypeEffect
