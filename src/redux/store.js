import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
export const RTKStore = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV === "development"
});