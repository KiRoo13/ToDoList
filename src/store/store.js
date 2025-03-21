import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/taskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
