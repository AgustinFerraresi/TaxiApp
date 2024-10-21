import { availableTrips, yourTrips } from "../data/Data"
import { useState } from "react";

import ListItem from "../ListItem/ListItem";
import Button from 'react-bootstrap/Button';

import "./DriverScreen.css"


const DriverScreen = () => {

    const [service,setService] = useState("PONERSE EN SERVICIO");

    const handlerService = () => {
        if (service === "PONERSE EN SERVICIO") {
            setService("TERMINAR SERVICIO");
        }
        else
        {
            setService("PONERSE EN SERVICIO")    
        } 
    }

    const buttonVariant = service === "PONERSE EN SERVICIO" ? "success" : "danger";


    return (
        <div id="driver-screen-card-container">
            <div className="buttons">
                <Button className="driver-screen-buttons" variant="warning">Editar perfil</Button>
                <Button className="driver-screen-buttons" variant="danger">Cerrar sesión</Button>
            </div>
            <div id="driver-screen-img-container">
                <img src="./src/assets/fotoPerfilPrueba.png" id="profile-picture" alt="profile-picture"/>
                <h2>Nombre del chofer</h2>
            </div>

            <div id="driver-screen-button-container">
                <Button className="driver-screen-buttons" onClick={handlerService} variant={buttonVariant}>{service}</Button>
            </div>

            <div className="driver-screen-container">
                <h5>Viajes disponibles</h5>
                <ListItem list={availableTrips}/>
                
                <h5>Tus viajes realizados</h5>
                <ListItem list={yourTrips}/>
            </div>
        </div>
    );
};

export default DriverScreen;