import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export default function RutaProtegidaAdmin() {
  const { isAuthenticate, user } = useUsers();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticate, user.isAdmin);
    if (
      isAuthenticate === false ||
      user.isAdmin === false ||
      isAuthenticate === null
    ) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticate]);

  return <Outlet></Outlet>;
}
