import Button from "./Button"

function Navbar() {
  return (
    <div className="md:flex bg-white/10 gap-4 w-fit items-center justify-around px-4 py-2 rounded-full text-sm hidden translate-x-20">
       <p>Home</p>
       <p>DeFi App</p>
       <p>Assets</p>
       <p>Features</p> 
       <p>Pricing</p>
       <p>FAQ</p>

       <Button  iconURL="/icons/arrow-right-up-line.svg" variant="dark">
       Protection
       </Button>
       <Button  iconURL="/icons/openbase-fill.svg" variant="light" />
    </div>
  )
}

export default Navbar