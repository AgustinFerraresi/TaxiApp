import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    const handlerLogOut = () => {
        localStorage.clear("token");
        navigate("/");
    }

    return <Button variant='danger' onClick={handlerLogOut}>Cerrar sesion</Button>
}

export default LogOut;