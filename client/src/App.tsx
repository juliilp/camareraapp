import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./vistas/DashBoard";
import Home from "./vistas/Home";
import Login from "./vistas/Login";
import Registro from "./vistas/Registro";
import Chef from "./vistas/Chef";
import PedidoListo from "./vistas/PedidoListo";
import MesaID from "./vistas/MesaID";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {
  addUser,
  AuthenticateFalse,
  AuthenticateTrue,
} from "./redux/slices/userSlice";
import RutaProtegidaAdmin from "./utils/RutaProtegidaAdmin";
import RutaUserAuthenticate from "./utils/RutaUserAuthenticate";
import Navbar from "./components/Navbar";
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true
export default function App() {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();
  useEffect(() => {
    async function sessionUser() {
      const token = Cookies.get("token");

      if (token) {
        try {
          const res = await axios.get("/user/verifyToken", {
            withCredentials: true,
          });
          dispatch(addUser(res.data));
          dispatch(AuthenticateTrue());
        } catch (error) {
          dispatch(AuthenticateFalse());
          console.log(error);
        }
      }
    }
    sessionUser();
  }, []);
  return (
    
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
      <Route  path="/" element={ <Home />} />
      <Route path="/dashboard" element={
         <RutaProtegidaAdmin>
         <DashBoard />
       </RutaProtegidaAdmin>
      }  />
      <Route path="/login" element={
        <RutaUserAuthenticate>
          <Login />
        </RutaUserAuthenticate>} />
      
      <Route path="/registro" element={
         <RutaUserAuthenticate>
         <Registro />
       </RutaUserAuthenticate>
      } />
      <Route path="/chef" element={<Chef />} />
      <Route path="/pedidolisto" element={<PedidoListo />} />
      <Route path="/mesa/:id" element={<MesaID />} />
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    
  );
}
