import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../service/themecontext/ThemeContext";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { TranslationContext } from "../../service/traslationContext/TranslationContext";
import { AuthContext } from "../../service/authContext/AuthContext";
import { useNavigate } from "react-router-dom";

import useTranslation from "../custom/useTranslation/UseTranslation";
import LogOut from "../logOut/LogOut";

const Navbar = ({ children }) => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const { language, changeLanguageHandler } = useContext(TranslationContext); // Usa TranslationContext aquí
  const { isLogging } = useContext(AuthContext);

  const translate = useTranslation();
  const navigate = useNavigate();
  const role = localStorage.getItem("Role")
  const [rolePassengerRight, setRolePassengerRight] = useState(true)
  const [roleDriverRight, setRoleDriverRight] = useState(true)
  const [selectRoute, setSelectRoute] = useState("")

  const handleSelect = (event) => {
    const route = event.target.value;
    setSelectRoute(route);

    navigate(route);
  }


  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguageHandler(selectedLanguage); // Cambia el idioma usando el contexto
  };

  useEffect(() => {
    if (role === "Passenger") {
      setRolePassengerRight(prevRolePassenger => !prevRolePassenger)
      setRoleDriverRight(false)
      console.log("setRole")

    }
    else if (role === "Driver") {
      setRoleDriverRight(prevRoleDriver => !prevRoleDriver)
      setRolePassengerRight(false)

    }
  }, [role])


  return (
    <div className="register-admin-main-container">
      <div className="navbar-container">
        <h2
          className="text-warning"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          RoTaxi
        </h2>
        
        {isLogging != null && <select name="burger-menu" className="btn btn-light" value={selectRoute} onChange={handleSelect}>
            <option className="btn btn-secondary">Menú</option>
            <option className="btn btn-light" value={"/ProfileSettings"}>{translate("config")}</option>

            {(rolePassengerRight || role === "SuperAdmin") && isLogging != null && <option className="btn btn-light" value={"/OrderTaxi"}>{translate("order-taxi")}</option>}
            {(rolePassengerRight || role === "SuperAdmin") && isLogging != null && <option className="btn btn-light" value={"/rides"}>{translate("history-rides")}</option>}

            {(roleDriverRight || role === "SuperAdmin") && isLogging != null && <option className="btn btn-light" value={"/DriverScreen"}>{translate("list-rides")}</option>}

            {role === "SuperAdmin" && isLogging != null && <option className="btn btn-light" value={"/registerAdmin"}>{translate("registerAdmin")}</option>}
            {role === "SuperAdmin" && isLogging != null && <option className="btn btn-light" value={"/ListUsers"}>{translate("user")}</option>}
        </select>}



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
          {isLogging != null && <LogOut />}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
