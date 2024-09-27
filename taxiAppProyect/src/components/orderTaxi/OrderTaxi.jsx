import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const OrderTaxi = () => {

  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [messaje, setMessaje] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.trim() === '' || location.trim() === '') {
      alert('complete todos los campos')
      return;
    }
  };
  const handleLocation = (e) => {
    setLocation(e.target.value); 
  };
  const handleDestination = (e) => {
    setDestination(e.target.value); 
  };
  const handleMessaje = (e) => {
    setMessaje(e.target.value); 
  };

  return (
    <div className="container mt-4 col-md-6">
      <h1 className="text-center">Pedir Taxi</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formDestination">
          <Form.Label className="fw-bold">ingrese su destino</Form.Label>
          <Form.Control
            type="text"
            placeholder="Destino"
            className="p-3 rounded"
            value={destination}
            onChange={handleDestination}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formLocation">
          <Form.Label className="fw-bold">
            ingrese su ubicación actual
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ubicación"
            className="p-3 rounded"
            value={location}
            onChange={handleLocation}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label className="fw-bold">Mensaje</Form.Label>
          <Form.Control
            type="text"
            placeholder="mensaje"
            className="p-3 rounded"
            value={messaje}
            onChange={handleMessaje}
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="warning" className="w-50 " >
            Pedir Taxi
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default OrderTaxi;
