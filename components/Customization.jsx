import Image from "next/image"
import { CustomizationRight } from "./CustomisationRight"
import { ImageComponent } from "./ImageComponent"

export const Customization = ()=>{
    return(
        <div className="flex justify-start items-start w-[80%] ">
      <div className="md:w-[40%] md:flex hidden">
        <ImageComponent ImageUrl={'iphone5.svg'}/>
      </div>
      <div className="md:w-[60%] h-[500px] flex items-center justify-center">
        <CustomizationRight/>
      </div>
    </div>
    )
}