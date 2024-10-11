import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Pagina principal</h1>
        </div>
      ),
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
      path: "*",
      element: <PageNotFound/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
