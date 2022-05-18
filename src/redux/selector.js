import { createSelector } from "reselect";
import { statusFilterChange } from "./actions";

// export const todoListSelector = (state) =>
//   state.todoList.filter((todo) => {
//     const searchText = searchTextSelector(state);
//     const newTodo = todo.name.includes(searchText);
//     return newTodo;
//   });
// export const searchTextSelector = (state) => state.filters.search;

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusSelector = (state) => state.filters.status;

export const newTodo = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
