import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { driver, passanger } from "./components/data/Data";
import OrderTaxi from './components/orderTaxi/OrderTaxi'
import RegisterAdmin from "./components/registerAdmin/RegisterAdmin";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DriverScreen from "./components/driverScreen/DriverScreen";
import DashBoard from "./components/dashBoard/DashBoard";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import { ThemeContextProvider } from "./service/themecontext/ThemeContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterAdmin from "./components/registerAdmin/RegisterAdmin";
import DataList from "./components/data/DataList";
// import Protected from "./components/protected/Protected";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/login",

      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/registerAdmin",
      element: <RegisterAdmin />,
    },
    {
      path: "/ListUsers",
      element: <DataList />,
    },
    {
      path: "/DriverScreen",
      element: <DriverScreen />,
    },
    {
      path: "/DriverScreen/ProfileSettings",
      element: <ProfileSettings user={driver} />, //se pisa el css
    },
    {
      path: "/OrderTaxi",
      element: <OrderTaxi />,
    },
    {
      path: "/RegisterAdmin",
      element: <RegisterAdmin />
    },
    {
      path: "*",
      element: <PageNotFound />,
    },


      // PATH PROTEGIDO


    // {
    //   path: "/",
    //   element: <DashBoard/>
    // },
    // {
    //   path: "/login",
    //   element: <Login />, 
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/registerAdmin",
    //   element: 
    //   <Protected>
    //     <RegisterAdmin />
    //   </Protected>,
    // },
    // {
    //   path: "/ListUsers",
    //   element: 
    //   <Protected>
    //     <DataList />
    //   </Protected>,
    // },
    // {
    //   path: "/DriverScreen",
    //   element:  
    //   <Protected>
    //     <DriverScreen />
    //   </Protected> 
    //   //problemas con css
    // },
    // {
    //   path: "/DriverScreen/ProfileSettings",
    //   element: 
    //   <Protected>
    //     <ProfileSettings user={driver}/>
    //   </Protected>  //se pisa el css
    // },
    // {
    //   path: "/OrderTaxi",
    //   element: 
    //   <Protected>
    //     <OrderTaxi/>
    //   </Protected>
    // },
    // {
    //   path: "*",
    //   element: <PageNotFound/>,
    // },
    
  ]);

  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );

}

export default App;
