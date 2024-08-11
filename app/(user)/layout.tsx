import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React from "react";

function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-12">
        <Navbar />
        <main className="flex flex-col flex-1 max-w-6xl w-full  ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default UserLayout;
