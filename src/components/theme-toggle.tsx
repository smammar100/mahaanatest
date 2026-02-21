"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const themes = ["light", "dark", "system"] as const;
type ThemeName = (typeof themes)[number];

function nextTheme(theme: ThemeName): ThemeName {
  const currentIndex = themes.indexOf(theme);
  return themes[(currentIndex + 1) % themes.length];
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = (theme ?? "system") as ThemeName;

  const icon =
    activeTheme === "light" ? (
      <Sun />
    ) : activeTheme === "dark" ? (
      <Moon />
    ) : (
      <Laptop />
    );

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      aria-label="Toggle theme"
      title={`Theme: ${activeTheme}`}
      onClick={() => setTheme(nextTheme(activeTheme))}
      disabled={!mounted}
    >
      {icon}
    </Button>
  );
}
