'use client'
import { useEffect, useRef } from "react"
import gsap from "gsap"

const ScrollTop = () => {
  const arrowRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Animation légère (optionnelle)
  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: -5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="fixed left-4 xl:left-24 2xl:left-36 bottom-12 z-[9999]">
      <button
        onClick={handleScrollTop}
        className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-blue hover:bg-gray-800 transition"
      >
        <svg
          ref={arrowRef}
          width="20"
          height="20"
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
      </button>
    </div>
  )
}

export default ScrollTop;