import Button from "./components/Button"
import Logo from "./components/Logo"
import MarqueeComp from "./components/Marquee"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="bg-black w-full h-screen text-white font-light p-4">
      <nav className="flex items-center justify-between">
      <Logo />
      <Navbar  />
      <Button text="Create Account" variant="special" iconURL="/icons/user-line.svg" />
      </nav>

      <main className="w-full bg-white h-4/5 my-2 rounded-lg">
      
      </main>

      <MarqueeComp />

    </div>
  )
}

export default App