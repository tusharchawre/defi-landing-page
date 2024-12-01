import { ReactNode } from "react"

interface GlassCard {
    children: ReactNode
}

function GlassCard({children}: GlassCard) {
  return (
    <div className="relative
    h-full w-full rounded-2xl
    bg-white/5 bg-clip-padding backdrop-filter  backdrop-blur-md
    opacity-80 bg-opacity-5 backdrop-saturate-100 backdrop-contrast-100">
         {children}
    </div>
  )
}

export default GlassCard