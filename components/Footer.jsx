import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-[80%] flex flex-col justify-center items-center gap-5 ">
      <div className=" grid grid-cols-5 w-full">
        <div className="flex flex-col gap-2">
            <Image src={'logo.svg'} width={80} height={80} alt="logo"/>
            <h1>help@uifry.com</h1>
            <h1>+1234567890</h1>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Links</h1>
            <h1>Home</h1>
            <h1>About Us</h1>
            <h1>Bookings</h1>
            <h1>Blog</h1>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Legal</h1>
            <h1>Terms of Use</h1>
            <h1>Privacy policy</h1>
            <h1>Cookie Policy</h1>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Product</h1>
            <h1>Take Tour</h1>
            <h1>Live Chat</h1>
            <h1>Reviews</h1>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Newsletter</h1>
            <h1>Stay Up to Date</h1>
            <h1>About Us</h1>
            <h1>Bookings</h1>
            <h1>Blog</h1>
        </div>
        
      </div>
      <div className="pb-10">
        <h1 className="font-bold">Copyright 2022 uifry.com all rights reserved</h1>
      </div>
    </div>
  );
};
