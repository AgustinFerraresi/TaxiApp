import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataItem from "./DataItem";
import Navbar from "../navbar/Navbar";
import "./DataList.css";
import useTranslation from "../custom/useTranslation/UseTranslation";

const DataList = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [driverList,setDriverList] = useState([]);


//   const handleDelete = await() => {
//   if (user.available != null) {


//     const response = await fetch(`https://localhost:7179/api/Driver/${userId}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           'Authorization': `Bearer ${localStorage.getItem("token")}`
//         },

//       });

//     if (!response.ok) {
//       alert("Error al eliminar la cuenta");
//       console.log("error en la eliminacion del pasajero");
//       throw new Error('Error en la eliminacion del pasajero');
//     }

//     alert("Cuenta eliminada exitosamente!");
//     localStorage.clear("token");
//     navigate("/");

//   }
// };

//https://localhost:7179/api/Driver

//https://localhost:7179/api/Passenger

//https://localhost:7179/api/SuperAdmin/GetAdmins




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
      const drivers = await driverResponse.json();
      setDriverList(drivers)

      const passengerResponse = await fetch(`https://localhost:7179/api/Passenger`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!passengerResponse.ok) throw new Error("Error en los passengers");

      const passengers = await passengerResponse.json();

      const adminResponse = await fetch(`https://localhost:7179/api/SuperAdmin/GetAdmins`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!adminResponse.ok) throw new Error("Error en los admins");
      const admins = await adminResponse.json();

      setUsers((prev) => [...prev, ...drivers, ...passengers, ...admins]);
      console.log(users)
    } catch (error) {
      console.error(error);
    }
  };


  fetchData();
}, []);






const navigate = useNavigate();
const translate = useTranslation();
const HandleAddUser = () => {
  navigate("/registerAdmin");
};

return (
  <div id="data-list-main-container">
    <Navbar />
    <div className="users-list-data-list">
      <h2>{translate("user")}</h2>
      <button className="add-button" onClick={HandleAddUser}>{translate("add User")}</button>

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
            {users.map((user, index) => (              
              <DataItem
                key={index}
                user={user}
                drivers={driverList}
                // admins={admins}
                // passengers={passengers}
              />,
              console.log(user)
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

export default DataList;



// const handlerPermanentAccountDelete = async () => {
//   console.log("Eliminando cuenta para:", userId, userRole); // Agregar log para verificar

//   try {
//     if (userRole === "Passenger") {
//       const response = await fetch(`https://localhost:7179/api/Passenger/${userId}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             'Authorization': `Bearer ${localStorage.getItem("token")}`
//           },

//         });

//       if (!response.ok) {
//         alert("Error al eliminar la cuenta");
//         console.log("error en la eliminacion del pasajero");
//         throw new Error('Error en la eliminacion del pasajero');
//       }

//       alert("Cuenta eliminada exitosamente!");
//       localStorage.clear("token");
//       navigate("/");
//     }



//     if (userRole === "SuperAdmin") {
//       const response = await fetch(`https://localhost:7179/api/SuperAdmin/DeleteSuperAdmin`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             'Authorization': `Bearer ${localStorage.getItem("token")}`
//           },
//           body: JSON.stringify(userId)
//         });

//       if (!response.ok) {
//         alert("Error al eliminar la cuenta");
//         console.log("error en la eliminacion del pasajero");
//         throw new Error('Error en la eliminacion del pasajero');
//       }

//       alert("Cuenta eliminada exitosamente!");
//       localStorage.clear("token");
//       navigate("/");
//     }


//   } catch (error) {
//     console.log(error);
//   }
// }

