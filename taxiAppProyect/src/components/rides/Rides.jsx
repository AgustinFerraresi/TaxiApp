import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "../navbar/Navbar";
import "../rides/Rides.css";
import useTranslation from "../custom/useTranslation/UseTranslation";

function Rides() {
  const translate = useTranslation();
  const [rides, setRides] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getRides = async () => {
      try {
        const response = await fetch(
          `https://localhost:7179/api/Ride/GetRidesByPassenger/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error en traer los viajes del pasajero");
        }
        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRides();
  }, []);

  return (
    <div className="rides-main-container">
      <Navbar />
      <div className="rides-table-container">
        <Table striped bordered hover className="passenger-rides-table">
          <thead>
            <tr>
              <th>{translate("from")}</th>
              <th>{translate("to")}</th>
              <th>{translate("date")}</th>
              <th>{translate("payment_Method")}</th>
              <th>{translate("message")}</th>
            </tr>
          </thead>
          <tbody>
            {rides.length > 0 ? (
              rides.map((ride, index) => (
                <tr key={index}>
                  {" "}
                  {/* Usa `ride.id` si existe como identificador Ãºnico */}
                  <td>{ride.location}</td>
                  <td>{ride.destination}</td>
                  <td>{ride.date.slice(0, 10)}</td>
                  <td>{ride.paymentMethod}</td>
                  <td>{ride.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">{translate("no-trips")} </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Rides;
