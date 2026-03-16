'use client'

import Link from "next/link"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const ScrollTop = () => {

  const circleRef = useRef(null)

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%"
    })
  }, [])

  return (
    <div className="fixed left-4 md:left-48 bottom-24 z-[9999]">

      <Link
        href="#about"
        onClick={handleScrollTop}
        className="relative w-16 h-16 md:w-28 md:h-28 block cursor-pointer"
      >

        {/* cercle rotatif */}
        <svg
          ref={circleRef}
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>

          <text
            fill="#b8b8b8"
            fontSize="7"
            fontWeight="600"
            letterSpacing="2"
          >
            <textPath href="#circlePath">
              • SCROLL DOWN • SCROLL DOWN •
            </textPath>
          </text>
        </svg>

        {/* arrow */}
        <div className="absolute inset-0 flex items-center justify-center rotate-180">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="18" x2="12" y2="6" />
            <polyline points="6 12 12 6 18 12" />
          </svg>
        </div>

      </Link>

    </div>
  )
}

export default ScrollTop