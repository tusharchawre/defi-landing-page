

interface CardProps {
    iconURL: string
    className?: string; 
    currency: String
    amount: Number

}


function Card({iconURL, currency, amount,className}:CardProps) {
  return (
    <div className={`bg-white/10 w-72 h-20 rounded-2xl rounded-br-none ${className}`}>
        <div className="flex h-full items-center w-full justify-between p-8 gap-4">
            <div className="w-12 h-12 rounded-full border-white/20 border-[0.5px] flex items-center justify-center relative">
            <img src={iconURL} alt="" className="size-6"/>
            </div>
            <div className=" absolute w-12 h-12 rounded-full border-white/40 border-[0.5px] blur-[8px]">
            </div>

            <div className="text-sm">
                <p className="">Sent</p>
                <p className="text-white/50">from x7230</p>
            </div>
            <div className="text-sm text-right ml-8">
                <p className="text-yellow-100">{amount.toString()}</p>
                <p className="text-white/50">{currency}</p>
            </div>
        </div>
    </div>
  )
}

export default Card