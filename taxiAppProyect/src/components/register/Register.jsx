import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import Navbar from "../navbar/Navbar";

const Register = () => {
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
    setTaxiDriver(event.target.value === "taxiDriver");
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.name]: false }));
  };

  const createAccount = async (event) => {
    event.preventDefault();
    if (!name) {
      nameRef.current.focus();
      setErrors((prev) => ({ ...prev, name: true }));
      return;
    }
    if (!email) {
      emailRef.current.focus();
      setErrors((prev) => ({ ...prev, email: true }));
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      setErrors((prev) => ({ ...prev, password: true }));
      return;
    }
    if (!dni) {
      dniRef.current.focus();
      setErrors((prev) => ({ ...prev, dni: true }));
      return;
    }

    if (taxiDriver) {
      if (!vehicleBrand) {
        vehicleBrandRef.current.focus();
        setErrors((prev) => ({ ...prev, vehicleBrand: true }));
        return;
      }
      if (!vehiclePlate) {
        vehiclePlateRef.current.focus();
        setErrors((prev) => ({ ...prev, vehiclePlate: true }));
        return;
      }
      if (!taxiPlate) {
        taxiPlateRef.current.focus();
        setErrors((prev) => ({ ...prev, taxiPlate: true }));
        return;
      }
      if (!vehicleModel) {
        vehicleModelRef.current.focus();
        setErrors((prev) => ({ ...prev, vehicleModel: true }));
        return;
      }
      if (!vehicleYear) {
        vehicleYearRef.current.focus();
        setErrors((prev) => ({ ...prev, vehicleYear: true }));
        return;
      }
    }

    let userData = { name, email, password, dni };
    const apiUrl = taxiDriver
      ? "https://localhost:7179/api/Driver"
      : "https://localhost:7179/api/Passenger";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error en la creación del usuario");
      }

      console.log("Formulario enviado correctamente");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="register-form-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <Form id="register-form" onSubmit={createAccount}>
        <div className="register-header-form">
          <h4>Crear cuenta</h4>
        </div>

        <div className="register-general-info">
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              ref={nameRef}
              onChange={handleChange(setName)}
              className={`register-input ${errors.name && "border-danger"}`}
              placeholder="Ingrese su nombre"
            />
            {errors.name && (
              <p className="text-danger">Ingrese un nombre válido.</p>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              ref={emailRef}
              onChange={handleChange(setEmail)}
              className={`register-input ${errors.email && "border-danger"}`}
              placeholder="Ingrese su email"
            />
            {errors.email && (
              <p className="text-danger">Ingrese un Email válido.</p>
            )}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              ref={passwordRef}
              onChange={handleChange(setPassword)}
              className={`register-input ${errors.password && "border-danger"}`}
              placeholder="Ingrese su contraseña"
            />
            {errors.password && (
              <p className="text-danger">Ingrese una contraseña válida.</p>
            )}
          </Form.Group>

          <Form.Group controlId="dni">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="number"
              name="dni"
              value={dni}
              ref={dniRef}
              onChange={handleChange(setDni)}
              className={`register-input ${errors.dni && "border-danger"}`}
              placeholder="Ingrese su DNI"
            />
            {errors.dni && (
              <p className="text-danger">Ingrese un DNI válido.</p>
            )}
          </Form.Group>

          <div id="register-radio-container">
            <Form.Group>
              <Form.Check
                type="radio"
                name="userType"
                value="passenger"
                label="Soy pasajero"
                onChange={taxiDriverHandler}
                defaultChecked
              />
              <Form.Check
                type="radio"
                name="userType"
                value="taxiDriver"
                label="Soy taxista"
                onChange={taxiDriverHandler}
              />
            </Form.Group>
          </div>
        </div>

        {taxiDriver && (
          <div className="register-vehicle-info">
            <Form.Group controlId="vehicleBrand">
              <Form.Label>Marca del vehículo</Form.Label>
              <Form.Control
                type="text"
                name="vehicleBrand"
                value={vehicleBrand}
                ref={vehicleBrandRef}
                onChange={handleChange(setVehicleBrand)}
                className={`register-input ${
                  errors.vehicleBrand && "border-danger"
                }`}
                placeholder="Marca del vehículo"
              />
              {errors.vehicleBrand && (
                <p className="text-danger">Ingrese una marca válida.</p>
              )}
            </Form.Group>

            <Form.Group controlId="vehiclePlate">
              <Form.Label>Patente del vehículo</Form.Label>
              <Form.Control
                type="text"
                name="vehiclePlate"
                value={vehiclePlate}
                ref={vehiclePlateRef}
                onChange={handleChange(setVehiclePlate)}
                className={`register-input ${
                  errors.vehiclePlate && "border-danger"
                }`}
                placeholder="Patente del vehículo"
              />
              {errors.vehiclePlate && (
                <p className="text-danger">Ingrese una patente válida.</p>
              )}
            </Form.Group>

            <Form.Group controlId="taxiPlate">
              <Form.Label>Patente del taxi</Form.Label>
              <Form.Control
                type="text"
                name="taxiPlate"
                value={taxiPlate}
                ref={taxiPlateRef}
                onChange={handleChange(setTaxiPlate)}
                className={`register-input ${
                  errors.taxiPlate && "border-danger"
                }`}
                placeholder="Ingrese la patente del taxi"
              />
              {errors.taxiPlate && (
                <p className="text-danger">Ingrese una patente válida.</p>
              )}
            </Form.Group>

            <Form.Group controlId="vehicleModel">
              <Form.Label>Modelo del vehículo</Form.Label>
              <Form.Control
                type="text"
                name="vehicleModel"
                value={vehicleModel}
                ref={vehicleModelRef}
                onChange={handleChange(setVehicleModel)}
                className={`register-input ${
                  errors.vehicleModel && "border-danger"
                }`}
                placeholder="Modelo del vehículo"
              />
              {errors.vehicleModel && (
                <p className="text-danger">Ingrese un modelo válido.</p>
              )}
            </Form.Group>

            <Form.Group controlId="vehicleYear">
              <Form.Label>Año del vehículo</Form.Label>
              <Form.Control
                type="number"
                name="vehicleYear"
                value={vehicleYear}
                ref={vehicleYearRef}
                onChange={handleChange(setVehicleYear)}
                className={`register-input ${
                  errors.vehicleYear && "border-danger"
                }`}
                placeholder="Año del vehículo"
              />
              {errors.vehicleYear && (
                <p className="text-danger">Ingrese un año válido.</p>
              )}
            </Form.Group>
          </div>
        )}

        <Button variant="primary" type="submit" className="mt-4">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Register;
