import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchAllUsers } from "../redux/slices/userSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export default function DashBoard() {
  const { user, isAuthenticate,allUser } = useUsers();
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      isAuthenticate === false ||
      user.isAdmin === false
    ) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticate]);

  useEffect(() => {
    dispatch(fetchAllUsers())
  },[])
  console.log(allUser)
  return <main>
    hola
  </main>
}
