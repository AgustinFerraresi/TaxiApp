import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ThemeContext } from "../../service/themecontext/ThemeContext";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { TranslationContext } from "../../service/traslationContext/TranslationContext";
import { AuthContext } from "../../service/authContext/AuthContext";

import useTranslation from "../custom/useTranslation/UseTranslation";
import LogOut from "../logOut/LogOut";

const Navbar = ({ children }) => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const { language, changeLanguageHandler } = useContext(TranslationContext); // Usa TranslationContext aquí
  const { isLogging } = useContext(AuthContext);

  const translate = useTranslation();
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguageHandler(selectedLanguage); // Cambia el idioma usando el contexto
  };
  const clickLinkHandler = () => {
    navigate("/");
  };
  return (
    
    <div className="register-admin-main-container">
      <div className="navbar-container">
        <h2
          className="text-warning"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          RoTaxi
        </h2>

      </div>

      <div className="register-admin-items-container">
        <button
          className="theme-toggle"
          onClick={() =>
            handleToggleTheme(theme === "LIGHT" ? "DARK" : "LIGHT")
          }
          aria-label="Toggle theme"
        >
          {theme === "LIGHT" ? (
            <FaSun className="icon-sun" />
          ) : (
            <MdNightlight />
          )}
        </button>

        <div className="language-selector">
          <label
            htmlFor="languageSelect"
            aria-label="Language selector"
          ></label>
          <select
            id="languageSelect"
            value={language}
            aria-label="Select language"
            onChange={handleLanguageChange}
          >
            <option value="es">{translate("spanish_lang")}</option>
            <option value="en">{translate("english_lang")}</option>

          </select>

        </div>
        <div className="cerrar-sesion">
          { isLogging && <LogOut />}
        </div>
      </div>
      {children}
      
    </div>
  );
};

export default Navbar;
