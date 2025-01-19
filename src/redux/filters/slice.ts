import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../../types";

const initialState: FilterState = {
  title: "",
  date: "",
  category: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<FilterState>) {
      state.title = action.payload.title;
      state.date = action.payload.date;
      state.category = action.payload.category;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
