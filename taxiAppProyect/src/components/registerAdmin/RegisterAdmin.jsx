import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../register/Register";
import Navbar from '../navbar/Navbar';
import useTranslation from '../custom/useTranslation/UseTranslation';
import "../registerAdmin/RegisterAdmin.css"


function RegisterAdmin() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const [userType, setUserType] = useState("Passenger");
  const navigate = useNavigate();
  const translate = useTranslation();

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    dni: false,
    vehicleBrand: false,
    vehiclePlate: false,
    taxiPlate: false,
    vehicleModel: false,
    vehicleYear: false,
  });

  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dniRef = useRef(null);

  const handlerTypeUserSelect = (event) => {
    setUserType(event.target.value);
  }


  const nameHandler = (event) => {
    setName(event.target.value);
    setErrors({ ...errors, name: false });
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: false });
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: false });
  };

  const dniHandler = (event) => {
    setDni(event.target.value);
    setErrors({ ...errors, dni: false });
  };


  const handlerCreateUser = async (event) => {
    event.preventDefault();
    if (name.length === 0) {
      nameRef.current.focus();
      setErrors({ ...errors, name: true });
      return
    }

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return
    }

    if (dni.length === 0) {
      dniRef.current.focus();
      setErrors({ ...errors, dni: true });
      return
    }
    
    let userToCreate;

    try {
      userToCreate = {
        name : name,
        email : email,
        password : password,
        dni : dni,
      }

      if (userType === "Passenger") {
        const response = await fetch("https://localhost:7179/api/Passenger",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userToCreate)
        });

        if (!response.ok){
          console.log("error en la creacion del pasajero");
          throw new Error('Error en la creacion del pasajero');
        }
      }

      if (userType === "Driver") {
        const response = await fetch("https://localhost:7179/api/Driver",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userToCreate)
        });

        if (!response.ok) {
          console.log("error en la creacion del driver");
          throw new Error('Error en la creacion del driver');
        }
      }

      if (userType === "SuperAdmin") {
        const response = await fetch("https://localhost:7179/api/SuperAdmin/CreateSuperAdmin",{
          method: "POST",
          headers:{
            accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
            body: JSON.stringify(userToCreate)
        });

        if (!response.ok) {
          console.log(response)
          console.log("error en la creacion del admin");
          throw new Error('Error en la creacion del admin');
        }
      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='contenedor-principal'>
      <header className='header-nav'>
        <Navbar/>
      </header>
      <Form id='register-form'>
        <div className='register-header-form'>
          <h4>{translate("create_account")}</h4>

        </div>

        <div className='register-general-info'>
          <div>
            <label htmlFor="name">{translate("name")}</label><br />
            <input
              type="text"
              name="name"
              id="name"
              className={`register-admin-input ${errors.name && "border-danger border-danger:focus"}`}
              value={name}
              ref={nameRef}
              onChange={nameHandler}
              placeholder={translate("name")} />
          </div>
          {errors.name && (
            <p className="text-danger mt-2">{translate("name")}</p>
          )}

          <div>
            <label htmlFor="email">{translate("email")}</label><br />
            <input
              type="email"
              name="email"
              id="email"
              className={`register-admin-input ${errors.email && "border-danger border-danger:focus"}`}
              value={email}
              ref={emailRef}
              onChange={emailHandler}
              placeholder={translate("email")} />
          </div>
          {errors.email && (
            <p className="text-danger mt-2">{translate("enter_email")}</p>
          )}

          <div>
            <label htmlFor="password">{translate("password")}</label><br />
            <input
              type="password"
              name="password"
              id="password"
              className={`register-admin-input ${errors.password && "border-danger border-danger:focus"}`}
              value={password}
              ref={passwordRef}
              onChange={passwordHandler}
              placeholder={translate("password")}/>
          </div>
          {errors.password && (
            <p className="text-danger mt-2">{translate("enter_password")}</p>
          )}

          <div>
            <label htmlFor="dni">{translate("dni")}</label><br />
            <input
              type="number"
              name="dni"
              id="dni"
              className={`register-admin-input ${errors.dni && "border-danger border-danger:focus"}`}
              value={dni}
              ref={dniRef}
              onChange={dniHandler}
              placeholder={translate("dni")}/>
          </div>
          {errors.dni && (
            <p className="text-danger mt-2">{translate("enter_dni")}</p>
          )}

          <div id='register-radio-container'>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" id='register-radio-container'>
              <Form.Check
                type="radio"
                name='userType'
                value="passenger"
                className='register-userType'
                label={translate( "passenger")}
                onChange={taxiDriverHandler}
                defaultChecked
              />

              <Form.Check
                type="radio"
                name='userType'
                value="taxiDriver"
                className='register-userType'
                id='taxi'
                label={translate("taxi_driver")}
                onChange={taxiDriverHandler}
              />

              <Form.Check
                type="radio"
                name='userType'
                value="admin"
                className='userType'
                id='admini'
                label={translate("manager")}
              />
            </Form.Group>
          </div>
        </div>

        {
          taxiDriver === true &&
          <div className='register-vehicle-info'>
            <div>
              <label htmlFor="car">{translate("vehicle_brand")}</label><br />
              <input
                type="text"
                name="car"
                className={`register-input ${errors.vehicleBrand && "border-danger border-danger:focus"}`}
                value={vehicleBrand}
                ref={vehicleBrandRef}
                onChange={vehicleBrandHandler}
                placeholder={translate("vehicle_brand")}
                required />
            </div>
            {errors.vehicleBrand && (
              <p className="text-danger mt-2">{translate("vehicle_brand")}</p>
            )}

            <div>
              <label htmlFor="car">{translate("vehicle patent")}</label><br />
              <input
                type="text"
                name="car"
                className={`register-input ${errors.vehiclePlate && "border-danger border-danger:focus"}`}
                value={vehiclePlate}
                ref={vehiclePlateRef}
                onChange={vehiclePlateHandler}
                placeholder={translate("vehicle patent")} required />
            </div>
            {errors.vehiclePlate && (
              <p className="text-danger mt-2">{translate("vehicle patent")}</p>
            )}

            <div>
              <label htmlFor="car">{translate("taxi_patent")}</label><br />
              <input
                type="number"
                name="car"
                className={`register-input ${errors.taxiPlate && "border-danger border-danger:focus"}`}
                value={taxiPlate}
                ref={taxiPlateRef}
                onChange={taxiPlateHandler}
                placeholder={translate("taxi_patent")}
                required />
            </div>
            {errors.taxiPlate && (
              <p className="text-danger mt-2">{translate("taxi_patent")}</p>
            )}

            <div>
              <label htmlFor="car">{translate("vehicle_model")}</label><br />
              <input
                type="text"
                name="car"
                className={`register-input ${errors.vehicleModel && "border-danger border-danger:focus"}`}
                value={vehicleModel}
                ref={vehicleModelRef}
                onChange={vehicleModelHandler}
                placeholder={translate("vehicle_model")}
                required />
            </div>
            {errors.vehicleModel && (
              <p className="text-danger mt-2">{translate("vehicle_model")}</p>
            )}

            <div>
              <label htmlFor="car">{translate("vehicle_year")}</label><br />
              <input
                type="number"
                name="car"
                min={1900}
                max={currentYear}
                className={`register-input ${errors.vehicleYear && "border-danger border-danger:focus"}`}
                value={vehicleYear}
                ref={vehicleYearRef}
                onChange={vehicleYearHandler} placeholder={translate("vehicle_year")} required />
            </div>
            {errors.vehicleYear && (
              <p className="text-danger mt-2">{translate("vehicle_year")}</p>
            )}
          </div>
        }
        
        <Button variant="warning" type="submit" className='register-form-button' onClick={handlerCreateUser}>{translate( "create_account")}</Button>

          {/* <div class='register-admin-select-container'>
            <select id="type-user-select" onChange={handlerTypeUserSelect}>
              <option value="Passenger">Pasajero</option>
              <option value="Driver">Conductor</option>
              <option value="SuperAdmin">SuperAdmin</option>
            </select>

          </div>
        </div>

        <Button variant="warning" type="submit" className='register-form-button' onClick={handlerCreateUser}>Crear cuenta</Button> */}

      </Form>
    </div>
  );
}

export default RegisterAdmin;