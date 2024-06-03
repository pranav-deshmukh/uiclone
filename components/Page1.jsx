import { Page1Left } from "./Page1Left";
import { Page1Right } from "./Page1Right";

const Page1 = () => {
  return (
    <div className="flex justify-start items-start w-[80%]">
      <div className="w-[60%] flex ">
        <Page1Left />
      </div>
      <div className="w-[40%]">
        <Page1Right />
      </div>
    </div>
  );
};
export default Page1;
