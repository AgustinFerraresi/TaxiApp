import { availableTrips, yourTrips } from "../data/Data"

import ListItem from "../ListItem/ListItem";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./DriverScreen.css"
import { useState } from "react";

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
        <div id="card-container">
            <div id="img-container">
                <img src="./src/assets/fotoPerfilPrueba.png" id="profile-picture" alt="profile-picture"/>
                <h2>Nombre del chofer</h2>
            </div>

            <div id="button-container">                
                <Button onClick={handlerService} variant={buttonVariant}>{service}</Button>
            </div>

            <div className="container">
                <h5>Viajes disponibles</h5>
                <ListItem list={availableTrips}/>
                <h5>Tus viajes realizados</h5>
                <ListItem list={yourTrips}/>
            </div>
        </div>
    );
};

export default DriverScreen


// <div>
// <h2>Tus viajes realizados</h2>
// <ListItem yourTrips={yourTrips} />
// </div>