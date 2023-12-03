import axios from "axios";
import { AuthenticateFalse, addUser } from "../redux/slices/userSlice";
import { Dispatch } from "@reduxjs/toolkit";

const userLogout = async (dispatch : Dispatch)  => {
  try {
    const res = await axios("/user/logout", { withCredentials: true });
    if (res.status === 200) {
      dispatch(addUser({}));
      dispatch(AuthenticateFalse());
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export default userLogout;