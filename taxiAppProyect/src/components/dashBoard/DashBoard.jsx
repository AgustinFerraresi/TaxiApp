

import { useNavigate } from "react-router-dom";
import "./DashBoard.css"
import Button from 'react-bootstrap/Button';

const DashBoard = () => {

    // const navigate = useNavigate();

    // const ButtonHandler = () => {
    //     navigate("/login");
    // }

    return (
        <div id="dashboard-container">
            <div id="">
                <div class="dashboard-container-main">
                    <img src="./src/assets/logo.png" alt="" />
                    <h2>Rotaxi</h2> <br />
                    <h2>Es hora de viajar, es hora de pedir un taxi</h2>
                    <h3>Dejanos ayudarte</h3>
                    <Button variant="warning">Iniciar sesión</Button>
                </div>
            </div>
        </div>


    );
}



export default DashBoard;