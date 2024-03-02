import { SliceCaseReducers } from "@reduxjs/toolkit";
import { IUserSliceState } from "../user-slice-state.interface";
import { Reducer } from "react";
import { ISetUserListReducerAction } from "../action/set-user-list-reducer-action.interface";
import { ISetCurrentUserReducerAction } from "../action/set-current-user-reducer-action.interface";

export interface IUserSliceCaseReducers
  extends SliceCaseReducers<IUserSliceState> {
  setUserList: Reducer<IUserSliceState, ISetUserListReducerAction>;
  setCurrentUser: Reducer<IUserSliceState, ISetCurrentUserReducerAction>;
}
