import { configureStore } from "@reduxjs/toolkit";
import myStore from "./features/common/myStore";

export const store = configureStore({
  reducer: {
    common: myStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
