import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataItem from "./DataItem";
import DataItemDriver from "./DataItemDriver";
import DataItemPassenger from "./DataItemPassenger";
import Navbar from "../navbar/Navbar";
import "./DataList.css";
import useTranslation from "../custom/useTranslation/UseTranslation";

const DataList = () => {
  const navigate = useNavigate();
  const translate = useTranslation();


  const [drivers, setDrivers] = useState([]);
  const [passengers, setPassengers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const driverResponse = await fetch(`https://localhost:7179/api/Driver`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        if (!driverResponse.ok) throw new Error("Error en los drivers");
        setDrivers(await driverResponse.json())


  
        const passengerResponse = await fetch(`https://localhost:7179/api/Passenger`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        if (!passengerResponse.ok) throw new Error("Error en los passengers");
  
        setPassengers(await passengerResponse.json())
  
        const adminResponse = await fetch(`https://localhost:7179/api/SuperAdmin/GetAdmins`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        if (!adminResponse.ok) throw new Error("Error en los admins");
        setAdmins(await adminResponse.json())
        // setUsers((prev) => [...prev, ...drivers, ...passengers]);
        // console.log(users)
      } catch (error) {
        console.error(error);
      }
    };
  
  
    fetchData();
  }, []);

  

return (
  <div id="data-list-main-container">
    <Navbar />
    <div className="users-list-data-list">
      <h2>{translate("user")}</h2>


      <div id="data-list-table-container">
        <table id="data-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>{translate("name")}</th>
              <th>{translate("email")}</th>
              <th>{translate("action")}</th>
            </tr>
          </thead>

          <tbody>

            {/* Lista de admins */}
            {admins.map((userA) => (
              <DataItem
                key={userA.id}
                user={userA}
              />
              
            ))}

            {/* Lista de Drivers */}

            {drivers.map((userD) => (
              <DataItemDriver
              key={userD.id}
              user={userD}
            />
          ))}

            

            {/* Lista de Pasajeros */}

            {passengers.map((userP) => (
              <DataItemPassenger
              key={userP.id}
              user={userP}
            />
          ))}

              
            
            
            
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
);
};

export default DataList;
