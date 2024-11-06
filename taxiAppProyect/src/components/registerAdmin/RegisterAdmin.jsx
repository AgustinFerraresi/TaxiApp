import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../register/Register";
import Navbar from '../navbar/Navbar';
import useTranslation from '../custom/useTranslation/UseTranslation';


function RegisterAdmin() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [taxiPlate, setTaxiPlate] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [taxiDriver, setTaxiDriver] = useState(false);
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

  const currentYear = new Date().getFullYear();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dniRef = useRef(null);
  const vehicleBrandRef = useRef(null);
  const vehiclePlateRef = useRef(null);
  const taxiPlateRef = useRef(null);
  const vehicleModelRef = useRef(null);
  const vehicleYearRef = useRef(null);


  const taxiDriverHandler = (event) => {
    if (event.target.value === "passenger") {
      setTaxiDriver(false);
    } else if (event.target.value === "taxiDriver") {
      setTaxiDriver(true);
    };
  };

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

  const vehicleBrandHandler = (event) => {
    setVehicleBrand(event.target.value);
    setErrors({ ...errors, vehicleBrand: false });
  };

  const vehiclePlateHandler = (event) => {
    setVehiclePlate(event.target.value);
    setErrors({ ...errors, vehiclePlate: false });
  };

  const taxiPlateHandler = (event) => {
    setTaxiPlate(event.target.value);
    setErrors({ ...errors, taxiPlate: false });
  };

  const vehicleModelHandler = (event) => {
    setVehicleModel(event.target.value);
    setErrors({ ...errors, vehicleModel: false });
  };

  const vehicleYearHandler = (event) => {
    setVehicleYear(event.target.value);
    setErrors({ ...errors, vehicleYear: false });
  };

 
  const signInHandler = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      nameRef.current.focus();
      setErrors({ ...errors, name: true });
      return
    };

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return
    };

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return
    };

    if (dni.length === 0) {
      dniRef.current.focus();
      setErrors({ ...errors, dni: true });
      return
    };

    if (vehicleBrand.length === 0 && taxiDriver) {
      vehicleBrandRef.current.focus();
      setErrors({ ...errors, vehicleBrand: true });
      return
    };

    if (vehiclePlate.length === 0 && taxiDriver) {
      vehiclePlateRef.current.focus();
      setErrors({ ...errors, vehiclePlate: true });
      return
    };

    if (taxiPlate.length === 0 && taxiDriver) {
      taxiPlateRef.current.focus();
      setErrors({ ...errors, taxiPlate: true });
      return
    };

    if (vehicleModel.length === 0 && taxiDriver) {
      vehicleModelRef.current.focus();
      setErrors({ ...errors, vehicleModel: true });
      return
    };

    if (vehicleYear.length === 0 && taxiDriver) {
      vehicleYearRef.current.focus();
      setErrors({ ...errors, vehicleYear: true });
      return
    };
    console.log("formulario enviado  correctamente");
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
              className={`register-input ${errors.name && "border-danger border-danger:focus"}`}
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
              className={`register-input ${errors.email && "border-danger border-danger:focus"}`}
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
              className={`register-input ${errors.password && "border-danger border-danger:focus"}`}
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
              className={`register-input ${errors.dni && "border-danger border-danger:focus"}`}
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
        
        <Button variant="warning" type="submit" className='register-form-button' onClick={signInHandler}>{translate( "create_account")}</Button>
      </Form>
    </div>
  );
}

export default RegisterAdmin;