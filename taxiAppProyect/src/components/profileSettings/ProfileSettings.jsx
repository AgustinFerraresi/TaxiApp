import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import DeleteAccount from "../deleteAccount/DeleteAccount";
import "./ProfileSettings.css";

const ProfileSettings = ({ user }) => {
  const [deleteAccount, setDeleteAccount] = useState(false);

  const handlerDeleteAccount = () => {
    setDeleteAccount(prevValue => !prevValue);
    console.log(userId)
    console.log(userRole)
  }

  const userRole = localStorage.getItem("Role");
  const userId = localStorage.getItem("userId");



  return (
    <div className="contenedor-principal">
      <header className="header-nav"><Navbar /></header>

      <div id="profile-settings-container">
        <form action="" className="profile-settings-form">

          <div id="img-container">
            <img src="./src/assets/fotoPerfilPrueba.png" id="profile-settings-profile-picture" alt="profile-picture" />
            <h3>{user.name}</h3>
            <h6>Rol: {user.userType}</h6>
          </div>

          <div id="profile-settings-generic-user-data-container">
            <label htmlFor="" className="general-info">Nombre:
              <input type="text" value={user.name} readOnly />
            </label>

            <label htmlFor="" className="profile-settings-general-info">Email:
              <input type="text" value={user.email} readOnly />
            </label>

  
          </div>

          {user.vehicles && user.vehicles.length > 0 && (
            <div>
              <h4>Informacion del vehiculo</h4>
              {user.vehicles.map((vehicle, index) => (
                <div key={user.id} className="profile-settings-container-driver-container">
                  <label htmlFor=""> Marca <br />
                    <input type="text" value={vehicle.brand} readOnly />
                  </label>

                  <label htmlFor="">Modelo<br />
                    <input type="text" value={vehicle.model} readOnly />
                  </label>

                  <label htmlFor="">Año<br />
                    <input type="numeric" value={vehicle.year} readOnly />
                  </label>

                  <label htmlFor="">Pantente del taxi<br />
                    <input type="numeric" value={vehicle.taxiPlate} readOnly />
                  </label>

                  <label htmlFor="">Patente del auto<br />
                    <input type="numeric" value={vehicle.vehiclePlate} readOnly />
                  </label>
                </div>
              ))}
            </div>
          )}

          <Button variant="warning" className="profile-settings-button">Editar</Button>
          <Button variant="danger" className="profile-settings-button" onClick={handlerDeleteAccount}>Eliminar cuenta</Button>

          {deleteAccount && (
            
            <Modal show={handlerDeleteAccount} onHide={handlerDeleteAccount}>
              <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
              </Modal.Header>

              <Modal.Body>Estas seguro que quieres eliminar tu cuenta? Esta acción es permanente!</Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handlerDeleteAccount}>Cancelar</Button>
                <DeleteAccount userId={userId} userRole={userRole}/>
              </Modal.Footer>
            </Modal>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
