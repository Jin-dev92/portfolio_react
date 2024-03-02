import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./reducer";

const RTKStore = configureStore({
  reducer: globalReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === "development",
});

export default RTKStore;
