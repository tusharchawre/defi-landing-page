import { ReactNode } from "react"


function GradientBg2 ({children}: {children : ReactNode}) {
  return (
    <div className="relative w-full h-full bg-black text-black ">
        <div className="absolute w-full h-full z-50">

        {children}
        </div>

       <svg viewBox=" 0 0 5000 8000" xmlns='http://www.w3.org/2000/svg' className="opacity-5">
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


        <div className="absolute blur-lg h-3/4 w-2/3 bg-gradient-to-t  from-white/90 to-green-200 rotate-45 -right-[32rem] -top-[30rem]
        scale-125 rounded-3xl z-0 transition-all" />


        <div className="absolute blur-xl h-3/4 w-2/3 bg-gradient-to-t  from-white/30 to-white/90 md:-left-[35rem] -bottom-[40rem] scale-125 rounded-3xl z-0 transition-all" />
    </div>
  )
}

export default GradientBg2