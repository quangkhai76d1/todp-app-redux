const initialState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log({ action, state });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
