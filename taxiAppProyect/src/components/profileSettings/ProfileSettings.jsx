// import "./ProfileSettings.css";

// const ProfileSettings = ({ user }) => {
//     return (
//         <div id="container">
//             <form action="">
//                 <div id="img-container">
//                     <img src="./src/assets/fotoPerfilPrueba.png" id="profile-picture" alt="profile-picture" />
//                     <h2>{user.name}</h2>
//                 </div>

//                 <label htmlFor="" className="general-info">Nombre
//                     <input type="text" value={user.name} />
//                 </label>

//                 <label htmlFor="" className="general-info">Email
//                     <input type="text" value={user.email} />
//                 </label>

//                 {
//                     user.vehicles &&
//                     <div>
//                         <h3>Informacion del vehiculo</h3>
//                         <label htmlFor="">Marca<br />
//                             <input type="text" value={user.vehicles.brand} />
//                         </label>

//                         <label htmlFor="">Modelo<br />
//                             <input type="text" value={user.vehicles.model} />
//                         </label>

//                         <label htmlFor="">Año<br />
//                             <input type="text" value={user.vehicles.year} />
//                         </label>
//                     </div>
//                 }
//             </form>
//         </div>
//     );

// };

// export default ProfileSettings;

// //

import "./ProfileSettings.css";
import { Button, Tab } from "react-bootstrap";


const ProfileSettings = ({ user }) => {
    return (
        <div id="container">
            <form action="">
                <div id="img-container">
                    <img src="./src/assets/fotoPerfilPrueba.png" id="profile-picture-settings" alt="profile-picture" />
                    <h2>{user.name}</h2>
                    <h5>Rol: {user.userType}</h5>
                </div>

                <div>
                    <label htmlFor="" className="general-info">Nombre:
                        <input type="text" value={user.name} />
                    </label>

                    <label htmlFor="" className="general-info">Email:
                        <input type="text" value={user.email} />
                    </label>
                </div>
                {
                    user.vehicles && user.vehicles.length > 0 &&
                    <div>
                        <h4>Informacion del vehiculo</h4>
                        {user.vehicles.map((vehicle, index) => (
                            <div key={index} className="driver-container">
                                <label htmlFor="">Marca<br />
                                    <input type="text" value={vehicle.brand}  />
                                </label>

                                <label htmlFor="">Modelo<br />
                                    <input type="text" value={vehicle.model}  />
                                </label>

                                <label htmlFor="">Año<br />
                                    <input type="numeric" value={vehicle.year}  />
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
