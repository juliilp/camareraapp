import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";

interface Props {
  children: ReactNode
}

export default function RutaProtegidaAdmin({children}: Props) {
  console.log("hola")
  const { isAuthenticate, user } = useUsers();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      isAuthenticate === false ||
      user.isAdmin === false ||
      isAuthenticate === null
    ) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticate]);

  return <>
  {children}
  </>;
}
