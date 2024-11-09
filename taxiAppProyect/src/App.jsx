import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./service/themecontext/ThemeContext";
import { TranslationContextProvider } from "./service/traslationContext/TranslationContext";
import { driver, passanger } from "./components/data/Data";
import { AuthContextProvider } from "./service/authContext/AuthContext";

import OrderTaxi from './components/orderTaxi/OrderTaxi'
import RegisterAdmin from "./components/registerAdmin/RegisterAdmin";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DriverScreen from "./components/driverScreen/DriverScreen";
import DashBoard from "./components/dashBoard/DashBoard";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import DataList from "./components/data/DataList";
import Rides from "./components/rides/Rides";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Protected from "./components/protected/Protected";

function App() {
  const router = createBrowserRouter([

      // PATH PROTEGIDO

    //RUTAS PUBLICAS
    {
      path: "/",
      element: <DashBoard/>
    },
    {
      path: "/login",
      element: <Login />, 
    },
    {
      path: "/register",
      element: <Register />,
    },
    

    //RUTAS PROTEGIDAS
    {
      path: "/Rides",
      element: 
      <Protected allowedRoles = {["SuperAdmin", "Passenger"]}>
        <Rides />
      </Protected>,
    },
    {
      path: "/registerAdmin",
      element: 
      <Protected allowedRoles = {["SuperAdmin"]}>
        <RegisterAdmin />
      </Protected>,
    },
    {
      path: "/ListUsers",
      element: 
      <Protected allowedRoles = {["SuperAdmin"]}>
        <DataList />
      </Protected>,
    },
    {
      path: "/DriverScreen",
      element:  
      <Protected allowedRoles = {["Driver"]}>
        <DriverScreen />
      </Protected> 
      //problemas con css
    },
    {
      path: "/DriverScreen/ProfileSettings",
      element: 
      <Protected allowedRoles = {["Driver"]}>
        <ProfileSettings />
      </Protected>  //se pisa el css
    },
    {
      path: "/ProfileSettings",
      element: 
      <Protected allowedRoles = {["Passenger", "Driver", "SuperAdmin"]}>
        <ProfileSettings />
      </Protected> //se pisa el css
    },
    {
      path: "/OrderTaxi",
      element: 
      <Protected allowedRoles = {["SuperAdmin", "Passenger"]}>
        <OrderTaxi/>
      </Protected>
    },
    {
      path: "*",
      element: <PageNotFound/>,
    },
    
  ]);

  return (
    
    <ThemeContextProvider>
      <TranslationContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />  
        </AuthContextProvider> 
      </TranslationContextProvider>
    </ThemeContextProvider>
    
  );

}

export default App;
