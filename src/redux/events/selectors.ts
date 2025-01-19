import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredEvents } from "../filters/selectors";
import { RootState } from "../store";

export const selectEvents = (state: RootState) => state.events.events;

export const selectCurrentPage = (state: RootState) => state.events.currentPage;

export const selectItemsPerPage = (state: RootState) => state.events.itemsPerPage;

export const selectPaginatedEvents = createSelector(
  [selectFilteredEvents, selectCurrentPage, selectItemsPerPage],
  (events, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return events.slice(startIndex, endIndex);
  }
);
