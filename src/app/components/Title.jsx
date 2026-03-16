'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Title = ({ title, className }) => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    })
  }, [])

  return (
    <h1 ref={titleRef} className={className}>
      {title.split('\n').map((line, i) => (
        <span key={i} className="block">{line}</span>
      ))}
    </h1>
  )
}

export default Title