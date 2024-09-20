import { Form, Button } from "react-bootstrap";
const OrderTaxi = () => {
  return (
    <div className="container mt-4 col-md-6">
      <Form>
        <Form.Group className="mb-4" controlId="formDestination">
          <Form.Label className="fw-bold">ingrese su destino</Form.Label>
          <Form.Control
            type="text"
            placeholder="destino"
            className="p-3 rounded"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formLocation">
          <Form.Label className="fw-bold">
            ingrese su ubicación actual
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="ubicación"
            className="p-3 rounded"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label className="fw-bold">Mensaje</Form.Label>
          <Form.Control
            type="text"
            placeholder="mensaje"
            className="p-3 rounded"
          />
        </Form.Group>

        <Button variant="warning" className="w-50 ">
          Pedir Taxi
        </Button>
      </Form>
    </div>
  );
};
export default OrderTaxi;
