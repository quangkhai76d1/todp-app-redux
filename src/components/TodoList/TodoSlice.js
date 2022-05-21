// const initialState = [
//   { id: 1, name: "Learn React", completed: false, priority: "High" },
//   { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
//   { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoList":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoList: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
