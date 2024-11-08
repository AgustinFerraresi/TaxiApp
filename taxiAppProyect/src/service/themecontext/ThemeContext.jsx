import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const themeValue = localStorage.getItem("theme");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue ?? "LIGHT");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme.toLowerCase());
  }, [theme]);

  const handleToggleTheme = (newTheme) => {
    const themeToSet = newTheme === "DARK" ? "dark" : "light";
    document.documentElement.setAttribute("theme", themeToSet);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
