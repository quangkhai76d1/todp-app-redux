export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoList = (id) => {
  return {
    type: "todoList/toggleTodoList",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: "filters/priorityFilterChange",
    payload: priority,
  };
};
