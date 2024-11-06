import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import useTranslation from "../custom/useTranslation/UseTranslation";
import "./OrderTaxi.css";
import LogOut from "../logOut/LogOut";

const OrderTaxi = () => {
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [messaje, setMessaje] = useState("");
  const [errors, setErrors] = useState({
    destination: false,
    location: false,
  });
  const translate = useTranslation();
  const destinationRef = useRef(null);
  const locationRef = useRef(null);

  const handleSubmit = () => {
    if (destinationRef.current.value.length === 0) {
      destinationRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        destination: true,
      }));
      return;
    }
    if (location.length === 0) {
      locationRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: true,
      }));
      return;
    }
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      location: e.target.value.length === 0,
    }));
  };
  const handleDestination = (e) => {
    setDestination(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      destination: e.target.value.length === 0,
    }));
  };
  const handleMessaje = (e) => {
    setMessaje(e.target.value);
  };

  return (
    <div className="contenedor-principal">
      <header className="header-nav">
        <Navbar />
      </header>
      <div className="container mt-4 col-md-4 shadow bordered-div orderTaxiContainer">
        <h1 className="text-center ">{translate("order_taxi")}</h1>

        <Form>
          <Form.Group className="mb-4" controlId="formDestination">
            <Form.Label className="fw-bold ">{translate( "enter_destination")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={translate("destination_placeholder")}
              className={`p-3 rounded ${
                errors.destination && "border border-danger"
              }`}
              value={destination}
              required
              onChange={handleDestination}
              ref={destinationRef}
            />
            {errors.destination && (
              <p className="text-danger">{translate( "incomplete_destination")}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formLocation">
            <Form.Label className="fw-bold">
              {translate("enter_location")}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={translate("location_placeholder")}
              className={`p-3 rounded ${
                errors.location && "border border-danger"
              }`}
              value={location}
              onChange={handleLocation}
              required
              ref={locationRef}
            />
            {errors.location && (
              <p className="text-danger">{translate("incomplete_location")}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label className="fw-bold ">{translate("message")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={translate("message_placeholder")}
              className="p-3 rounded"
              value={messaje}
              onChange={handleMessaje}
            />
          </Form.Group>
          
        <Form.Label className="fw-bold">{translate("payment_Method")}</Form.Label>
        <Form.Select aria-label="Default select example" className="payment-method-order-taxi" defaultValue={0}>
          <option value="0">{translate("effective")}</option>
          <option value="1">{translate( "digital_Payment")}</option>
        </Form.Select>

          <div className="text-center">
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="warning"
              className="w-50 buttonOrderTaxi">
              {translate("request_taxi")}
            </Button>
          </div>
          
        </Form>
      </div>
    </div>
  );
};
export default OrderTaxi;
