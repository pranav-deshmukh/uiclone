import { Page1Left } from "./Page1Left";
import { Page1Right } from "./Page1Right";

const Page1 = ()=>{
    return(
        <div className="flex justify-start items-center">
            <div className="w-[60%]">

            <Page1Left/>
            </div>
            <Page1Right/>
        </div>
    )
}
export default Page1;
