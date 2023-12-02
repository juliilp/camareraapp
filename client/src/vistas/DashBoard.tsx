import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchAllUsers } from "../redux/slices/userSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import UserAllUser from "../components/UserAllUser";
import { User } from "../interfaces/User";
import SectionProducto from "../components/SectionProducto";
export default function DashBoard() {
  const { user, isAuthenticate, allUser } = useUsers();

  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticate, user.isAdmin);
    if (isAuthenticate === false || user.isAdmin === false) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticate]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);


  return (
    <main className="">
      <h1 className="text-center my-6 text-3xl font-semibold">Usuarios</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allUser?.map((u: User, index) => {
          return (
            <UserAllUser
              key={index}
              email={u.email!}
              isAdmin={u.isAdmin!}
              isChecked={u.isChecked!}
              nombre={u.nombre!}
              bannedAccount={u.bannedAccount!}
              _id={u._id!}
            />
          );
        })}
      </section>
      <SectionProducto />
      
    </main>
  );
}
