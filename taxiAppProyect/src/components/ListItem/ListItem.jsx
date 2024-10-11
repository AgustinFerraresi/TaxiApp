import { Button} from "react-bootstrap";
import "./ListItem.css";

const ListItem = ({ list }) => {
    return (
        <div id="container-list-items">
            <li>
                <h6>Pasajero</h6>
                <h6>Desde</h6>
                <h6>Hasta</h6>
                <h6></h6>
            </li>
            {list.map(trip => (
                <li>
                    <span>{trip.passanger}</span>
                    <span>{trip.pickup}</span>
                    <span>{trip.destination} </span>
                    <span>{trip.cost ? `Tarifa: $${trip.cost}` : <Button variant="success">Aceptar</Button>} </span>
                </li>
            ))}
        </div>
    );
}
export default ListItem;