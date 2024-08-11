"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Switch } from "./ui/switch";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    function toggleTheme() {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    }
    return (
      <Switch
        checked={currentTheme === "light"}
        onCheckedChange={toggleTheme}
      />
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
