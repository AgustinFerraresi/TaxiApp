import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const DeleteAccount = ({userId, userRole}) =>{
    const navigate = useNavigate();




    return(<><Button variant="danger" onClick={handlerPermanentAccountDelete}>Eliminar cuenta</Button></>)
}
export default DeleteAccount;