import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import ContadorPedidosTerminados from "./ContadorPedidosTerminados";
function Navbar() {
  const { user, isAuthenticate } = useUsers();
  console.log(user);
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
            </li>
          }
        </ul>
      </nav>
      <ContadorPedidosTerminados />
    </header>
  );
}

export default Navbar;
