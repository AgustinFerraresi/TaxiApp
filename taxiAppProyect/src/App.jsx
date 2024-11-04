import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { driver } from "./components/data/Data";
import OrderTaxi from "./components/orderTaxi/OrderTaxi";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DriverScreen from "./components/driverScreen/DriverScreen";
import DashBoard from "./components/dashBoard/DashBoard";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import { ThemeContextProvider } from "./service/themecontext/ThemeContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
