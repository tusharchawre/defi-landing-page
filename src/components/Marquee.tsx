import Marquee from "react-fast-marquee";

function MarqueeComp() {
  const imgs: string[] = [
    '/icons/logo2.png',
    '/icons/logo3.png',
    '/icons/logo4.png',
    '/icons/logo1.png',
  ];

  return (
	<div className="py-8" >
			
		<Marquee autoFill pauseOnHover gradient gradientColor="black" gradientWidth={200}>
      {imgs.map((imgUrl: string, index: number) => (
        <img src={imgUrl} className="h-8 px-10 grayscale opacity-70" key={index} alt={`Logo ${index}`} />
      ))}
    </Marquee>
		
    
	</div>

  );
}

export default MarqueeComp;
