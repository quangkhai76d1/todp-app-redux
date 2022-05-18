import { combineReducers } from "redux";
import FilterReducer from "../components/Filters/FilterSlice";
import TodoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: FilterReducer(state.filters, action),
//     todoList: TodoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: FilterReducer,
  todoList: TodoListReducer,
  statusFilter: FilterReducer,
});

export default rootReducer;
