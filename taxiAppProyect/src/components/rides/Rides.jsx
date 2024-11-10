import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../navbar/Navbar';
import "../rides/Rides.css"

function Rides() {
    const [rides,setRides] = useState([]);
    const userId = localStorage.getItem("userId")
    useEffect( () => {
        const getRides = async () =>{
            try {
                const response = await fetch(`https://localhost:7179/api/Ride/GetRidesByPassenger/${userId}`,{
                    headers: { 
                        "Content-Type": "application/json", 
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
                
                if (!response.ok){
                    console.log("error en traer los viajes del pasajero");
                    throw new Error('Error en traer los viajes del pasajero');
                }
                const data = await response.json();
                setRides(data);
            } catch (error) {
                console.log(error);
            }
        }
        getRides();
    },[]);

    console.log("rides:", rides)
  return (
    <div className='rides-main-container'>
        <Navbar/>
        <div className='rides-table-container'>
        <Table striped bordered hover className='passenger-rides-table' >
          <thead>
            <tr>
              <th>Desde</th>
              <th>Hasta</th>
              <th>Fecha</th>
              <th>Metodo de pago</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {rides.length > 0 ? (
                rides.map((ride, index) => (
                    <tr key={index}> {/* Usa `ride.id` si existe como identificador Ãºnico */}
                        <td>{ride.location}</td>
                        <td>{ride.destination}</td>
                        <td>{ride.date.slice(0, 10)}</td>
                        <td>{ride.paymentMethod}</td>
                        <td>{ride.message}</td>
                    </tr>
            ))) 
            : (
                <tr>
                    <td colSpan="5">No hay viajes</td>
                </tr>
            )}
                </tbody>
        </Table>
        </div>
    </div>
  );
}

export default Rides;