import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    currentUser: null,
    hiddenMenu: true,
}

const userSlice = createSlice({
    name: "user",
    initialState: initial_state,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state, 
                currentUser: action.payload, 
            }
        },

        toggleHiddenMenu: (state) => {
            return {
                ...state, 
                hiddenMenu: !state.hiddenMenu, 
            }
        }, 
    }
})

export const {
    setCurrentUser,
    toggleHiddenMenu
} = userSlice.actions

export default userSlice.reducer