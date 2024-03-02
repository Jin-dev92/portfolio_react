import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./reducer";
import GLOBAL_CONFIG from "../config";

const RTKStore = configureStore({
  reducer: globalReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: GLOBAL_CONFIG.environment === "development",
});

export default RTKStore;
