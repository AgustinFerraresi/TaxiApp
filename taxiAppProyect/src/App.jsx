
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { driver, passanger } from "./components/data/Data";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DriverScreen from "./components/driverScreen/DriverScreen";
import DashBoard from "./components/dashBoard/DashBoard";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard/>
    },
    {
      path: "/login",
      element: <Login />, //se pisa el css
    },
    {
      path: "/register",
      element: <Register />, //se pisa el css
    },
    {
      path: "/DriverScreen",
      element: <DriverScreen />, //problemas con css
    },
    {
      path: "/DriverScreen/ProfileSettings",
      element: <ProfileSettings user={driver}/> //se pisa el css
    },
    {
      path: "*",
      element: <PageNotFound/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
