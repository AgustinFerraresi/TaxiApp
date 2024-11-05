import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTranslation from "../custom/useTranslation/UseTranslation";
import Navbar from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const translate = useTranslation();

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (event) => {
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
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: false });
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: false });
  };

  const clickLinkHandler = () => {
    navigate("/");
  };

  return (
    <div className="login-contenedor-principal ">
      <header className="header-nav ">
        <Navbar />
      </header>
      <div className="mb-5 bg-black w-100">
        <div
          className="d-flex  align-items-center login-header-container"
          onClick={clickLinkHandler}
        ></div>
      </div>

      <main
        className="transparent-bg p-4 rounded-lg shadow-lg w-100 login-main-container "
        style={{ maxWidth: "400px" }}
      >
        <form onSubmit={handleSubmit} className="space-y-4 Formulario">
          <h2 className="text-center ">{translate("login")}</h2>
          <div className="mb-3">
            <label>{translate("Email")}</label>
            <input
              value={email}
              onChange={emailHandler}
              type="text"
              id="email"
              placeholder={translate("Email")}
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
