import { availableTrips } from "../data/Data";
import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Button from "react-bootstrap/Button";
import "./DriverScreen.css";
import Navbar from "../navbar/Navbar";

const DriverScreen = () => {
  const [service, setService] = useState("PONERSE EN SERVICIO");

  const handlerService = () => {
    if (service === "PONERSE EN SERVICIO") {
      setService("TERMINAR SERVICIO");
    } else {
      setService("PONERSE EN SERVICIO");
    }
  };

  const buttonVariant =
    service === "PONERSE EN SERVICIO" ? "success" : "danger";

  return (
    <div className="contenedor-principal">
      <header className="header-nav">
        <Navbar />
      </header>
      <div id="driver-screen-card-container">
        <div className="driver-container">
          <div className="buttons">
            <Button
              className="driver-screen-buttons text-black"
              variant="warning"
            >
              Editar perfil
            </Button>
            <Button
              className="driver-screen-buttons text-black"
              variant="danger"
            >
              Cerrar sesión
            </Button>
          </div>
          <div className="contenedor-imagen">
            <h2>Nombre del chofer</h2>
          </div>
        </div>

        <div id="driver-screen-button-container">
          <Button
            className="driver-screen-buttons"
            onClick={handlerService}
            variant={buttonVariant}
          >
            {service}
          </Button>
        </div>

        <div className="driver-screen-container">
          <h5>Viajes disponibles</h5>
          <ListItem list={availableTrips} />
        </div>
      </div>
    </div>
  );
};

export default DriverScreen;
