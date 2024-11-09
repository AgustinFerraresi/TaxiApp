import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const DeleteAccount = ({userId, userRole}) =>{
    const navigate = useNavigate();


    const handlerPermanentAccountDelete = async () => {
        console.log("Eliminando cuenta para:", userId, userRole); // Agregar log para verificar
    
      try {
        if (userRole === "Passenger") {
          const response = await fetch(`https://localhost:7179/api/Passenger/${userId}`,
          {
            method: "DELETE",
            headers: { 
              "Content-Type": "application/json", 
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            
          });
    
          if (!response.ok) {
            alert("Error al eliminar la cuenta");
            console.log("error en la eliminacion del pasajero");
            throw new Error('Error en la eliminacion del pasajero');
          }
      
          alert("Cuenta eliminada exitosamente!");
          localStorage.clear("token");
          navigate("/");
        }
    
        if (userRole === "Driver") {
          const response = await fetch(`https://localhost:7179/api/Driver/${userId}`,
          {
            method: "DELETE",
            headers: { 
              "Content-Type": "application/json", 
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            
          });
    
          if (!response.ok) {
            alert("Error al eliminar la cuenta");
            console.log("error en la eliminacion del pasajero");
            throw new Error('Error en la eliminacion del pasajero');
          }
      
          alert("Cuenta eliminada exitosamente!");
          localStorage.clear("token");
          navigate("/");
        }
        

        if (userRole === "SuperAdmin") {
          const response = await fetch(`https://localhost:7179/api/SuperAdmin/DeleteSuperAdmin`,
          {
            method: "DELETE",
            headers: { 
              "Content-Type": "application/json", 
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(userId)
          });
    
          if (!response.ok) {
            alert("Error al eliminar la cuenta");
            console.log("error en la eliminacion del pasajero");
            throw new Error('Error en la eliminacion del pasajero');
          }
      
          alert("Cuenta eliminada exitosamente!");
          localStorage.clear("token");
          navigate("/");
        }
    
    
      } catch (error) {
        console.log(error);
      }
    }



    return(<><Button variant="danger" onClick={handlerPermanentAccountDelete}>Eliminar cuenta</Button></>)
}
export default DeleteAccount;