import Button from "./Button"

function ButtonShowcase() {
  return (
    <div className="scale-75 md:scale-100"> 
        <div className="flex gap-4 mt-4">

    <Button variant="dark" className="rounded-md bg-white/5 text-sm px-2 py-2">
        <img src="/icons/shining-fill.svg" alt="" className="size-4 opacity-70" />
        2.7k Assets
    </Button>
    <Button variant="dark" className="rounded-md bg-white/5 text-sm px-2 py-2">
        <img src="/icons/shining-fill.svg" alt="" className="size-4 opacity-70" />
        Success
    </Button>
    <Button variant="light" className="rounded-md bg-white/5 text-sm px-2 py-2">
        <img src="/icons/shining-fill copy.svg" alt="" className="size-4 opacity-70" />
        Decentralized
    </Button>
    </div>
    <div className="flex flex-wrap gap-4 mt-4">

    <Button variant="dark" className="rounded-md bg-white/5 text-sm px-2 py-2">
        <img src="/icons/shining-fill.svg" alt="" className="size-4 opacity-70" />
        Tokenized-Trust
    </Button>
    <Button variant="dark" className="rounded-md bg-white/5 text-sm px-2 py-2">
        <img src="/icons/shining-fill.svg" alt="" className="size-4 opacity-70" />
        DeFi - Revolution
    </Button>
    <Button variant="dark" className="rounded-md bg-white/5 text-sm px-2 py-2">
        <img src="/icons/shining-fill.svg" alt="" className="size-4 opacity-70" />
        LiquidityLeaders
    </Button>
    </div></div>
  )
}

export default ButtonShowcase