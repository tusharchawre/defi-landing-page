import Marquee from "react-fast-marquee";

function MarqueeComp() {
  const imgs: string[] = [
    '/icons/logo1.png',
    '/icons/logo2.png',
    '/icons/logo3.png',
    '/icons/logo4.png',
    '/icons/logo5.png',
  ];

  return (
	<div className="py-4" >
			
		<Marquee autoFill pauseOnHover gradient gradientColor="black" >
      {imgs.map((imgUrl: string, index: number) => (
        <img src={imgUrl} className="h-16 px-4" key={index} alt={`Logo ${index}`} />
      ))}
    </Marquee>
		
    
	</div>

  );
}

export default MarqueeComp;
