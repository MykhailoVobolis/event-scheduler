import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../redux/filters/selectors";
import { selectPaginatedEvents } from "../../redux/events/selectors";

import PaginationBar from "../PaginationBar/PaginationBar";
import EventItem from "../EventItem/EventItem";

import css from "./EventList.module.css";

export default function EventList() {
  const totalEvents = useSelector(selectFilteredEvents);
  const visibleEvents = useSelector(selectPaginatedEvents);

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
