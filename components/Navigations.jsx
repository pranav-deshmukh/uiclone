import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="flex items-center">
        <Image src={"/Logo.svg"} width={80} height={80} alt="Uifry" />{" "}
      </div>
      <div className="flex items-center justify-start w-[80%] font-semibold">
    
          <p className="mx-4 text-gray-700 hover:text-red-500">Home</p>
          <p className="mx-4 text-gray-700 hover:text-red-500">About Us</p>
          <p className="mx-4 text-gray-700 hover:text-red-500">Pricing</p>
          <p className="mx-4 text-gray-700 hover:text-red-500">Features</p>
      </div>
      <a
        href="/download"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Download
      </a>
    </div>
  );
};

export default Navbar;
