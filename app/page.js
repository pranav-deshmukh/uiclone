import { Advantages } from "@/components/Advantages";
import { Customization } from "@/components/Customization";
import FAQ from "@/components/Faqs";
import Navigations from "@/components/Navigations";
import Page1 from "@/components/Page1";
import { Page2 } from "@/components/Page2";
import PricingPage from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col w-[100%]">
      <div className="w-[90%] mt-3">
        <Navigations />
      </div>
      <div className="w-[90%] flex justify-center">
        <Page1 />
      </div>
      <div className="w-[90%] flex justify-center mt-20">
        <Page2 />
      </div>
      <div className="w-[90%] flex justify-center mt-20">
        <Advantages />
      </div>
      <div className="w-[90%] flex justify-center mt-20">
        <Customization />
      </div>
      <div className="w-[90%] flex justify-center mt-20">
        <FAQ />
      </div>
      <div className="w-[90%] flex justify-center mt-20">
        <PricingPage />
      </div>
    </main>
  );
}
