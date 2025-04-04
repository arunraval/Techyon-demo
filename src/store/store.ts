import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import projectReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
