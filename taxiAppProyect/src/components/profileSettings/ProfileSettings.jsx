import "./ProfileSettings.css";
import { Button } from "react-bootstrap";


const ProfileSettings = ({ user }) => {
    return (
        <div id="container">
            <form action="">
                <div id="img-container">
                    <img src="./src/assets/fotoPerfilPrueba.png" id="profile-picture-settings" alt="profile-picture" />
                    <h3>{user.name}</h3>
                    <h6>Rol: {user.userType}</h6>
                </div>

                <div id="generic-user-data-container">
                    <label htmlFor="" className="general-info">Nombre:
                        <input type="text" value={user.name}  readOnly/>
                    </label>

                    <label htmlFor="" className="general-info">Email:
                        <input type="text" value={user.email}  readOnly/>
                    </label>
                </div>
                {
                    user.vehicles && user.vehicles.length > 0 &&
                    <div>
                        <h4>Informacion del vehiculo</h4>
                        {user.vehicles.map((vehicle, index) => (
                            <div key={index} className="driver-container">
                                <label htmlFor="">Marca<br />
                                    <input type="text" value={vehicle.brand}  readOnly/>
                                </label>

                                <label htmlFor="">Modelo<br />
                                    <input type="text" value={vehicle.model}  readOnly/>
                                </label>

                                <label htmlFor="">Año<br />
                                    <input type="numeric" value={vehicle.year}  readOnly/>
                                </label>

                                <label htmlFor="">Pantente del taxi<br />
                                    <input type="numeric" value={vehicle.taxiPlate} readOnly/>
                                </label>

                                <label htmlFor="">Patente del auto<br />
                                    <input type="numeric" value={vehicle.vehiclePlate} readOnly />
                                </label>
                            </div>
                        ))}
                    </div>
                }
                <Button variant="warning">Editar</Button>
            </form>
        </div>
    );
};

export default ProfileSettings;
