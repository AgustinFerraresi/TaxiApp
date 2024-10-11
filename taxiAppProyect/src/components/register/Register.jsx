import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css";
import { useState } from 'react';


function Register() {
  const [userType, setUserType] = useState("");

  const handlerChange = (event) => {
    setUserType(event.target.value);
  }

  return (
    <div id='form-container'>
      <Form id='register-form'>
        <img src="./src/assets/logoTaxiApp.png" id='form-img' alt="logo"></img>
        <h4>Crear cuenta</h4>

          <div>
            <label htmlFor="name">Nombre</label><br />
            <input type="text" name="name" id="name" className='register-input' placeholder='Ingrese su nombre' />
          </div>

          <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" className='register-input' placeholder='Ingrese su email' required />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label><br />
            <input type="password" name="password" id="password" className='register-input' placeholder='Ingrese su contraseña' required />
          </div>

          <div>
            <label htmlFor="dni">DNI</label><br />
            <input type="dni" name="dni" id="dni" className='register-input' placeholder='Ingrese su DNI' required />
          </div>


          <div id='radio-container'>
          <Form.Group className="mb-3" controlId="formBasicCheckbox" id='radio-container'>
            <Form.Check
              type="radio"
              name='userType'
              value="passenger"
              className='userType'
              label="Soy pasajero"
              onChange={handlerChange}
              defaultChecked
            />

            <Form.Check
              type="radio"
              name='userType'
              value="taxi"
              className='userType'
              id='taxi'
              label="Soy taxista"
              onChange={handlerChange}
            />
          </Form.Group>
        </div>

        {
          userType === "taxi" &&
          <div>
            <div>
              <label htmlFor="car">Vehiculo</label><br />
              <input type="car" name="car" id="car" className='register-input' placeholder='Ingrese su vehiculo' required />
            </div>

            <div>
              <label htmlFor="car">Pantente</label><br />
              <input type="car" name="car" id="car" className='register-input' placeholder='Ingrese la patente del taxi' required />
            </div>
          </div>
        }
        <Button variant="warning" type="submit" className='form-button'>Crear cuenta</Button>
      </Form>
    </div>
  );
}

export default Register;