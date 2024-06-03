import Image from "next/image";
import { AdvantagesLeft } from "./AdvantagesLeft";

export const Advantages = () => {
  return (
    <div className="flex justify-start items-start w-[80%] ">
      <div className="w-[60%] ">
        <AdvantagesLeft />
      </div>
      <div className="w-[40%] ">
        <Image src={"iphone4.svg"} width={400} height={400} alt="image" />
      </div>
    </div>
  );
};
