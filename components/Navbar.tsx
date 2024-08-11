import React from "react";
import ThemeSwitcher from "./ThemeSwithcher";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const workspaces = [
    "Tim's Workspace",
    "John's Workspace",
    "Jane's Workspace",
  ];
  return (
    <header className="z-20 pl-12 h-16 w-full flex items-center bg-white dark:bg-semi-black border-b-2 fixed">
      <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-lg text-dark-grey dark:text-semi-grey">
            Onebox
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <ThemeSwitcher />
          <Select defaultValue={workspaces[0]}>
            <SelectTrigger className="w-[180px] !justify-center gap-3 !bg-transparent !border-none !outline-none">
              <SelectValue defaultValue={workspaces[0]} />
            </SelectTrigger>
            <SelectContent>
              {workspaces.map((workspace) => (
                <SelectItem value={workspace} key={workspace}>
                  {workspace}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
