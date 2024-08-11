import Image from "next/image";
import React from "react";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-between w-full h-screen">
      <header className="flex justify-center items-center py-3 bg-black border-b-2">
        <Image
          src="/images/logologin.png"
          alt="logo"
          width={182}
          height={80}
          className="w-42"
        />
      </header>
      <div className="grid place-items-center bg-black h-full">{children}</div>
      <footer className="flex justify-center items-center bg-[#121212] py-1 border-t-2">
        <p className="text-[#5C5F66] text-xs">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default AuthLayout;
