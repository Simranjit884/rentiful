import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className={`flex h-full w-full flex-col pt-[${NAVBAR_HEIGHT}px] bg-amber-600`}>
        {children}
      </main>
    </div>
  );
};

export default layout;
