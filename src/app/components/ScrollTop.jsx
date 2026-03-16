'use client'

import Link from "next/link"

const ScrollTop = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
   <Link href="#about">
    <div className="absolute left-4 md:left-48 bottom-24 z-[9999]"> 

      <button
        onClick={handleScrollTop}
        className="relative w-16 h-16 md:w-28 md:h-28 cursor-pointer"
      >

        {/* Cercle texte rotatif */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-spin-slow"
          direction="ltr"
        >
          <defs>
            <path
              id="circle"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>

          <text
            fill="#b8b8b8ff"
            fontSize="7"     // plus petit sur mobile
            fontWeight="600"
            letterSpacing="1"
            direction="ltr"
          >
            <textPath href="#circle" startOffset="0%">
              • SCROLL Down • SCROLL Down •
            </textPath>
          </text>
        </svg>

        {/* Flèche centre */}
        <div className="absolute rotate-180 inset-0 flex items-center justify-center">
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

      </button>
    </div>
   </Link>
  )
}

export default ScrollTop
