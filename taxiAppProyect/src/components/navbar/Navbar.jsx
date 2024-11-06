
import { useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../service/themecontext/ThemeContext";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { TranslationContext } from "../../service/traslationContext/TranslationContext";

const Navbar = ({ children }) => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const { language, changeLanguageHandler } = useContext(TranslationContext); // Usa TranslationContext aquí

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguageHandler(selectedLanguage); // Cambia el idioma usando el contexto
  };
  
  return (
    
    <div className="register-admin-main-container">
      <div className="navbar-container">
        <h2 className="text-warning" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>RoTaxi</h2>
      </div>

      <div className="register-admin-items-container">
        <button
          className="theme-toggle"
          onClick={() =>
            handleToggleTheme(theme === "LIGHT" ? "DARK" : "LIGHT")
          }
          aria-label="Toggle theme">
          {theme === "LIGHT" ? (
            <FaSun className="icon-sun" />
          ) : (
            <MdNightlight />
          )}
        </button>

        <div className="language-selector">
          <label htmlFor="languageSelect" aria-label="Language selector"></label>
          <select id="languageSelect" aria-label="Select language" onChange={handleLanguageChange}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>

        </div>
      </div>

      {children}
      
    </div>
  );
};

export default Navbar;
