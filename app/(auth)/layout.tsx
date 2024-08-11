import React from "react";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col flex-1 max-w-6xl w-full  ">{children}</main>
  );
}

export default AuthLayout;
