import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface initialStateInterface {
    user: Object
}

const initialState : initialStateInterface = {
    user: {}
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers : {
        addUser : (state,action: PayloadAction) => {
            state.user = action
        }
    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer
