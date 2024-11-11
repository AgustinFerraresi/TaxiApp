import { useState } from "react";
import useTranslation from "../custom/useTranslation/UseTranslation";
const DataItemDriver = ({ index,user }) => {


  const handleDelete = async () => {
    console.log("este es el Driver",user)
      try {
        const driverDeleteResponse = await fetch(`https://localhost:7179/api/Driver/deleteDriverbyAdmin/${user.id}`,{
          method:"DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        
        if (!driverDeleteResponse.ok) {
          console.log("error en la eliminacion de un driver");
          alert("error al eliminar")
          throw new Error("error en la eliminacion de un driver");   
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
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><button className="delete-button" onClick={handleDelete}>{translate("delete")}</button></td>
    </tr>
  );

};
export default DataItemDriver;
