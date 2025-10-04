import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  allTasks: JSON.parse(localStorage.getItem("task")) || [],
};

const filterTask = (state, id) => state.filter((el) => el.id !== id);
const overwriteLocalStorage = (newValue) =>
  localStorage.setItem("task", JSON.stringify(newValue));

const taskSlice = createSlice({
  name: "task",
  initialState: initialTasks,
  reducers: {
    addTask: (state, { payload }) => {
      state.allTasks.push(payload);
      overwriteLocalStorage(state.allTasks);
    },
    removeTask: (state, { payload }) => {
      const task = payload;
      state.allTasks = filterTask(state.allTasks, task.id);
      overwriteLocalStorage(state.allTasks);
    },
    changeStatus: (state, { payload }) => {
      const [currentStatus, taskP] = payload;
      state.allTasks = state.allTasks.map((task) =>
        task.id === taskP.id ? { ...task, status: currentStatus } : task
      );
      overwriteLocalStorage(state.allTasks);
    },
    editText: (state, { payload }) => {
      const [newText, taskP] = payload;
      state.allTasks = state.allTasks.map((task) =>
        task.id === taskP.id ? { ...task, title: newText } : task
      );
      overwriteLocalStorage(state.allTasks);
    },
  },
});

export const { addTask, removeTask, changeStatus, editText } =
  taskSlice.actions;

export const taskReducer = taskSlice.reducer;
