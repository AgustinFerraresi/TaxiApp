import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTranslation from "../custom/useTranslation/UseTranslation";
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
    vehicleModel: false,
    vehicleYear: false,
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dniRef = useRef(null);
  const vehicleBrandRef = useRef(null);
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
          <h4>{}</h4>
        </div>

        <div className="register-general-info">
          <Form.Group controlId="name">
            <Form.Label>{translate("name")}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              ref={nameRef}
              onChange={handleChange(setName)}
              className={`register-input ${errors.name && "border-danger"}`}
              placeholder={translate("enter_name")}
            />
            {errors.name && (
              <p className="text-danger">{translate("enter_name")}</p>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>{translate("email")}</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              ref={emailRef}
              onChange={handleChange(setEmail)}
              className={`register-input ${errors.email && "border-danger"}`}
              placeholder={translate("email")}
            />
            {errors.email && <p className="text-danger">{"enter_dni"}</p>}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>{translate("password")}</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              ref={passwordRef}
              onChange={handleChange(setPassword)}
              className={`register-input ${errors.password && "border-danger"}`}
              placeholder={translate("password")}
            />
            {errors.password && (
              <p className="text-danger">{translate("enter_password")}</p>
            )}
          </Form.Group>

          <Form.Group controlId="dni">
            <Form.Label>{translate("dni")}</Form.Label>
            <Form.Control
              type="number"
              name="dni"
              value={dni}
              ref={dniRef}
              onChange={handleChange(setDni)}
              className={`register-input ${errors.dni && "border-danger"}`}
              placeholder={translate("dni")}
            />
            {errors.dni && (
              <p className="text-danger">{translate("enter_dni")}</p>
            )}
          </Form.Group>

          <div id="register-radio-container">
            <Form.Group>
              <Form.Check
                type="radio"
                name="userType"
                value="passenger"
                label={translate("passenger")}
                onChange={taxiDriverHandler}
                defaultChecked
              />
              <Form.Check
                type="radio"
                name="userType"
                value="taxiDriver"
                label={translate("taxi_driver")}
                onChange={taxiDriverHandler}
              />
            </Form.Group>
          </div>
        </div>

        {taxiDriver && (
          <div className="register-vehicle-info">
            <Form.Group controlId="vehicleBrand">
              <Form.Label>{translate("vehicle_brand")}</Form.Label>
              <Form.Control
                type="text"
                name="vehicleBrand"
                value={vehicleBrand}
                ref={vehicleBrandRef}
                onChange={handleChange(setVehicleBrand)}
                className={`register-input ${
                  errors.vehicleBrand && "border-danger"
                }`}
                placeholder={translate("vehicle_brand")}
              />
              {errors.vehicleBrand && (
                <p className="text-danger">{translate("vehicle_brand")}</p>
              )}
            </Form.Group>

            <Form.Group controlId="vehicleModel">
              <Form.Label>{translate("vehicle_model")}</Form.Label>
              <Form.Control
                type="text"
                name="vehicleModel"
                value={vehicleModel}
                ref={vehicleModelRef}
                onChange={handleChange(setVehicleModel)}
                className={`register-input ${
                  errors.vehicleModel && "border-danger"
                }`}
                placeholder={translate("vehicle_model")}
              />
              {errors.vehicleModel && (
                <p className="text-danger">{translate("vehicle_model")}</p>
              )}
            </Form.Group>

            <Form.Group controlId="vehicleYear">
              <Form.Label>{translate("vehicle_year")}</Form.Label>
              <Form.Control
                type="number"
                name="vehicleYear"
                value={vehicleYear}
                ref={vehicleYearRef}
                onChange={handleChange(setVehicleYear)}
                className={`register-input ${
                  errors.vehicleYear && "border-danger"
                }`}
                placeholder={translate("vehicle_year")}
              />
              {errors.vehicleYear && (
                <p className="text-danger">{translate("vehicle_year")}</p>
              )}
            </Form.Group>
          </div>
        )}

        <Button variant="primary" type="submit" className="mt-4">
          {translate("register")}
        </Button>
      </Form>
    </div>
  );
};

export default Register;
