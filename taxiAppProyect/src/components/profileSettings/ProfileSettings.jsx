import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./ProfileSettings.css";


const ProfileSettings = () => {
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);  
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [user,setUser] = useState({    
    name : "",
    email : "",
    dni : ""
  });

  const handleUserName = (event) =>{
    setUser({...user,name : event.target.value});
  }

  const handleUserEmail = (event) =>{
    setUser({...user,email : event.target.value});
  }

  const handleUserDni = (event) =>{
    setUser({...user,dni : event.target.value});
  }

  const handleEditAccount = () =>{
    setEnableEdit(prevValue => !prevValue)
  }

  const handlerDeleteAccount = () => {
    setDeleteAccount(prevValue => !prevValue);
  }

  const handleSendEdit =  async () => {
    const userToUpdate = {
      name : user.name,
      email : user.email,
      password: null,
      dni : user.dni,
      Description : ""
    }

    if (userRole === "Passenger") {
      try {
        const response = await fetch(`https://localhost:7179/api/Passenger/${userId}`,
          {
            method:"PUT",
            headers: { 
              "Content-Type": "application/json", 
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(userToUpdate)
          }
        )
  
        if (!response.ok) {
          alert("Error al actualizar la cuenta");
          console.log("error al actualizar ");
          throw new Error('Error al actualizar');
        }
        alert("Actualizacion exitosa!");
        handleEditAccount();
  
      } catch (error) {
        console.log(error)
      }
    }

    if (userRole === "Driver") {
      try {
        const response = await fetch(`https://localhost:7179/api/Driver/UpdateDriver/${userId}`,
          {
            method:"PUT",
            headers: { 
              "Content-Type": "application/json", 
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(userToUpdate)
          }
        )
  
        if (!response.ok) {
          alert("Error al actualizar la cuenta");
          console.log("error al actualizar ");
          throw new Error('Error al actualizar');
        }
        alert("Actualizacion exitosa!");
        handleEditAccount();
  
      } catch (error) {
        console.log(error)
      }
    }

    if (userRole === "SuperAdmin") {
      try {
        const response = await fetch(`https://localhost:7179/api/SuperAdmin/UpdateSuperAdmin/id/${userId}`,
          {
            method:"PUT",
            headers: { 
              "Content-Type": "application/json", 
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(userToUpdate)
          }
        )
  
        if (!response.ok) {
          alert("Error al actualizar la cuenta");
          console.log("error al actualizar ");
          throw new Error('Error al actualizar');
        }
        alert("Actualizacion exitosa!");
        handleEditAccount();
  
      } catch (error) {
        console.log(error)
      }
    }
  }



  const userRole = localStorage.getItem("Role");
  const userId = localStorage.getItem("userId");

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
        window.location.reload();

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

  useEffect( () => {
    const fetchUserData = async () => {
      try {
        console.log(userId);
        console.log(userRole);
        let url = '';

        if (userRole === "SuperAdmin") {
          url = `https://localhost:7179/api/SuperAdmin/GetAdminById/id/${userId}`;
        } else if (userRole === "Passenger") {
          url = `https://localhost:7179/api/Passenger/id/${userId}`;
        } else if (userRole === "Driver") {
          url = `https://localhost:7179/api/Driver/id/${userId}`;
        }

        const response = await fetch(url, {
          headers: { 
            "Content-Type": "application/json", 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
        });

        if (!response.ok) {
          throw new Error("Error al buscar al user");
        }

        const data = await response.json();
        setName(data.name)
        setUser({
          name : data.name,
          email : data.email,
          dni : data.dni
        });

      } catch (error) {
        console.error("Error:", error);
      }
    };
  fetchUserData();
  },[])
  console.log("este es el user",user);
  return (
    <div className="profile-settings-main-container">
      <header className="header-nav"><Navbar /></header>

      <div id="profile-settings-container">
        <form action="" className="profile-settings-form">

          <div id="profile-settings-img-container">
            <h3>{name}</h3>
            <h6>Rol: {userRole}</h6> 
            {/* El rol se tiene que traducir dependiendo del idioma  */}
          </div>

          <div id="profile-settings-generic-user-data-container">
            <label htmlFor="" className="general-info">Nombre:</label>
            <input type="text"  disabled={!enableEdit} value={user.name} onChange={handleUserName} />

            <label htmlFor="" className="profile-settings-general-info"  >Email:</label>
            <input type="email"  disabled={!enableEdit} value={user.email}  onChange={handleUserEmail}/>

            <label htmlFor="" className="profile-settings-general-info" >Dni:</label>
            <input type="numeric"  disabled={!enableEdit}  value={user.dni} onChange={handleUserDni}/>

          </div>


          {!deleteAccount && !enableEdit  &&
          <div className="profile-settings-buttons-container">
            <Button variant="warning" className="profile-settings-button" onClick={handleEditAccount}>Editar</Button>
            <Button variant="danger" className="profile-settings-button" onClick={handlerDeleteAccount}>Eliminar cuenta</Button>
          </div>}


          {enableEdit && 
          <div className="profile-settings-buttons-container">
            <Button className="profile-settings-button" onClick={handleSendEdit}> Aceptar </Button>
            <Button className="profile-settings-button" variant="secondary" onClick={handleEditAccount}> Cancelar </Button>
          </div> 
          }


          {deleteAccount && (
            
            <Modal show={handlerDeleteAccount} onHide={handlerDeleteAccount}>
              <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
              </Modal.Header>

              <Modal.Body>Estas seguro que quieres eliminar tu cuenta? Esta acciÃ³n es permanente!</Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handlerDeleteAccount}>Cancelar</Button>
                <Button variant="danger" onClick={handlerPermanentAccountDelete}>Eliminar</Button>
              </Modal.Footer>
            </Modal>
          )}


        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;