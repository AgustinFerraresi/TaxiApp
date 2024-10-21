import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });

      return
    };

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return
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
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <header className="mb-4">
        <div className="d-flex  align-items-center login-header-container" onClick={clickLinkHandler}>
          <img
            id="img-login"
            src=".\src\assets\logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "50px", height: "50px" }}/>
          <h1 className="text-warning ml-2" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>RoTaxi</h1>
        </div>
      </header>

      <main
        className="bg-white p-4 rounded-lg shadow-lg w-100 login-main-container"
        style={{ maxWidth: "400px" }}>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-center">Iniciar sesión</h2>
          <div className="mb-3">
            <label htmlFor="">Correo electrónico</label>
            <input
              value={email}
              onChange={emailHandler}
              type="text"
              id="email"
              placeholder="Correo Electrónico"
              className={`form-control ${errors.email && "border border-danger"}`}
              ref={emailRef}
            />
            {errors.email && (
              <p className="text-danger mt-2">Por favor ingrese un correo electrónico válido.</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="">Contraseña</label>
            <input
              value={password}
              onChange={passwordHandler}
              type="password"
              id="password"
              placeholder="Contraseña"
              className={`form-control ${errors.password && "border border-danger" }`}
              ref={passwordRef}
            />
            {errors.password && (
              <p className="text-danger mt-2">Por favor ingrese una contraseña.</p>
            )}
          </div>
          
          <div className="mb-3">
            <button type="submit" className="btn btn-warning w-100 mt-3 mb-2" onClick={handleSubmit} >Iniciar sesión</button>
            {(errors.email || errors.password) && (<p className="mt-4 text-center text-danger">Todos los campos son obligatorios</p>)}
          </div>

          <div className="text-center mb-5">
            Todavía no tenés una cuenta?<br />
            <Link to="/register">Crear cuenta</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;