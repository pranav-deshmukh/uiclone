import Image from "next/image";

export const Page1Right = () => {
  return (
    <div>
      <div className="relative mt-10 flex justify-center">
        <Image src={"iphone1.svg"} width={400} height={100} alt="iphone1" className="absolute"/>
        <Image src={"Page1right1.svg"} width={400} height={100} alt="bg" className="absolute"/>
      </div>
      {/* <div className="relative mt-10 flex justify-center">
        <img
          src="/iphone1.svg"
          alt="Phone 1"
          className="relative z-30 h-96 transform -rotate-6"
        />
        <img
          src="/iphone1.svg"
          alt="Phone 2"
          className="absolute z-20 h-96 transform rotate-6 -translate-x-16"
        />
        <img
          src="/iphone1.svg"
          alt="Phone 3"
          className="absolute z-10 h-96 transform rotate-12 -translate-x-32"
        />
      </div> */}
    </div>
  );
};
