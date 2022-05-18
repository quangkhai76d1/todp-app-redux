const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priorityFilterChange":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
