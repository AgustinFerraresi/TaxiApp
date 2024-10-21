import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../register/Register";


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

  const clickLinkHandler = () => {
    navigate("/");
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
    <div id='register-form-container'>
      <Form id='register-form'>
        <div className='register-header-form'>
          <img src="./src/assets/logoTaxiApp.png" id='register-form-img' alt="logo" onClick={clickLinkHandler}></img>
          <h4>Crear cuenta</h4>
        </div>

        <div className='register-general-info'>
          <div>
            <label htmlFor="name">Nombre</label><br />
            <input
              type="text"
              name="name"
              id="name"
              className={`register-input ${errors.name && "border-danger border-danger:focus"}`}
              value={name}
              ref={nameRef}
              onChange={nameHandler}
              placeholder='Ingrese su nombre' />
          </div>
          {errors.name && (
            <p className="text-danger mt-2">Ingrese un nombre válido.</p>
          )}

          <div>
            <label htmlFor="email">Email</label><br />
            <input
              type="email"
              name="email"
              id="email"
              className={`register-input ${errors.email && "border-danger border-danger:focus"}`}
              value={email}
              ref={emailRef}
              onChange={emailHandler}
              placeholder='Ingrese su email' />
          </div>
          {errors.email && (
            <p className="text-danger mt-2">Ingrese un Email válido.</p>
          )}

          <div>
            <label htmlFor="password">Contraseña</label><br />
            <input
              type="password"
              name="password"
              id="password"
              className={`register-input ${errors.password && "border-danger border-danger:focus"}`}
              value={password}
              ref={passwordRef}
              onChange={passwordHandler}
              placeholder='Ingrese su contraseña' />
          </div>
          {errors.password && (
            <p className="text-danger mt-2">Ingrese una contraseña válida.</p>
          )}

          <div>
            <label htmlFor="dni">DNI</label><br />
            <input
              type="number"
              name="dni"
              id="dni"
              className={`register-input ${errors.dni && "border-danger border-danger:focus"}`}
              value={dni}
              ref={dniRef}
              onChange={dniHandler}
              placeholder='Ingrese su DNI' />
          </div>
          {errors.dni && (
            <p className="text-danger mt-2">Ingrese un dni válido.</p>
          )}

          <div id='register-radio-container'>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" id='register-radio-container'>
              <Form.Check
                type="radio"
                name='userType'
                value="passenger"
                className='register-userType'
                label="Soy pasajero"
                onChange={taxiDriverHandler}
                defaultChecked
              />

              <Form.Check
                type="radio"
                name='userType'
                value="taxiDriver"
                className='register-userType'
                id='taxi'
                label="Soy taxista"
                onChange={taxiDriverHandler}
              />

              <Form.Check
                type="radio"
                name='userType'
                value="admin"
                className='userType'
                id='admini'
                label="Administrador"
              />


            </Form.Group>
          </div>
        </div>

        {
          taxiDriver === true &&
          <div className='register-vehicle-info'>
            <div>
              <label htmlFor="car">Marca del vehiculo</label><br />
              <input
                type="text"
                name="car"
                className={`register-input ${errors.vehicleBrand && "border-danger border-danger:focus"}`}
                value={vehicleBrand}
                ref={vehicleBrandRef}
                onChange={vehicleBrandHandler}
                placeholder='Marca del vehiculo'
                required />
            </div>
            {errors.vehicleBrand && (
              <p className="text-danger mt-2">Ingrese una marca válido.</p>
            )}

            <div>
              <label htmlFor="car">Pantente del vehiculo</label><br />
              <input
                type="text"
                name="car"
                className={`register-input ${errors.vehiclePlate && "border-danger border-danger:focus"}`}
                value={vehiclePlate}
                ref={vehiclePlateRef}
                onChange={vehiclePlateHandler}
                placeholder='Pantente del vehiculo' required />
            </div>
            {errors.vehiclePlate && (
              <p className="text-danger mt-2">Ingrese una patente válida.</p>
            )}

            <div>
              <label htmlFor="car">Pantente del taxi</label><br />
              <input
                type="number"
                name="car"
                className={`register-input ${errors.taxiPlate && "border-danger border-danger:focus"}`}
                value={taxiPlate}
                ref={taxiPlateRef}
                onChange={taxiPlateHandler}
                placeholder='Ingrese la patente del taxi'
                required />
            </div>
            {errors.taxiPlate && (
              <p className="text-danger mt-2">Ingrese una patente válida.</p>
            )}

            <div>
              <label htmlFor="car">Modelo del vehiculo</label><br />
              <input
                type="text"
                name="car"
                className={`register-input ${errors.vehicleModel && "border-danger border-danger:focus"}`}
                value={vehicleModel}
                ref={vehicleModelRef}
                onChange={vehicleModelHandler}
                placeholder='Modelo del vehiculo'
                required />
            </div>
            {errors.vehicleModel && (
              <p className="text-danger mt-2">Ingrese un modelo válido.</p>
            )}

            <div>
              <label htmlFor="car">Año del vehiculo</label><br />
              <input
                type="number"
                name="car"
                min={1900}
                max={currentYear}
                className={`register-input ${errors.vehicleYear && "border-danger border-danger:focus"}`}
                value={vehicleYear}
                ref={vehicleYearRef}
                onChange={vehicleYearHandler} placeholder='Año del vehiculo' required />
            </div>
            {errors.vehicleYear && (
              <p className="text-danger mt-2">Ingrese un año válido.</p>
            )}
          </div>
        }
        
        <Button variant="warning" type="submit" className='register-form-button' onClick={signInHandler}>Crear cuenta</Button>
      </Form>
    </div>
  );
}

export default RegisterAdmin;