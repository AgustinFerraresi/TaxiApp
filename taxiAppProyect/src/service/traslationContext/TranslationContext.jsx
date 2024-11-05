import { createContext, useState } from "react";

export const TranslationContext = createContext();

const tValue = localStorage.getItem("translation");

export const TranslationContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(tValue ?? "es");
  console.log("este es el valor del estado language",language);

  const changeLanguageHandler = (newLang) => {
    console.log(`Changing language to: ${newLang}`);
    setLanguage(newLang);
    localStorage.setItem("translation", newLang);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguageHandler }}>
      {children}
    </TranslationContext.Provider>
  );
};
