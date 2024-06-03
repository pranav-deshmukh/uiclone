import Navigations from "@/components/Navigations";
import Page1 from "@/components/Page1";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <div className="w-[90%] mt-3">
        <Navigations />
      </div>
      <div>
        <Page1 />
      </div>
    </main>
  );
}
