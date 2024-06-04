import Image from "next/image"

export const ImageComponent = ({ImageUrl})=>{
    return(
        <div className="relative w-[400px] h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/Page1right1.svg" layout="fill" objectFit="contain" alt="bg" />
      </div>
      <div className="absolute z-50" style={{ top: '20px', left: '50px', width: '100%', height: '100%' }}>
        <Image src={ImageUrl} layout="fill" objectFit="contain" alt="iphone1" />
      </div>
      
    </div>
    )
}