import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
export const RTKStore = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV === "development"
});