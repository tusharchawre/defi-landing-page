import { useState } from "react"
import Button from "./components/Button"
import GradientBg from "./components/GradientBg"
import Logo from "./components/Logo"
import MarqueeComp from "./components/Marquee"
import Navbar from "./components/Navbar"


function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-black w-full h-screen text-white font-light p-4">
      <nav className="flex items-center justify-between">
      <Logo />
      <Navbar />
      <Button variant="dark">
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
        <p className="text-sm md:text-base">Dive into the art assets, where innovatiove blockchain technology meets financial expertise</p>
        </div>
        <div className="flex gap-4">
          <Button
          iconURL="/icons/arrow-right-up-line.svg" variant="dark" className="text-sm">
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
  )
}

export default App