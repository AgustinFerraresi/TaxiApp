import { useNavigate } from "react-router-dom";
import useTranslation from "../custom/useTranslation/UseTranslation";
import Navbar from "../navbar/Navbar";
import Button from "react-bootstrap/Button";
import "./DashBoard.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const translate = useTranslation();
  
  const buttonHandler = () => {
    navigate("/login");
  };

  return (
    <div id="dashboard-container">
      <header style={{ width: "100vw" }}>
        <Navbar />
      </header>
      <div className="dashboard-container-main">
        <h2>{translate("travel_time")}</h2>
        <h3>Dejanos ayudarte</h3>
        <Button variant="warning" onClick={buttonHandler}>
          {translate("login")}
        </Button>
      </div>
    </div>
  );
};

export default DashBoard;
