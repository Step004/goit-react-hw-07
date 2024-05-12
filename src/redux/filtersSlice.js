import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = {
  filters: {
    name: "",
  },
};


const slice = createSlice({
  name: "filters",
  initialState: contactInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
