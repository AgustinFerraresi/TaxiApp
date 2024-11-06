import { Button} from "react-bootstrap";
import useTranslation from "../custom/useTranslation/UseTranslation";
import "./ListItem.css";

const ListItem = ({ list }) => {
    const translate = useTranslation();
    return (
        <div id="container-list-items">
            <li>
                <h6>{translate("passenger")}</h6>
                <h6>{translate( "from")}</h6>
                <h6>{translate("to")}</h6>
            </li>
            {list.map(trip => (
                <li>
                    <span>{trip.passanger}</span>
                    <span>{trip.pickup}</span>
                    <span>{trip.destination} </span>
                    <span>{trip.cost ? `Tarifa: $${trip.cost}` : <Button variant="success">{translate("accept")}</Button>} </span>
                </li>
            ))}
        </div>
    );
}
export default ListItem;