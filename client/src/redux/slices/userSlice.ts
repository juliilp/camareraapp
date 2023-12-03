import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User"; 
import allUsers from "../../utils/allUsers";

interface initialStateInterface {
  user: User;
  isAuthenticate: Boolean | null;
  allUser: User[];
}

const initialState: initialStateInterface = {
  user: {},
  isAuthenticate: null,
  allUser: [],
};

export const fetchAllUsers = createAsyncThunk("user/fetchAllUsers", async () => {
  const users: User[] = await allUsers();
  return users;
});

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
      state.isAuthenticate = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.allUser = action.payload;
    });
  },
});

export const { addUser, AuthenticateTrue, AuthenticateFalse } = userSlice.actions;

export default userSlice.reducer;
