import { Page1Left } from "./Page1Left";
import { Page1Right } from "./Page1Right";

const Page1 = () => {
  return (
    <div className="flex justify-start items-start w-[80%]">
      <div className="md:w-[60%] flex">
        <Page1Left />
      </div>
      <div className="md:w-[40%] md:flex hidden">
        <Page1Right />
      </div>
    </div>
  );
};
export default Page1;
