interface ButtonProps {
    text: string,
    variant: "dark" | "light" | "special",
    iconURL: string,

}

function Button({variant, iconURL, text}: ButtonProps) {
  if(variant == "special"){
    return(
      <button className={`flex items-center px-4 py-2 rounded-full gap-2 bg-white/5`}>
        <img src={iconURL} className="size-5" />
        {text}
    </button>
    )
  }
  
  return (
    <button className={`flex items-center px-2 py-1 rounded-full gap-2 ${(variant == "dark" ? "bg-white/20 text-white": "bg-white/90 text-black")}`}>
        {text}
        <img src={iconURL} className="size-5" />
    </button>
  )
}

export default Button