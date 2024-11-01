import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h2 className="text-warning" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>RoTaxi</h2>

            <label class="theme-toggle">
                <input type="checkbox" id="themeCheckbox" />
                <span class="slider"></span>
            </label>

            <div class="language-selector">
                <label for="languageSelect">Idioma:</label>
                <select id="languageSelect">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
        </div>
    );
}


export default Navbar;