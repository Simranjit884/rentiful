"use client";

import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser } = useGetAuthUserQuery();
  console.log("authUser:", authUser);

  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`flex h-full w-full flex-col pt-[${NAVBAR_HEIGHT}px] bg-amber-600`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
