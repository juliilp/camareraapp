import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User"; 
interface initialStateInterface {
  user: User;
  isAuthenticate: Boolean;
}

const initialState: initialStateInterface = {
  user: {},
  isAuthenticate: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    AuthenticateTrue: (state) => {
      state.isAuthenticate = true;
    },
    AuthenticateFalse: (state) => {
      state.isAuthenticate = false;
    },
  },
});

export const { addUser, AuthenticateTrue, AuthenticateFalse } =
  userSlice.actions;

export default userSlice.reducer;
