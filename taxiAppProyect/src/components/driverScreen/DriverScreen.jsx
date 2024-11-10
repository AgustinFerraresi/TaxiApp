import { availableTrips } from "../data/Data";
import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import Button from "react-bootstrap/Button";
import "./DriverScreen.css";
import Navbar from "../navbar/Navbar";
import useTranslation from "../custom/useTranslation/UseTranslation";
import { jwtDecode } from "jwt-decode";

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
  const token = localStorage.getItem("token");

  const tokenDecoded = jwtDecode(token);
  const userName = tokenDecoded.Name;

  const userRole = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const getAllRides = async () => {
      try {
        const response = await fetch(`https://localhost:7179/api/Ride/GetAll`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.log("error en getAll rides");
          alert("Error al cargar los viajes");
          throw new Error("Error al buscar al user");
        }
        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllRides();
  }, []);

  return (
    <div className="driver-screen-main-container">
      <header className="navbar-DriverScreen">
        <Navbar />
      </header>

      <div id="driver-screen-card-container">
        <div id="driver-screen-header-section">
          <h2>{userName}</h2>
        </div>

        <div className="driver-screen-table-container">
          <h5>{translate("available_trips")}</h5>
          <ListItem
            className="driver-screen-list"
            list={rides}
            userId={userId}
          />
        </div>
      </div>
    </div>
  );
};

export default DriverScreen;
