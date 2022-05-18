const initialState = [
  { id: 1, name: "Learn React", completed: false, priority: "High" },
  { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
  { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
];

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default TodoListReducer;
