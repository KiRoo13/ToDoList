import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  toDo: [],
  inProgress: [],
  done: [],
  searchText: {
    toDo: "",
    inProgress: "",
    done: "",
  },
};

const filterTask = (status, id) => status.filter((el) => el.id !== id);

const taskSlice = createSlice({
  name: "task",
  initialState: initialTasks,
  reducers: {
    addTask: (slice, action) => {
      const task = action.payload;
      const { status } = task;
      slice[status].push(task);
    },
    removeTask: (slice, action) => {
      const task = action.payload;
      const { status, id } = task;
      slice[status] = filterTask(slice[status], id);
    },
    changeStatus: (slice, action) => {
      const [currentStatus, task] = action.payload;
      const newTask = { ...task };
      const { status, id } = newTask; 
      newTask.status = currentStatus;
      slice[currentStatus].push(newTask);
      slice[status] = filterTask(slice[status], id);
    },
    editText: (slice, action) => {
      const [task, newText] = action.payload;
      slice[task.status].filter((el) =>
        el.id === task.id ? (el.title = newText) : el
      );
    },
    searchTask: (slice, action) => {
      const [searchText, searchTitle] = action.payload;
      slice.searchText[searchTitle] = searchText;
    },
  },
});

export const { addTask, removeTask, changeStatus, editText, searchTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
