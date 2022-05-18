import { createSelector } from "reselect";

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
export const prioritySelector = (state) => state.filters.priority;

export const newTodo = createSelector(
  todoListSelector,
  statusSelector,
  prioritySelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
