import { Button} from "react-bootstrap";
import useTranslation from "../custom/useTranslation/UseTranslation";
import "./ListItem.css";
import { useState } from "react";

const ListItem = ({ list,userId }) => {
    const translate = useTranslation();
    const [onRide,setOnRide] = useState({})

    const handleAcceptRide = async (rideId) => {
        try {
            const response = await fetch(`https://localhost:7179/api/Driver/TakeARide/${userId}/${rideId}`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                  }
                })

                if (!response.ok) {
                    console.log("error en aceptar el viaje");
                    alert("error en aceptar el viaje");
                    throw new Error("error en aceptar el viaje");
                }

            setOnRide((prevState) => ({ ...prevState, [rideId]: true })); // Activar solo el viaje actual

        } catch (error) {
            
        }
    }


    const handleEndRide = async (rideId) => {
        try {
            const response = await fetch(`https://localhost:7179/api/Driver/FinishRide/${userId}`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                  }
                })

                if (!response.ok) {
                    console.log("error en cancelar el viaje");
                    alert("error en cancelar el viaje");
                    throw new Error("error en cancelar el viaje");
                }

            setOnRide((prevState) => ({ ...prevState, [rideId]: false })); // Desactivar solo el viaje actual
            
        } catch (error) {
            
        }
    }


    return (
        <div id="container-list-items">
            <li>
                <h6>{translate("passenger")}</h6>
                <h6>{translate( "from")}</h6>
                <h6>{translate("to")}</h6>
                <h6>mensaje</h6>
                <h6>Metodo de pago</h6>
            </li>
            {list.map((trip) => (
                <li key={trip.id}>
                    <span>{trip.passenger}</span>
                    <span>{trip.location}</span>
                    <span>{trip.destination}</span>
                    <span>{trip.message}</span>
                    <span>{trip.paymentMethod}</span>
                    {!onRide[trip.id] ? 
                    <span><Button variant="success" onClick={() => handleAcceptRide(trip.id)}>{translate("accept")}</Button></span> 
                    :
                    <span><Button variant="danger" onClick={() => handleEndRide(trip.id)}>{translate("cancel")}</Button></span>
                    }
                </li>
            ))}
        </div>
    );
}
export default ListItem;