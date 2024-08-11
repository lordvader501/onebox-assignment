import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React, { Suspense } from "react";

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
        <Suspense fallback={null}>
          <main className="flex flex-col flex-1 w-full">{children}</main>
        </Suspense>
      </div>
    </div>
  );
}

export default UserLayout;
