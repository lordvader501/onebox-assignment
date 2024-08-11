import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React from "react";

function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SideBar />
      <div className="">
        <Navbar />
        <main className="flex flex-col flex-1 w-full">{children}</main>
      </div>
    </div>
  );
}

export default UserLayout;
