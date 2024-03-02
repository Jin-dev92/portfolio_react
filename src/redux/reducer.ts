import { userSlice } from "./slices/userSlice";
import { modalSlice } from "./slices/modalSlice";
import { IGlobalReducer } from "./interface/global-reducer.interface.ts";

export const globalReducer: IGlobalReducer = {
  userSlice: userSlice.reducer,
  modalSlice: modalSlice.reducer,
};
