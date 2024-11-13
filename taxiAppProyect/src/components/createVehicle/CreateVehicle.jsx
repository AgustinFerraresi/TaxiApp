import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { Form, Button } from "react-bootstrap";
import "./CreateVehicle.css";

const CreateVehicle = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [vehicles, setVehicles] = useState([]);
    const [vehicleIdToDelete, setVehicleIdToDelete] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
  
    const [errors, setErrors] = useState({
      brand: false,
      model: false,
      year: false,
    });

    
    const handleBrand = (e) => {
      setBrand(e.target.value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        brand: e.target.value.length === 0,
      }));
    };
  
    const handleModel = (e) => {
      setModel(e.target.value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        model: e.target.value.length === 0,
      }));
    };
  
    const handleYear = (e) => {
      setYear(e.target.value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        year: e.target.value.length === 0,
      }));
    };
  
    const fetchVehicles = async () => {
      try {
        const response = await fetch("https://localhost:7179/api/Vehicle", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error al cargar los vehículos");
        }
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error al cargar los vehículos:", error);
      }
    };

    useEffect(() => {
      fetchVehicles();
    }, []);
  
    const handleSubmitCreate = async (e) => {
      e.preventDefault();
  
      if (brand && model && year) {
        const vehicleToCreate = {
          brand,
          model,
          year: parseInt(year, 10),
          driverId: localStorage.getItem("driverId"),
        };
  
        try {
          const response = await fetch("https://localhost:7179/api/Vehicle", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(vehicleToCreate),
          });
  
          if (response.ok) {
            setSuccessMessage("Vehículo creado exitosamente");
            setBrand("");
            setModel("");
            setYear("");
            setErrors({ brand: false, model: false, year: false });
  
  
            fetchVehicles();
  
   
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);
          } else {
            throw new Error("Error al crear el vehículo");
          }
        } catch (error) {
          console.error("Error al crear el vehículo:", error);
          setSuccessMessage("Error al crear el vehículo");
        }
      } else {
        setErrors({
          brand: brand.length === 0,
          model: model.length === 0,
          year: year.length === 0,
        });
      }
    };
  
    const handleDeleteVehicle = async () => {
        try {
          const response = await fetch(`https://localhost:7179/api/Vehicle/${vehicleIdToDelete}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
    
          if (response.ok) {
            setSuccessMessage("Vehículo eliminado exitosamente");
            setVehicleIdToDelete("");
            fetchVehicles(); // Actualizar la lista de vehículos
    
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);
          } else {
            throw new Error("Error al eliminar el vehículo");
          }
        } catch (error) {
          console.error("Error al eliminar el vehículo:", error);
          setSuccessMessage("Error al eliminar el vehículo");
        }
      };


    return (
        <div className="main-container-create-vehicle">
        <header className="header-nav-order-taxi">
          <Navbar />
        </header>
  
        <div className="container mt-4 col-md-4 shadow bordered-div createVehicleContainer">
            {/* crear */}
          <h1 className="text-center">Crear Vehículo</h1>
          <form className="vehicle-form" onSubmit={handleSubmitCreate}>
            <div className="form-group">
              <label htmlFor="brand">Marca:</label>
              <input
                className={`input-vehicle ${errors.brand && "border-danger"}`}
                id="brand"
                type="text"
                value={brand}
                onChange={handleBrand}
                required
              />
              {errors.brand && <p className="text-danger">La marca es obligatoria</p>}
            </div>
  
            <div className="form-group">
              <label htmlFor="model">Modelo:</label>
              <input
                className={`input-vehicle ${errors.model && "border-danger"}`}
                id="model"
                type="text"
                value={model}
                onChange={handleModel}
                required
              />
              {errors.model && <p className="text-danger">El modelo es obligatorio</p>}
            </div>
  
            <div className="form-group">
              <label htmlFor="year">Año:</label>
              <input
                className={`input-vehicle ${errors.year && "border-danger"}`}
                id="year"
                type="number"
                value={year}
                onChange={handleYear}
                required
              />
              {errors.year && <p className="text-danger">El año es obligatorio</p>}
            </div>
  
            <button type="submit" className="submit-button">Crear Vehículo</button>
          </form>
  
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
  


           {/* eliminar */}
          <h2 className="mt-5">Eliminar Vehículo</h2>
          <div className="form-group">
            <label htmlFor="deleteVehicleId">ID del Vehículo a eliminar:</label>
            <input
              type="text"
              id="deleteVehicleId"
              value={vehicleIdToDelete}
              onChange={(e) => setVehicleIdToDelete(e.target.value)}
              className="input-vehicle"
            />
          </div>
          <button onClick={handleDeleteVehicle} className="submit-button">Eliminar Vehículo</button>
  








  
         {/* listar */}
          <h2 className="mt-5">Vehículos Disponibles</h2>
          <div
            className="vehicle-list-container"
            style={{ maxHeight: "300px", overflowY: "scroll" }}
          >
            {vehicles.length > 0 ? (
              <ul className="list-group">
                {vehicles.map((vehicle) => (
                  <li key={vehicle.id} className="list-group-item">
                    <strong>ID:</strong> {vehicle.id} | <strong>Marca:</strong> {vehicle.brand} | <strong>Modelo:</strong> {vehicle.model} | <strong>Año:</strong> {vehicle.year}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay vehículos disponibles</p>
            )}
          </div>
        </div>
      </div>
    );
  };

export default CreateVehicle;
