import Image from "next/image";
import { AdvantagesLeft } from "./AdvantagesLeft";
import { ImageComponent } from "./ImageComponent";

export const Advantages = () => {
  return (
    <div className="flex justify-start items-start w-[80%] ">
      <div className="md:w-[60%] ">
        <AdvantagesLeft />
      </div>
      <div className="md:w-[40%] md:flex hidden">
        <ImageComponent ImageUrl={'iphone4.svg'}/>
      </div>
    </div>
  );
};
