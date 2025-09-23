import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="bg-blue-500">navbar{children}</main>
    </div>
  );
};

export default layout;
