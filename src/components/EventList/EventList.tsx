import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../redux/filters/selectors";

import EventItem from "../EventItem/EventItem";

import css from "./EventList.module.css";

export default function EventList() {
  const visibleEvents = useSelector(selectFilteredEvents);

  return (
    <ul className={css.eventList}>
      {visibleEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
