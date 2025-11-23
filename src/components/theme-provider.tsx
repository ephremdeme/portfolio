"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = React.PropsWithChildren<{
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
}>;

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  attribute = "data-theme",
  defaultTheme = "dark",
  enableSystem = true,
  storageKey = "theme",
}: ThemeProviderProps) {
  const getPreferredTheme = React.useCallback(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
    if (stored === "light" || stored === "dark") return stored;
    if (enableSystem && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return defaultTheme;
  }, [defaultTheme, enableSystem, storageKey]);

  const [theme, setTheme] = React.useState<Theme>(() => defaultTheme);

  React.useEffect(() => {
    setTheme(getPreferredTheme());
  }, [getPreferredTheme]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const nextTheme = theme === "dark" ? "dark" : "light";

    if (attribute === "class") {
      root.classList.remove(nextTheme === "dark" ? "light" : "dark");
      root.classList.add(nextTheme);
    } else {
      root.setAttribute(attribute, nextTheme);
    }

    root.style.setProperty("color-scheme", nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  }, [attribute, storageKey, theme]);

  const value = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
