import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import ContadorPedidosTerminados from "./ContadorPedidosTerminados";
import userLogout from "../utils/userLogout";
import { useDispatch } from "react-redux";
function Navbar() {
  const { user, isAuthenticate } = useUsers();
  const dispatch = useDispatch()

  const handlerLogout = async () => await userLogout(dispatch)
  return (
    <header className="w-full h-10 border-b mb-4 ">
      <nav className="h-full">
        <ul className="flex h-full   items-center gap-8 ">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/chef">Chef</Link>
          </li>
          <li>
            <Link to="/pedidoListo">Pedidos</Link>
          </li>
          {isAuthenticate === null && (
            <>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/registro">
                <li>Registro</li>
              </Link>
            </>
          )}
          {
            isAuthenticate && <li>
                <span>{user.nombre}</span>
                <button onClick={handlerLogout} >Desloguear</button>
            </li>
          }
          {
            user && user.isAdmin === true &&
            <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          }
        </ul>
      </nav>
      <ContadorPedidosTerminados />
    </header>
  );
}

export default Navbar;
