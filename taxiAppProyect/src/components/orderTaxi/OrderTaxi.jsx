import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import "./OrderTaxi.css";
import LogOut from "../logOut/LogOut";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import useTranslation from "../custom/useTranslation/UseTranslation";

const OrderTaxi = () => {
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [messaje, setMessaje] = useState("");
  const [show, setShow] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const destinationRef = useRef(null);
  const locationRef = useRef(null);
  const translate = useTranslation();

  const [errors, setErrors] = useState({
    destination: false,
    location: false,
  });

  const [rideToCreate, setRideToCreate] = useState({
    date: new Date().toISOString(),
    location: location,
    destination: destination,
    cost: 0,
    paymentMethod: 0,
    message: messaje,
  });

  const x = () => {
    console.log("location es:", location);
    console.log(rideToCreate.location);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
    setRideToCreate({ ...rideToCreate, location: e.target.value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      location: e.target.value.length === 0,
    }));
    //console.log(location)
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
    setRideToCreate({ ...rideToCreate, destination: e.target.value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      destination: e.target.value.length === 0,
    }));
  };

  const handleMessaje = (e) => {
    setMessaje(e.target.value);
    setRideToCreate({ ...rideToCreate, message: e.target.value });
  };

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
    setRideToCreate({ ...rideToCreate, paymentMethod: e.target.value });
    console.log(paymentMethod);
  };

  const handleSubmit = async (event) => {
    //event.preventDefault();

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

    try {
      setRideToCreate({
        date: new Date().toISOString(),
        location: location,
        destination: destination,
        cost: 0,
        paymentMethod: 0,
        message: messaje,
      });
      const response = await fetch(`https://localhost:7179/api/Ride`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(rideToCreate),
      });

      if (!response.ok) {
        console.log("error en la creacion del viaje");
        throw new Error("Error en la creacion del viaje");
      }

      //console.log(rideToCreate)
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>

      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
      </Row>

      <div className="container mt-4 col-md-4 shadow bordered-div orderTaxiContainer">
        <h1 className="text-center ">{translate("order_taxi")}</h1>

        <Form>
          <Form.Group className="mb-4" controlId="formDestination">
            <Form.Label className="fw-bold ">
              {translate("enter_destination")}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Destino"
              className={`p-3 rounded ${
                errors.destination && "border border-danger"
              }`}
              value={destination}
              required
              onChange={handleDestination}
              ref={destinationRef}
            />
            {errors.destination && (
              <p className="text-danger">
                {translate("incomplete_destination")}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formLocation">
            <Form.Label className="fw-bold">
              {translate("enter_location")}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ubicación"
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

          <Form.Label className="fw-bold">
            {translate("payment_Method")}
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="payment-method-order-taxi"
            defaultValue={0}
            onChange={handlePaymentMethod}
          >
            <option value="0">{translate("effective")}</option>
            <option value="1">{translate("digital_Payment")}</option>
          </Form.Select>

          <div className="text-center">
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="warning"
              className="w-50 buttonOrderTaxi"
            >
              {translate("order_taxi")}
            </Button>
            <Button onClick={x} variant="warning" className="w-50 ">
              {translate("show_states")}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default OrderTaxi;
