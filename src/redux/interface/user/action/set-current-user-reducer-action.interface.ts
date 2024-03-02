import { IUserSliceState } from "../user-slice-state.interface";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ISetCurrentUserReducerAction
  extends PayloadAction<IUserSliceState> {}
