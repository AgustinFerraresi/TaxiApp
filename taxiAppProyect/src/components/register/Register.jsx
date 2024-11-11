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
  const [taxiDriver, setTaxiDriver] = useState(false);

  const navigate = useNavigate();
  const translate = useTranslation();

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    dni: false,
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dniRef = useRef(null);

  const taxiDriverHandler = (event) => {
    if (event.target.value === "passenger") {
      setTaxiDriver(false);
    } else if (event.target.value === "taxiDriver") {
      setTaxiDriver(true);
    }
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

  const createAccount = async (event) => {
    event.preventDefault();
    if (name.length === 0) {
      nameRef.current.focus();
      setErrors({ ...errors, name: true });
      return;
    }

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    if (dni.length === 0) {
      dniRef.current.focus();
      setErrors({ ...errors, dni: true });
      return;
    }

    let userData;
    try {
      if (taxiDriver) {
        userData = {
          name: name,
          email: email,
          password: password,
          dni: dni,
        };
        const response = await fetch("https://localhost:7179/api/Driver", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          console.log("error en la creacion del usuario");
          throw new Error("Error en la creacion del usuario");
        }
        console.log("formulario enviado  correctamente");
        setDni("");
        setEmail("");
        setName("");
        setPassword("");
        navigate("/login");
      } else {
        userData = {
          name: name,
          email: email,
          password: password,
          dni: dni,
        };

        const response = await fetch("https://localhost:7179/api/Passenger", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          console.log("error en la creacion del usuario");
          throw new Error("Error en la creacion del usuario");
        }
        setDni("");
        setEmail("");
        setName("");
        setPassword("");
        navigate("/login");
        console.log("formulario enviado  correctamente");
      }
    } catch (error) {
      console.log(error);
    }
    //https://localhost:7179/api/Driver
    //https://localhost:7179/api/Passenger
  };

  return (
    <div className="register-form-container">
      <header className="header-nav ">
        <Navbar />
      </header>
      <Form id="register-form">
        <div className="register-header-form">
          <h4>{translate("create_account")}</h4>
        </div>

        <div className="register-general-info">
          <div>
            <label htmlFor="name">{translate("name")}</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className={`register-input ${
                errors.name && "border-danger border-danger:focus"
              }`}
              value={name}
              ref={nameRef}
              onChange={nameHandler}
              placeholder={translate("name")}
            />
          </div>
          {errors.name && (
            <p className="text-danger mt-2">{translate("enter_name")}</p>
          )}

          <div>
            <label htmlFor="email">{translate("email")}</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className={`register-input ${
                errors.email && "border-danger border-danger:focus"
              }`}
              value={email}
              ref={emailRef}
              onChange={emailHandler}
              placeholder={translate("email")}
            />
          </div>
          {errors.email && (
            <p className="text-danger mt-2">{translate("enter_email")}</p>
          )}

          <div>
            <label htmlFor="password">{translate("password")}</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className={`register-input ${
                errors.password && "border-danger border-danger:focus"
              }`}
              value={password}
              ref={passwordRef}
              onChange={passwordHandler}
              placeholder={translate("password")}
            />
          </div>
          {errors.password && (
            <p className="text-danger mt-2">{translate("enter_password")}</p>
          )}

          <div>
            <label htmlFor="dni">{translate("dni")}</label>
            <br />
            <input
              type="number"
              name="dni"
              id="dni"
              className={`register-input ${
                errors.dni && "border-danger border-danger:focus"
              }`}
              value={dni}
              ref={dniRef}
              onChange={dniHandler}
              placeholder={translate("dni")}
            />
          </div>
          {errors.dni && (
            <p className="text-danger mt-2">{translate("enter_dni")}</p>
          )}

          <div id="register-radio-container">
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
              id="register-radio-container"
            >
              <Form.Check
                type="radio"
                name="userType"
                value="passenger"
                className="register-userType"
                label={translate("passenger")}
                onChange={taxiDriverHandler}
                defaultChecked
              />

              <Form.Check
                type="radio"
                name="userType"
                value="taxiDriver"
                className="register-userType"
                id="taxi"
                label={translate("taxi_driver")}
                onChange={taxiDriverHandler}
              />
            </Form.Group>
          </div>
        </div>

        <Button
          variant="warning"
          type="submit"
          className="register-form-button"
          onClick={createAccount}
        >
          {translate("create_account")}
        </Button>
      </Form>
    </div>
  );
};

export default Register;
