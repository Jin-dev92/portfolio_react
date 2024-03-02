import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceState } from "../interface/user/user-slice-state.interface";
import { IUserSliceCaseReducers } from "../interface/user/reducer/user-slice-case-reducers.interface";

const initialState: IUserSliceState = {
  userList: [],
  currentUser: null,
};
export const userSlice = createSlice<IUserSliceState, IUserSliceCaseReducers>({
  name: SLICE_IDENTIFIER.USER_SLICE.toString(),
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload.userList;
      return state;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.currentUser;
      return state;
    },
  },
});
export const { setUserList, setCurrentUser } = userSlice.actions;
