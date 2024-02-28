import { userSlice } from "./slices/userSlice";
import { modalSlice } from "./slices/modalSlice";

export const reducer = {
  userSlice: userSlice.reducer,
  modalSlice: modalSlice.reducer,
};
