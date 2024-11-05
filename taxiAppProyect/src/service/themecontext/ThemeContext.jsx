import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const themeValue = localStorage.getItem("theme");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue ?? "LIGHT");

  // useEffect(() => {
  //   document.documentElement.setAttribute(
  //     "theme",
  //     themeValue.toLocaleLowerCase()
  //   );
  // }, []);

  const handleToggleTheme = (newTheme) => {
    if (newTheme === "DARK") {
      document.documentElement.setAttribute("theme", "dark");
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);

    } else if (newTheme === "LIGHT") {
      document.documentElement.setAttribute("theme", "light");
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);

    } else {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
