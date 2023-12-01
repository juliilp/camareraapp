import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DashBoard() {
  const { user } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !user ||
      typeof user.isAdmin === "undefined" ||
      user.isAdmin === false
    ) {
      navigate("/");
    }
  }, [user, navigate]);

  return <div>DashBoard</div>;
}
