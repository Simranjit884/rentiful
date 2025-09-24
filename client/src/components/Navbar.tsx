import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="fixed left-0 top-0 z-50 w-full shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="bg-primary-700 flex w-full items-center justify-between px-8 py-3 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="hover:!text-primary-300 cursor-pointer" scroll={false}>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Rentiful Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="text-xl font-bold">
                RENT
                <span className="text-secondary-500 hover:!text-primary-300 font-light">IFUL</span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 hidden md:block">
          Discover your perfect rental apartment with our advanced search
        </p>
      </div>
    </div>
  );
};

export default Navbar;
