import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../service/authContext/AuthContext";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Navbar from "../navbar/Navbar";
import useTranslation from "../custom/useTranslation/UseTranslation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [taxiDriver, setTaxiDriver] = useState(false);

  const translate = useTranslation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });


  const { handleLogin } = useContext(AuthContext);
  let userData = {}

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    try {
      userData = {
        email: email,
        password: password,
        UserType: taxiDriver ? "Driver" : "Passenger",
      };
      const response = await fetch(
        "https://localhost:7179/api/Authentication/authenticate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        alert("Error en el inicio de sesion");
        console.log("Error en el inicio de sesion");
        throw new Error("Error en el inicio de sesion");
      }

      const data = await response.text();

      handleLogin(email, data)
      const rol = localStorage.getItem("Role")

      if (rol == "Driver") {
        navigate("/DriverScreen")
      }
      else if (rol == "Passenger" ) {
        navigate("/OrderTaxi")
      }
      else if (rol == "SuperAdmin") {
        navigate("/ListUsers")
      }
      else{
        alert("Credenciales incorrectas");
      }
      //taxiDriver ? navigate("/DriverScreen") : navigate("/OrderTaxi");
    } catch (error) {
      console.log(error);
    }
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: false });
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: false });
  };

  const taxiDriverHandler = (event) => {
    if (event.target.value === "passenger") {
      setTaxiDriver(false);
    } else if (event.target.value === "taxiDriver") {
      setTaxiDriver(true);
    }
  };

  return (
    <div className="login-contenedor-principal ">
      <header className="header-nav ">
        <Navbar />
      </header>
      <main
        className="transparent-bg p-4 rounded-lg shadow-lg w-100 login-main-container "
        style={{ maxWidth: "400px" }}
      >
        <form onSubmit={handleSubmit} className="space-y-4 Formulario">
          <h2 className="text-center ">{translate("login")}</h2>
          <div className="mb-3">
            <label>{translate("email")}</label>
            <input
              value={email}
              onChange={emailHandler}
              type="text"
              id="email"
              placeholder={translate("email")}
              className={`form-control ${
                errors.email && "border border-danger"
              }`}
              ref={emailRef}
            />
            {errors.email && (
              <p className="text-danger mt-2">{translate("enter_email")}</p>
            )}
          </div>
          <div className="mb-3">
            <label>{translate("password")}</label>
            <input
              value={password}
              onChange={passwordHandler}
              type="password"
              id="password"
              placeholder={translate("password")}
              className={`form-control ${
                errors.password && "border border-danger"
              }`}
              ref={passwordRef}
            />
            {errors.password && (
              <p className="text-danger mt-2">{translate("enter_password")}</p>
            )}
          </div>

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

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-warning w-100 mt-3 mb-2"
              onClick={handleSubmit}
            >
              {translate("login")}
            </button>
            {(errors.email || errors.password) && (
              <p className="mt-4 text-center text-danger">
                {translate("fields_required")}
              </p>
            )}
          </div>

          <div className="text-center mb-5">
            {translate("no_account")}
            <br />
            <Link to="/register" className="Crear-cuenta">
              {translate("create_account")}
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
