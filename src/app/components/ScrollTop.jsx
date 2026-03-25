'use client'
import { useRef , useEffect } from "react"
import gsap from "gsap"

const ScrollTop = () => {
  const circleRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Rotation GSAP
  useEffect(() => {
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%"
    });
  }, []);

 

   
  return (
    <div className={`fixed left-4 xl:left-24 2xl:left-36 bottom-12 z-[9999]`}> 
      <button
        onClick={handleScrollTop}
        className="relative w-16 h-16 md:w-28 md:h-28 cursor-pointer"
      >
        {/* Cercle texte rotatif */}
        <svg ref={circleRef} viewBox="0 0 100 100" className="w-full h-full" direction="ltr">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>

          <text fill="#b8b8b8ff" fontSize="10" fontWeight="400" letterSpacing="1" direction="ltr">
            <textPath href="#circle" startOffset="0%">
              • اصعد للأعلى • اصعد للأعلى •
            </textPath>
          </text>
        </svg>

        {/* Flèche centre */}
        <div className="absolute inset-0 flex items-center justify-center text-[#b8b8b8ff]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#b8b8b8ff" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="18" x2="12" y2="6" />
            <polyline points="6 12 12 6 18 12" />
          </svg>
        </div>

      </button>
    </div>
  )
}

export default ScrollTop;