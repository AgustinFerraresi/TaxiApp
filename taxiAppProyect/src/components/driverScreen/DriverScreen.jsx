import { availableTrips } from "../data/Data";
import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Button from "react-bootstrap/Button";
import "./DriverScreen.css";
import Navbar from "../navbar/Navbar";
import useTranslation from "../custom/useTranslation/UseTranslation";

const DriverScreen = () => {
  const [service, setService] = useState("start_service");
  const translate = useTranslation();
  const handlerService = () => {
    if (service === "start_service") {
      setService("end_service");
    } else {
      setService("start_service");
    }
  };

  const buttonVariant = service === "start_service" ? "success" : "danger";

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
              {translate("edit_profile")}
            </Button>
          </div>
          <div className="contenedor-imagen">
            <h2>{translate("driver_name")}</h2>
          </div>
        </div>

        <div id="driver-screen-button-container">
          <Button
            className="driver-screen-buttons"
            onClick={handlerService}
            variant={buttonVariant}
          >
            {translate(service)}
          </Button>
        </div>

        <div className="driver-screen-container">
          <h5>{translate("available_trips")}</h5>
          <ListItem list={availableTrips} />
        </div>
      </div>
    </div>
  );
};

export default DriverScreen;
