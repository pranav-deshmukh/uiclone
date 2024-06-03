import Image from "next/image"
import { CustomizationRight } from "./CustomisationRight"

export const Customization = ()=>{
    return(
        <div className="flex justify-start items-start w-[80%] ">
      <div className="w-[40%] ">
        <Image src={"iphone4.svg"} width={400} height={400} alt="image" />
      </div>
      <div className="w-[60%] h-[500px] flex items-center justify-center">
        <CustomizationRight/>
      </div>
    </div>
    )
}