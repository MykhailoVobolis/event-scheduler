import { selectFilteredEvents } from "../filters/selectors";
import { RootState } from "../store";

export const selectEvents = (state: RootState) => state.events.events;

export const selectCurrentPage = (state: RootState) => state.events.currentPage;

export const selectItemsPerPage = (state: RootState) => state.events.itemsPerPage;

export const selectPaginatedEvents = (state: RootState) => {
  const events = selectFilteredEvents(state);
  const currentPage = selectCurrentPage(state);
  const itemsPerPage = selectItemsPerPage(state);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return events.slice(startIndex, endIndex);
};
