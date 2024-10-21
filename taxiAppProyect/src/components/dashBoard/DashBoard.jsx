

import { useNavigate } from "react-router-dom";
import "./DashBoard.css"
import Button from 'react-bootstrap/Button';

const DashBoard = () => {

    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate("/login");
    }

    return (
        <div id="dashboard-container">
            <div id="">
                <div class="dashboard-container-main">
                    <div className="d-flex justify-content-center align-items-center mb-4" style={{textAlign:"center", padding:"20px"}}>
                    <img src="./src/assets/logo.png" alt="" />
                    <h2 className="text-warning" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>RoTaxi</h2> <br />
                    </div>
                    <h2>Es hora de viajar, es hora de pedir un taxi</h2>
                    <h3>Dejanos ayudarte</h3>
                    <Button variant="warning" onClick={buttonHandler}>Iniciar sesión</Button>
                </div>
            </div>
        </div>


    );
}



export default DashBoard;