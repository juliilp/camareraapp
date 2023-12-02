import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchAllUsers } from "../redux/slices/userSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export default function DashBoard() {
  const { user, isAuthenticate } = useUsers();
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state:RootState) => state.user.allUser )
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
  console.log(state)
  return <main>
    hola
  </main>
}
