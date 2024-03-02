import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserSliceState } from "../interface/user/user-slice-state.interface";
import { UserModel } from "../../model/user.model.ts";

const initialState: IUserSliceState = {
  userList: [],
  currentUser: null,
};
export const userSlice = createSlice({
  name: SLICE_IDENTIFIER.USER_SLICE.toString(),
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<{ userList: UserModel[] }>) => {
      state.userList = action.payload.userList;
    },
    setCurrentUser: (
      state,
      action: PayloadAction<{ currentUser: UserModel }>,
    ) => {
      state.currentUser = action.payload.currentUser;
    },
  },
});
export const userSliceActions = userSlice.actions;
