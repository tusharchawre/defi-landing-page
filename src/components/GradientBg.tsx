import { ReactNode } from "react"


function GradientBg({children}: {children : ReactNode}) {
  return (
    <div className="relative w-full h-full bg-black text-black ">
        <div className="absolute w-full h-full z-50">

        {children}
        </div>

       <svg viewBox=" 0 0 1000 1000" xmlns='http://www.w3.org/2000/svg' className="opacity-5">
  <filter id='noiseFilter'>
    <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.50" 
        numOctaves="4" 
        stitchTiles="stitch"
        >
      </feTurbulence>
  </filter>
  

  <rect width='100%' height='100%' filter='url(#noiseFilter)' />
</svg>


        <div className="absolute blur-lg h-3/4 w-2/3 bg-gradient-to-t md:h-2/3 md:w-2/4 from-white/90 to-green-200 rotate-45 -right-40 -top-48 scale-125 rounded-3xl z-0 " />


        <div className="absolute blur-xl h-3/4 w-2/3 bg-gradient-to-t md:h-2/3 md:w-2/4 from-white/30 to-white/90 -left-60 -bottom-72 scale-125 rounded-3xl z-0 " />
    </div>
  )
}

export default GradientBg