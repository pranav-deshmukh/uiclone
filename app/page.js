import { Advantages } from "@/components/Advantages";
import ContactPage from "@/components/Contact";
import { Customization } from "@/components/Customization";
import FAQ from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navigations";
import Page1 from "@/components/Page1";
import { Page2 } from "@/components/Page2";
import PricingPage from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col w-[100%]">
      <section className="w-[90%] mt-3">
        <Navbar />
      </section>
      <section id="home" className="w-[90%] flex justify-center">
        <Page1 />
      </section>
      <section id="features" className="w-[90%] flex justify-center mt-20">
        <Page2 />
      </section>
      <section id="advantages" className="w-[90%] flex justify-center mt-20">
        <Advantages />
      </section>
      <section id="customization" className="w-[90%] flex justify-center mt-20">
        <Customization />
      </section>
      <section id="faqs" className="w-[90%] flex justify-center mt-20">
        <FAQ />
      </section>
      <section id="pricing" className="w-[90%] flex justify-center mt-20">
        <PricingPage />
      </section>
      <section id="contact" className="w-[90%] flex justify-center mt-20">
        <ContactPage />
      </section>
      <section className="w-[90%] flex justify-center mt-20">
        <Footer />
      </section>
    </main>
  );
}
