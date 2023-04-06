import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    currentUser: null,
}
// 테스트용 주석 1
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserList: (state, action) => {
            state.userList = action.payload.userList
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.user
        },
    },
});

export const {setUserList, setCurrentUser} = userSlice.actions
