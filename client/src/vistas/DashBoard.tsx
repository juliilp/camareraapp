import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchAllUsers } from "../redux/slices/userSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import UserAllUser from "../components/UserAllUser";
import { User } from "../interfaces/User";
export default function DashBoard() {
  const { user, isAuthenticate, allUser } = useUsers();
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticate === false || user.isAdmin === false) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticate]);

  useEffect(() => {
    console.log("holas");
    dispatch(fetchAllUsers());
  }, []);

  return (
    <main>
      {
        allUser?.map((u: User, index) => {
          return (
            <UserAllUser
              key={index}
              email={u.email}
              isAdmin={u.isAdmin}
              isChecked={u.isChecked}
              nombre={u.nombre}
              bannedAccount={u.bannedAccount}
            />
          );
        })}
    </main>
  );
}
