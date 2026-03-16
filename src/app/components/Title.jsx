'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Title = ({
  children,
  className = "",
  as = "h2",
}) => {

  const titleRef = useRef(null)
  const Tag = as

  useEffect(() => {

    const el = titleRef.current

    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    })

  }, [])

  return (
    <Tag
      ref={titleRef}
      className={className}
    >
      {children}
    </Tag>
  )
}

export default Title