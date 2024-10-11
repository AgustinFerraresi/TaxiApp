import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <header className="mb-4">
        <div className="d-flex align-items-center">
          <img
            src=".\.\src\assets\logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="text-warning ml-2">RoTaxi</h1>
        </div>
      </header>

      <main
        className="bg-white p-4 rounded-lg shadow-lg w-100"
        style={{ maxWidth: "400px" }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Contraseña"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-warning w-100">Iniciar sesión</button>
            {error && (
              <p className="mt-4 text-dark text-center">
                Todos los campos son obligatorios
              </p>
            )}
          </div>

          <div className="text-center mb-5">
            <Link to="/register">Crear Cuenta</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
