import "./ProfileSettings.css";
import { Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import useTranslation from "../custom/useTranslation/UseTranslation";

const ProfileSettings = ({ user }) => {
  const translate = useTranslation();
  return (
    <div className="contenedor-principal">
      <header className="header-nav">
        <Navbar />
      </header>
      <div id="profile-settings-container">
        <form action="" className="profile-settings-form">
          <div id="img-container">
            <img
              src="./src/assets/fotoPerfilPrueba.png"
              id="profile-settings-profile-picture"
              alt="profile-picture"
            />
            <h3>{user.name}</h3>
            <h6>Rol: {user.userType}</h6>
          </div>

          <div id="profile-settings-generic-user-data-container">
            <label htmlFor="" className="general-info">
              {translate("name")}:
              <input type="text" value={user.name} readOnly />
            </label>

            <label htmlFor="" className="profile-settings-general-info">
              {translate("email")}:
              <input type="text" value={user.email} readOnly />
            </label>
          </div>
          {user.vehicles && user.vehicles.length > 0 && (
            <div>
              <h4>{translate("vehicle_info")}</h4>
              {user.vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="profile-settings-container-driver-container"
                >
                  <label htmlFor="">
                    {translate("vehicle_brand")}
                    <br />
                    <input type="text" value={vehicle.brand} readOnly />
                  </label>

                  <label htmlFor="">
                   {translate("vehicle_model")}
                    <br />
                    <input type="text" value={vehicle.model} readOnly />
                  </label>

                  <label htmlFor="">
                    {translate("vehicle_year")}
                    <br />
                    <input type="numeric" value={vehicle.year} readOnly />
                  </label>

                  <label htmlFor="">
                    {translate("taxi_patent")}
                    <br />
                    <input type="numeric" value={vehicle.taxiPlate} readOnly />
                  </label>

                  <label htmlFor="">
                    {translate("vehicle_patent")}
                    <br />
                    <input
                      type="numeric"
                      value={vehicle.vehiclePlate}
                      readOnly
                    />
                  </label>
                </div>
              ))}
            </div>
          )}
          <Button variant="warning" className="button">
            {translate("edit")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
