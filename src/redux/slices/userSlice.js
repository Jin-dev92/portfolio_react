import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    currentUser: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserList: (state, action) => {
            state.userList = action.payload.userList
        },
        // getUserList: (state, action) => {
        //     return state.userList
        // },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.user
        },
        // getCurrentUser: (state, action) => {
        //     return state.currentUser
        // },
    },
});

export const {getUserList, setUserList, getCurrentUser, setCurrentUser} = userSlice.actions
