import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DashBoard() {
  const { user, isAuthenticate } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      isAuthenticate === false ||
      user.isAdmin === false
    ) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticate]);

  return <div>DashBoard</div>;
}
