import Features from "./Features";
import { ImageComponent } from "./ImageComponent";

export const Page2 = () => {
  return (
    <div className="flex justify-start items-start w-[80%] ">
      <div className="md:w-[40%] md:flex hidden">
        <ImageComponent ImageUrl={'/iphone5.svg'}/>
      </div>
      <div className="md:w-[60%] ">
        <Features/>
      </div>
    </div>
  );
};
