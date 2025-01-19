import { useDispatch, useSelector } from "react-redux";
import { selectFilteredEvents } from "../../redux/filters/selectors";
import { selectCurrentPage, selectPaginatedEvents } from "../../redux/events/selectors";
import { useEffect } from "react";
import { setPage } from "../../redux/events/slice";

import PaginationBar from "../PaginationBar/PaginationBar";
import EventItem from "../EventItem/EventItem";

import css from "./EventList.module.css";

export default function EventList() {
  const dispatch = useDispatch();

  const totalEvents = useSelector(selectFilteredEvents);
  const visibleEvents = useSelector(selectPaginatedEvents);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    if (visibleEvents.length === 0 && currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  }, [visibleEvents, currentPage, dispatch]);

  return (
    <>
      <ul className={css.eventList}>
        {visibleEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
      {totalEvents.length > 0 && <PaginationBar totalItems={totalEvents.length} />}
    </>
  );
}
