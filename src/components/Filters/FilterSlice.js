// const initialState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation
      state.search = action.payload;
    }, //=>{type:'filters/searchFilterChange}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
