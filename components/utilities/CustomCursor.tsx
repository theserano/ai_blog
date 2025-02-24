'use client'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [hovered, setHovered] = useState(false)

  // Smooth motion
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [mouseX, mouseY])

  // Hide system cursor globally
  useEffect(() => {
    const hideCursor = () => (document.body.style.cursor = 'none')
    hideCursor() // Hide immediately

    window.addEventListener('focus', hideCursor) // When user focuses tab
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) hideCursor() // When user returns to page
    })

    return () => {
      window.removeEventListener('focus', hideCursor)
      document.removeEventListener('visibilitychange', hideCursor)
    }
  }, [])

  // Detect hover on links/buttons
  useEffect(() => {
    const hoverables = document.querySelectorAll('a, button, .hover-effect')
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className='cursor-ring'
        style={{
          x: springX,
          y: springY,
          scale: hovered ? 2.5 : 1,
          border: hovered
            ? '3px solid rgba(255, 255, 255, 1)'
            : '3px solid rgba(255, 255, 255, 0.6)',
          boxShadow: hovered
            ? '0 0 15px rgba(255, 255, 255, 0.5)'
            : '0 0 10px rgba(255, 255, 255, 0.3)',
        }}
      />

      {/* Inner dot */}
      <motion.div
        className='cursor-dot'
        style={{
          x: springX,
          y: springY,
          scale: hovered ? 0.5 : 1,
          background: hovered
            ? 'rgba(255, 255, 255, 1)'
            : 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
        }}
      />
    </>
  )
}
