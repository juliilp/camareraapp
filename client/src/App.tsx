import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./vistas/DashBoard";
import Home from "./vistas/Home";
import Login from "./vistas/Login";
import Registro from "./vistas/Registro";
import Chef from "./vistas/Chef";
import Mosa from "./vistas/Mosa";
import MesaID from "./vistas/MesaID";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addUser, AuthenticateFalse, AuthenticateTrue } from "./redux/slices/userSlice";
axios.defaults.baseURL = "http://localhost:3001/";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registro",
      element: <Registro />,
    },
    {
      path: "/chef",
      element: <Chef />,
    },
    {
      path: "/mosa",
      element: <Mosa />,
    },
    {
      path: "/mesa/:id",
      element: <MesaID />,
    },
  ]);
  const queryClient = new QueryClient();
  const dispatch = useDispatch()
  useEffect(() => {
   async  function sessionUser() {
      const cookies = Cookies.get()
      if(cookies.token) {
        try {
          const res = await axios.get("/user/verifyToken", {withCredentials: true})
          dispatch(addUser(res.data))
          dispatch(AuthenticateTrue())
        } catch (error) {
          dispatch(AuthenticateFalse())
          console.log(error)
        }
      }
  
    }
    sessionUser()
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </>
  );
}
