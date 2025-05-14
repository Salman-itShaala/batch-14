import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();

  console.log(data.todos);

  const todos = data.todos;

  return todos;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
    status: "idle", // "loading" , "success", "error"
  },

  reducers: {
    addTodo: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "success";
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
