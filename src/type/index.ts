import RTKStore from "../redux/store.ts";

export type RootState = ReturnType<typeof RTKStore.getState>;
export type AppDispatch = typeof RTKStore.dispatch;
