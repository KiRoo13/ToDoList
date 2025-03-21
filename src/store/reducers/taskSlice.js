import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  allTasks: [],
  searchText: {
    toDo: "",
    inProgress: "",
    done: "",
  },
};

const filterTask = (state, id) => state.filter((el) => el.id !== id);

const taskSlice = createSlice({
  name: "task",
  initialState: initialTasks,
  reducers: {
    addTask: (slice, { payload }) => {
     slice.allTasks.push(payload)
    },
    removeTask: (slice, { payload }) => {
      const task = payload;
      slice.allTasks = filterTask(slice.allTasks, task.id);
    },
    changeStatus: (slice, { payload }) => {
      const [currentStatus, task] = payload;
      const { id } = task.id; 
      slice.allTasks = slice.allTasks.map((task)=> task.id === id ? {...task, status: currentStatus} : task)
      console.log(currentStatus, slice.allTasks)
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
