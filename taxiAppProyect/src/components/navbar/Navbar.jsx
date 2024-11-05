import { useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../service/themecontext/ThemeContext";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { TranslationContext } from "../../service/traslationContext/TranslationContext";
import useTranslation from "../custom/useTranslation/UseTranslation";

const Navbar = ({ children }) => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const { language, changeLanguageHandler } = useContext(TranslationContext);

  const translate = useTranslation();

  const changeLanguage = (event) => {
    changeLanguageHandler(event.target.value);
  };
  if (!theme) {
    console.error("El tema es nulo o indefinido");
    return null; // O un mensaje alternativo
  }
  return (
    <div className="contendor-principal">
      <div className="navbar-container">
        <img
          src="../../../public/logo.png"
          alt="logo"
          className="imagen_logo"
        />
        <h2
          className="text-warning"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          RoTaxi
        </h2>
      </div>
      <div className="Contenedor-iconos">
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
            onChange={changeLanguage}
            aria-label="Select language"
          >
            <option value="es">{translate("spanish_lang")}</option>
            <option value="en">{translate("english_lang")}</option>
          </select>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Navbar;
