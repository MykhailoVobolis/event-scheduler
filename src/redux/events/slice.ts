import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, EventState } from "../../types";

const initialState: EventState = {
  events: [],
  currentPage: 1,
  itemsPerPage: 2,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,

  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    editEvent: (state, action: PayloadAction<Event>) => {
      const index = state.events.findIndex((event) => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const eventsReducer = eventsSlice.reducer;
export const { addEvent, editEvent, deleteEvent, setPage } = eventsSlice.actions;
