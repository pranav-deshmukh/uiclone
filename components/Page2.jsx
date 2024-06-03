import Features from "./Features";
import { Page1Right } from "./Page1Right";

export const Page2 = () => {
  return (
    <div className="flex justify-start items-start w-[80%] ">
      <div className="w-[40%] ">
        <Page1Right />
      </div>
      <div className="w-[60%] ">
        <Features/>
      </div>
    </div>
  );
};
