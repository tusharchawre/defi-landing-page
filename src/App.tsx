import { useState } from "react"
import Button from "./components/Button"
import GradientBg from "./components/GradientBg"
import GradientBg2 from "./components/GradientBg2"
import Logo from "./components/Logo"
import MarqueeComp from "./components/Marquee"
import Navbar from "./components/Navbar"
import ConcCircle from "./components/ConcCircle"
import ButtonShowcase from "./components/ButtonShowcase"

import Transactions from "./components/Transactions"



function App() {
  const [date, setDate] = useState(new Date());

  return (
    <>
    <div className="bg-black w-full h-screen text-white font-light p-4 overflow-x-hidden">
      <nav className="flex items-center justify-between">
      <Logo />
      <Navbar />
      <Button variant="dark" className="bg-white/5 text-sm  py-2 px-3">
        <img src="/icons/user-line.svg" alt="" className="size-4"/>
      Create Account
      </Button>
      </nav>

      <main className="w-full h-4/5 my-2 rounded-xl overflow-hidden ">

      <GradientBg>
        <div className="w-full h-full flex flex-col items-center justify-around text-white">
        <Button  iconURL="/icons/play-fill.svg" variant="dark" className="px-3 py-3" />
        <Button iconURL="/icons/arrow-right-line.svg" variant="dark" className="text-sm py-0 px-2">
        <Logo className="transform scale-50"  />
        Unlock Your Assets Spark!
        </Button>
        <div className="text-center">
        <p className="text-5xl md:text-7xl">One-click for Asset Defense</p>
        <p className="text-sm text-white/80 md:text-base">Dive into the art assets, where innovatiove blockchain technology meets financial expertise</p>
        </div>
        <div className="flex gap-4">
          <Button
          iconURL="/icons/arrow-right-up-line.svg" variant="dark" className="text-sm px-3 py-2">
            Open App
          </Button>
          <Button variant="light" className="text-sm">
            Discover More
          </Button>
        </div>

        <div className="flex items-end justify-between w-full px-12 h-1/6">
          <div className="flex items-center justify-center gap-1">

            <Button variant="light" iconURL="/icons/arrow-down-line.svg" 
            className="px-1 py-1"
            >
            </Button>
            <Button variant="dark" className="text-sm">
            {`${date.getDate()} / ${date.getMonth()}.Scroll Down`}
            </Button>
              </div>


              <div className="text-sm ">
                Defi horizons
                <div className="relative space-y-1">
              <Button variant="light" className="w-1/3 absolute"  />
              <Button variant="dark" className="w-full" />
                </div>
              </div>

          </div>



        </div>


        </GradientBg>
      </main>

      <MarqueeComp />

    </div>

    <div className="bg-black w-full py-5 h-fit text-white flex justify-center items-center flex-col gap-8">
    <div className="text-center flex flex-col items-center gap-8">
    <p className="text-5xl md:text-7xl -mb-6">DeFi Wallet</p>
    <p className="text-sm text-white/80 md:text-base">Exploratory mission with DeFi Horizon &navigating through the vast possibilities</p>
    <Button variant="light" className="text-sm px-4 py-2">
      How it works?
    </Button>
    </div>

    <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-8 w-full ">
    <Transactions />
    <div>
    <ConcCircle />
    <ButtonShowcase />
    </div>
   
    </div>
   
    
    </div>

    <div className="w-full h-[120vh] bg-black p-8">
    <main className="w-full h-full my-2 rounded-3xl overflow-hidden">




<GradientBg2>
<div className="w-full h-full flex flex-col items-center justify-around text-white">
<div className="text-center">
        <p className="text-5xl md:text-7xl">Meet Marvellous Insights</p>
        <p className="text-sm text-white/80 md:text-base">Save your team's precious time. Config replaces the lengthy process of manual BOM</p>
        </div>


</div>
<div>

</div>

  </GradientBg2>

</main>

    </div>
    <footer className="flex items-center justify-between bg-black text-white pb-2 px-10">
      <div className="hidden md:flex gap-2 items-center">
        <p>Support</p>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <p>Register</p>
      </div>
      <div className="text-sm text-center w-full text-white/50">
      <p>&copy; Designed with Love at DeFi PFA Studio . 2024</p>
        
      </div>
      <div className="hidden gap-2 items-center md:flex">
        <Button variant="dark" className="rounded-md py-2 px-2" iconURL="/icons/twitter-x-line.svg">

        </Button>
        <Button variant="dark" className="rounded-md py-2 px-2" iconURL="/icons/linkedin-fill.svg">

        </Button>
      </div>
    </footer>
    </>
  )
}

export default App