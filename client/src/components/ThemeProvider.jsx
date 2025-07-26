import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
  const root = window.document.documentElement;

  const applyTheme = (themeValue) => {
    root.classList.remove("light", "dark");

    if (themeValue === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(systemPrefersDark ? "dark" : "light");
    } else {
      root.classList.add(themeValue);
    }
  };

  applyTheme(theme);

  // Listen to system theme changes only if theme is set to 'system'
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const systemThemeChangeHandler = (e) => {
    if (theme === "system") {
      applyTheme("system"); // re-evaluate system theme
    }
  };

  if (theme === "system") {
    mediaQuery.addEventListener("change", systemThemeChangeHandler);
  }

  // Cleanup
  return () => {
    mediaQuery.removeEventListener("change", systemThemeChangeHandler);
  };
}, [theme]);


//   useEffect(() => {
//     const root = window.document.documentElement;

//     root.classList.remove("light", "dark");

//     if (theme === "system") {
//       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//         .matches
//         ? "dark"
//         : "light";

//       root.classList.add(systemTheme);
    
//       return;
//     }

//     root.classList.add(theme);
//   }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};