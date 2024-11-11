import { useState } from "react";
import useTranslation from "../custom/useTranslation/UseTranslation";
const DataItem = ({ user,drivers }) => {
  

  const handleDelete = async (user) => {
    console.log("este es el user",user)
    if (drivers.includes(user)){
      try {
        const driverDeleteResponse = await fetch(`https://localhost:7179/api/Driver/${user.id}`,{
          method:"DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        
        if (!driverDeleteResponse.ok) {
          console.log("error en la eliminacion de un driver");
          
          throw new Error("error en la eliminacion de un driver");   
        }

        alert("eliminado correctamente")


      } catch (error) {
        console.log(error)
      }
    }


    // if (drivers.includes(passengers)) {
    //   try {
    //     const passengerDeleteResponse = await fetch(`https://localhost:7179/api/Passenger/${user.id}`,{
    //       method:"DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     })
        
    //     if (!passengerDeleteResponse.ok) {
    //       console.log("error en la eliminacion de un pasajero");
          
    //       throw new Error("error en la eliminacion de un pasajero");   
          
    //     }

        


    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // else{
    //   try {
    //     const adminDeleteResponse = await fetch(`https://localhost:7179/api/SuperAdmin/DeleteSuperAdmin`,{
    //       method:"DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //       body: JSON.stringify(user.id)
    //     })
        
    //     if (!adminDeleteResponse.ok) {
    //       console.log("error en la eliminacion de un admin");
          
    //       throw new Error("error en la eliminacion de un admin");   
          
    //     }
  
        
  
  
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }



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

export default DataItem;