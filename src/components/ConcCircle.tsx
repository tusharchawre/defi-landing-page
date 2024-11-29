import Button from "./Button"

const ConcCircle = () => {
  return (
    <div>
        <div className="relative z-10">
      <div className=" w-full h-full scale-[.35] absolute -z-10">

      <div className="w-full h-full animate-spin-slow absolute -z-10">

    <div className="w-full h-full bg-green-200/80 rounded-full blur-2xl  absolute -z-10 animate-skew ">
    </div>
      </div>
      </div>

    <div className="h-[420px] w-[420px] bg-white/[.02] rounded-full flex items-center justify-center translate-x-6">
    <div className="h-[370px] w-[370px] bg-white/[.04] rounded-full flex items-center justify-center border-white/10 border-[1px] ">
    
    <div className="h-[200px] w-[200px] bg-white/[.15] rounded-full flex items-center justify-center">
    <div className="absolute -translate-x-36 text-sm text-white/50">
      <p>Target</p>
      <p>2024</p>
      <p>DeFi api</p>
    </div>
    
    <div className="h-[170px] w-[170px] bg-black rounded-full flex flex-col items-center justify-center">
      <img src="/icons/flashlight-fill.svg" className="size-6 mb-1" />
      <p>Step 01</p>
    
    </div>
    </div>

</div>
    </div>
    </div>
    </div>
  )
}

export default ConcCircle