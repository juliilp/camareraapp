// RutaUserAuthenticate.tsx

import { useEffect, ReactNode } from "react";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

interface RutaUserAuthenticateProps {
  children: ReactNode;
}

export default function RutaUserAuthenticate({ children }: RutaUserAuthenticateProps) {
  const navigate = useNavigate();
  const { isAuthenticate } = useUsers();

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate]);

  return children;
}
