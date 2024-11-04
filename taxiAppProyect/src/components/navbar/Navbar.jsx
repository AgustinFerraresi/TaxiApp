import { useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../service/themecontext/ThemeContext";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";

const Navbar = ({ children }) => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

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
          <select id="languageSelect" aria-label="Select language">
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
