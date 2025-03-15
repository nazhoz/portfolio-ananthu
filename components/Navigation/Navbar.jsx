"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center py-8 px-4 border-b border-gray-300 fixed w-[100%] top-0 bg-white z-[90]">
      {/* Added bg-white for better visibility over content */}
      <Link href="/" className="">
        <Image
          src="/newanlogo.png"
          alt="logo"
          height={30} // Increased height
          width={20} // Increased width, adjust as needed to maintain aspect ratio
          className="h-8 w-12" // Optional: You can also control size with className for more flexibility
        />
      </Link>
      <div className="flex items-center gap-6 font-semibold">
        <Link
          href="/"
          className={pathName === "/" ? "text-gray-400" : "text-black"}
        >
          Home
        </Link>
        <Link
          href="/Works"
          className={pathName === "/Works" ? "text-gray-400" : "text-black"}
        >
          Works
        </Link>
        <Link
          href="/ContactUs"
          className={pathName === "/ContactUs" ? "text-gray-400" : "text-black"}
        >
          Contact Us
        </Link>
      </div>
      <div className="cursor-pointer">
        <FaUser size={20} />
      </div>
    </div>
  );
};

export default Navbar;
