import { useState } from "react";
import useTranslation from "../custom/useTranslation/UseTranslation";
const DataItem = ({ user,drivers }) => {
  

  const handleDelete = async () => {
    try {
          const adminDeleteResponse = await fetch(`https://localhost:7179/api/SuperAdmin/DeleteSuperAdmin`,{
            method:"DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(user.id)
          })
          
          if (!adminDeleteResponse.ok) {
            console.log("error en la eliminacion de un admin");
            alert("error al eliminar")
            throw new Error("error en la eliminacion de un admin");   
            
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
      <td>{translate("manager")}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><button className="delete-button" onClick={handleDelete}>{translate("delete")}</button></td>
    </tr>
  );
};

export default DataItem;
