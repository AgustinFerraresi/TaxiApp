import { useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../theme/ThemeContext";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";

const Navbar = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar-container">
      <h2
        className="text-warning"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        RoTaxi
      </h2>
      <div className="Contenedor-iconos">
        <button
          className="theme-toggle"
          onClick={() =>
            handleToggleTheme(theme === "LIGHT" ? "DARK" : "LIGHT")
          }
          aria-label="Toggle theme"
        >
          {theme === "LIGHT" ? <FaSun /> : <MdNightlight />}
        </button>
      </div>
      <div className="language-selector">
        <label htmlFor="languageSelect"></label>
        <select id="languageSelect">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
