import { useState } from "react";
import useTranslation from "../custom/useTranslation/UseTranslation";
const DataItemPassenger = ({index,user,onDelete}) => {


  const handleDelete = async () => {

     try {
        const passengerDeleteResponse = await fetch(`https://localhost:7179/api/Passenger/${user.id}`,{
          method:"DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        
        if (!passengerDeleteResponse.ok) {
          alert("error al eliminar")
          throw new Error("error en la eliminacion de un pasajero");   
          
        }

        alert("eliminado correctamente")
        window.location.reload();

      } catch (error) {
        console.log(error)
      }
    }
  const translate = useTranslation();
  return (
    <tr className="user-item">
      
      <td>{user.id}</td>
      <td>{translate("passenger")}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><button className="delete-button" onClick={handleDelete}>{translate("delete")}</button></td>
    </tr>
  );
};

export default DataItemPassenger;
