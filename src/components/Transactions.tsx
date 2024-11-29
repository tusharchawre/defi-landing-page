import Card from "./Card"


function Transactions() {
  return (
    <div className="flex flex-col gap-8 relative transition-all">

      <div className="w-96 h-96 absolute rounded-full border border-white/60 -skew-x-[35deg] rotate-12 scale-150 -translate-x-24 blur-[4px] hidden xl:flex">

</div>
      <div className="w-96 h-96 absolute rounded-full border border-white/10 -skew-x-[35deg] rotate-12 scale-150 -translate-x-24 hidden xl:flex">

      </div>
      <div className="absolute opacity-80 hidden xl:block w-full">
      <p className="absolute text-sm text-yellow-100 -translate-x-12 translate-y-12">DeFi Wallet Sysytem</p>
      <p className="absolute text-5xl  -translate-x-16 text-white/80 translate-y-16">+A3.7</p>
      </div>
      
        <Card iconURL="/icons/bnb-fill.svg" amount={1.038} className="md:translate-x-32 md:translate-y-10" currency="BNB"/>
        <Card iconURL="/icons/eth-fill.svg" amount={1.038} currency="ETH"
        className="md:translate-y-10 md:translate-x-10"
        />
        <Card iconURL="/icons/hand-coin-fill.svg" className="md:-translate-x-32 md:translate-y-10" amount={1.038} currency="ETH"/>
    </div>
  )
}

export default Transactions