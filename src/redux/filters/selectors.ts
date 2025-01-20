import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectEvents = (state: RootState) => state.events.events;

export const selectSearchQuery = (state: RootState) => state.filters;

export const selectFilteredEvents = createSelector([selectEvents, selectSearchQuery], (events, filters) => {
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      event.date.toLowerCase().includes(filters.date.toLowerCase()) &&
      event.category.toLowerCase().includes(filters.category.toLowerCase())
  );

  return filteredEvents.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.startTime}`).getTime();
    const dateB = new Date(`${b.date}T${b.startTime}`).getTime();
    return dateA - dateB;
  });
});
