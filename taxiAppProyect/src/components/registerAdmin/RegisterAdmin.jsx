import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../registerAdmin/RegisterAdmin.css"
import Navbar from '../navbar/Navbar';
//import "../register/Register"

function RegisterAdmin() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
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


  const clickLinkHandler = () => {
    navigate("/");
  };

  const signInHandler = (event) => {
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
    console.log("formulario enviado  correctamente");
  };

  return (
    <div id='register-admin-form-container'>
      <header><Navbar /></header>
      
        <Form id='register-admin-form'>
          <div className='register-header-form'>
            <img src="./src/assets/logo.png" id='register-form-img' alt="logo" onClick={clickLinkHandler}></img>
            <h4>Crear cuenta</h4>
          </div>

          <div className='register-general-info'>
            <div>
              <label htmlFor="name">Nombre</label><br />
              <input
                type="text"
                name="name"
                id="name"
                className={`register-admin-input ${errors.name && "border-danger border-danger:focus"}`}
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
                className={`register-admin-input ${errors.email && "border-danger border-danger:focus"}`}
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
                className={`register-admin-input ${errors.password && "border-danger border-danger:focus"}`}
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
                className={`register-admin-input ${errors.dni && "border-danger border-danger:focus"}`}
                value={dni}
                ref={dniRef}
                onChange={dniHandler}
                placeholder='Ingrese su DNI' />
            </div>
            {errors.dni && (
              <p className="text-danger mt-2">Ingrese un dni válido.</p>
            )}

            <div class='register-admin-radio-container'>
              <Form.Group className="mb-3" controlId="formBasicCheckbox" class='register-admin-form-group-radio-container'>
                <Form.Check
                  type="radio"
                  name='userType'
                  value="Passenger"
                  className='register-userType'
                  label="Pasajero"
                  onChange={taxiDriverHandler}
                  defaultChecked
                />

                <Form.Check
                  type="radio"
                  name='userType'
                  value="Driver"
                  className='register-userType'
                  id='taxi'
                  label="Taxista"
                  onChange={taxiDriverHandler}
                />

                <Form.Check
                  type="radio"
                  name='userType'
                  value="admin"
                  className='userType'
                  id='admini'
                  label="Admin"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="warning" type="submit" className='register-form-button' onClick={signInHandler}>Crear cuenta</Button>
        </Form>
    </div>
  );
}

export default RegisterAdmin;