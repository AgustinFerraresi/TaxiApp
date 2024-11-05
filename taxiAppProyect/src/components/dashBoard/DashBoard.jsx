import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Button from "react-bootstrap/Button";
import "./DashBoard.css";

const DashBoard = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/login");
  };

  return (
    <div id="dashboard-container">
      <header style={{ width: "100vw" }}>
        <Navbar />
      </header>
      <div className="dashboard-container-main">
        <h2>Es hora de viajar, es hora de pedir un taxi</h2>
        <h3>Dejanos ayudarte</h3>
        <Button variant="warning" onClick={buttonHandler}>
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
};

export default DashBoard;
