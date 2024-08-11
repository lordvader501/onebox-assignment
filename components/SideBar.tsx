"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function SideBar() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const navItems = [
    {
      name: "home",
      icon: "/images/Home.png",
      link: "/",
    },
    {
      name: "inbox",
      icon: "/images/inbox.png",
      link: "/",
    },
    {
      name: "sent",
      icon: "/images/sent.png",
      link: "/",
    },
    {
      name: "menu",
      icon: "/images/menu.png",
      link: "/",
    },
    {
      name: "archive",
      icon: "/images/archive.png",
      link: "/",
    },
    {
      name: "analytics",
      icon: "/images/analytics.png",
      link: "/",
    },
  ];
  return (
    <aside className="bg-light-white z-10 dark:bg-dark-black w-12 border-r-2 h-screen fixed">
      <div className="flex h-20">
        {currentTheme === "dark" ? (
          <Image
            src="/images/logo.png"
            alt="onebox logo"
            width={80}
            height={80}
            className="w-10 scale-125  mx-auto object-contain"
          />
        ) : (
          <Image
            src="/images/logo-black.png"
            alt="onebox logo"
            width={40}
            height={40}
            className="w-10 px-1 -mt-1 mx-auto object-contain"
          />
        )}
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {navItems.map((item) => (
          <Link href={item.link} key={item.name}>
            <Image
              src={item.icon}
              alt={item.name}
              width={80}
              height={80}
              className="w-8 mx-auto"
            />
          </Link>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="w-8 mx-auto h-8 bg-green-900 rounded-full"></div>
      </div>
    </aside>
  );
}

export default SideBar;
