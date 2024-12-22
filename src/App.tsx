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
import GlassCard from "./components/GlassCard"





function App() {
  const [date] = useState(new Date());

  return (
    <>
    <div className="bg-black w-full h-screen text-white font-light p-4 ">
      <div className="flex items-center justify-between">
      <Logo />
      <Navbar />
      <Button variant="dark" className="bg-white/5 text-sm  py-2 px-3">
        <img src="/icons/user-line.svg" alt="" className="size-4"/>
      Create Account
      </Button>
      </div>

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

    <div className="w-full h-[132vh] bg-black p-8">
    <main className="w-full h-full my-2 rounded-3xl overflow-hidden">




<GradientBg2>
<div className="w-full h-full flex flex-col items-center justify-around text-white p-12 ">
<div className="text-center">
        <p className="text-5xl md:text-7xl">Meet Marvellous Insights</p>
        <p className="text-sm text-white/80 md:text-base">Save your team's precious time. Config replaces the lengthy process of manual BOM</p>
        </div>

    <div className="md:grid md:grid-col-3 md:grid-rows-2 h-full flex flex-col gap-4 w-full md:p-12">
    <div className="md:col-span-2 w-full" >
      <GlassCard>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
          <div className="text-center">

        <p className="text-7xl font-thin">98.2%</p>
        <p className="text-white/50">Spots . <span className="text-yellow-300/60">WorldWide</span></p>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button variant="dark" className="py-1 px-2 text-sm opacity-70">
            <Button variant="dark" className="py-0 px-1 text-xs" >
            ^K 
              </Button>
              Opens Spots api dev
            </Button>
            <Button variant="dark" className="py-1 px-2 text-sm opacity-70">
            <Button variant="dark" className="py-0 px-1 text-xs" >
            ! 
              </Button>
              Assign issue to experts            
              </Button>
              <Button variant="dark" className="py-1 px-2 text-sm opacity-70">
            <Button variant="dark" className="py-0 px-1 text-xs" >
            A
              </Button>
              Assign new
            </Button>
          </div>

        <div className="w-full text-wrap text-center">
          <p className="text-2xl">Success Transactions</p>
          <p className="text-sm text-white/50">Innovative blockchain technology meets financial expertise to empower your investment journey.</p>
        </div>
        </div>
      </GlassCard>
      </div>
    <div className="md:col-start-3 w-full ">
      <GlassCard>
        <div className="flex items-center justify-center w-full h-full flex-col p-8 text-center">
          <p className="text-2xl">Liquidity Labyrinth</p>
          <p className="text-white/50">
          Liquidity Labyrinth, where each turn reveals new opportunities.</p>

        </div>
      </GlassCard>
      </div>
    <div className="md:row-start-2 w-full ">
      <GlassCard>
        <div className="h-full w-full flex flex-col items-center justify-center md:p-4 p-8 px-1 gap-2">

    <div className="flex flex-shrink-0 gap-4 text-left h-3/4 w-3/4 overflow-auto ">

    
          <GlassCard>
            <div className="w-full h-full p-4 flex-col flex items-start justify-center">
            <div className="flex gap-1 items-center">
            <Button variant="dark" className="bg-yellow-500 py-4 px-1 scale-50">
            </Button>
            <p>Financial</p>

            </div>

            <p className="text-yellow-300 text-2xl">Growth</p>
            <p className="text-white text-4xl">19.2</p>
            <p className="text-sm">$2.7m</p>
          
            </div>

          </GlassCard>
          <GlassCard>
            <div className="w-full h-full p-4 flex-col flex items-start justify-center">
            <div className="flex gap-1 items-center">
            <Button variant="dark" className="bg-green-500 py-4 px-1 scale-50">
            </Button>
            <p>Financial</p>

            </div>

            <p className="text-green-400 text-2xl">Growth</p>
            <p className="text-white text-4xl">24.2</p>
            <p className="text-sm">$3.7m</p>
          
            </div>

          </GlassCard>

          </div>


<div className="text-center">

          <p className="text-lg">Your Palette Financial oppurtunities</p>
          <p className="text-sm text-white/50">Watch your assets grow in a thriving ecosystem so easy</p>
</div>

        </div>
      </GlassCard>
      </div>
    <div className="md:col-span-2  w-full row-start-2">
      <GlassCard>
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 gap-4">
          <div>
          <p className="text-xl ">DeFi Space . Oppurtunities</p>
          <p className="text-white/50">Where each stroke is a smart contract and every color is a chance to build a portfolio.</p>
          </div>
          <div className=" rounded-3xl w-full h-3/4 overflow-hidden">
          <img src="/Graph.png" className="object-coverobject-center	"/>
          </div>
          
          

        </div>
      </GlassCard>

    </div>
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