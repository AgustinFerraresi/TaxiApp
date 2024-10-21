import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
    const navigate = useNavigate()

    const menuHandler = () => {
        navigate("")
    }

    return(
        <div id="main-container">
            <h2>Upss... La página solicitada no fué encontrada</h2>
            <img src="./src/assets/mono Confundido.jpg" alt="" />
            <Button variant="warning" onClick={menuHandler}>Click aquí para volver al menú</Button>
        </div>
    );
}

export default PageNotFound;