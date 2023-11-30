// hooks/useAdminRedirect.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAdminRedirect = (isAdmin: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);
};

export default useAdminRedirect;
