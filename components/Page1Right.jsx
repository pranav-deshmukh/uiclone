import Image from "next/image";

export const Page1Right = () => {
  return (
    <div className="relative w-[400px] h-[500px]">
      <div className="absolute top-0 left-20 w-full h-full">
        <Image src="/Page1right1.svg" layout="fill" objectFit="contain" alt="bg" />
      </div>
      <div className="absolute z-50" style={{ top: '-10px', left: '0px', width: '100%', height: '100%' }}>
        <Image src="/iphone1.svg" layout="fill" objectFit="contain" alt="iphone1" />
      </div>
      <div className="absolute z-40" style={{ top: '30px', left: '77px', width: '100%', height: '100%' }}>
        <Image src="/iphone2.svg" layout="fill" objectFit="contain" alt="iphone2" />
      </div>
      <div className="absolute z-30" style={{ top: '70px', left: '120px', width: '100%', height: '100%' }}>
        <Image src="/iphone3.svg" layout="fill" objectFit="contain" alt="iphone3" />
      </div>
    </div>
  );
};
