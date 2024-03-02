import { userSlice } from "./slices/userSlice";
import { modalSlice } from "./slices/modalSlice";
import { IGlobalReducer } from "../type/interface/global-reducer.interface";

export const globalReducer: IGlobalReducer = {
  userSlice: userSlice.reducer,
  modalSlice: modalSlice.reducer,
};
