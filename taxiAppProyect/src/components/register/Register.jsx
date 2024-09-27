import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css";
import { useState } from 'react';


function Register() {
  const [userType,setUserType] = useState("");

  const handleChange = (event) =>{
    setUserType(event.target.value);
  }

  return (
    <div id='form-container'>
      
      <Form>
        <img src="./src/assets/logoTaxiApp.png" alt="logo"></img>
        <h1>Registrarse</h1>
        
        <div>
          <label htmlFor="name">Nombre</label><br />
          <input type="text" name="name" id="name" placeholder='Ingrese su nombre' />
        </div>

        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" name="email" id="email" placeholder='Ingrese su email' required />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label><br />
          <input type="password" name="password" id="password" placeholder='Ingrese su contraseña' required />
        </div>

        <div>
          <label htmlFor="dni">DNI</label><br />
          <input type="dni" name="dni" id="dni" placeholder='Ingrese su DNI' required />
        </div>

        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          type="radio"
          name='userType' 
          value="passenger"  
          className='userType' 
          label="Soy pasajero"  
          onChange={handleChange}
          defaultChecked
          />

          <Form.Check 
          type="radio" 
          name='userType' 
          value="taxi" 
          className='userType'
          id='taxi' 
          label="Soy taxista" 
          onChange={handleChange}
          />
        </Form.Group>

        {
          userType === "taxi" && 
          <div>
            <div>
              <label htmlFor="car">Vehiculo</label><br />
              <input type="car" name="car" id="car" placeholder='Ingrese su vehiculo' required />
            </div>

            <div>
              <label htmlFor="car">Pantente</label><br />
              <input type="car" name="car" id="car" placeholder='Ingrese la patente del taxi' required />
            </div>
          </div>

          
        }
        <Button variant="warning" type="submit">Enviar</Button>
      </Form>
    </div>
  );
}

export default Register;