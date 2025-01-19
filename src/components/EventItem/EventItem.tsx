import { Event } from "../../types";
import { useDispatch } from "react-redux";
import { addCurrentEvent, deleteEvent } from "../../redux/events/slice";

import css from "./EventItem.module.css";

interface EventItemProps {
  event: Event;
}

export default function EventItem({ event }: EventItemProps) {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteEvent(id));
  };

  const handleEdit = (event: Event) => {
    dispatch(addCurrentEvent(event));
  };

  return (
    <li className={css.eventItem}>
      <div className={css.wrapper}>
        <div className={css.aboutContainer}>
          <h3>{event.title}</h3>
          <p>Event date: {event.date}</p>
          <p>
            Event time: {event.startTime} - {event.endTime}
          </p>
          <p className={css.eventCategory}>Category: {event.category}</p>
        </div>
        <p className={css.eventDescription}>{event.description}</p>
      </div>
      <div className={css.buttonsContainer}>
        <button className={css.editButton} onClick={() => handleEdit(event)}>
          Edit
        </button>
        <button className={css.deleteButton} onClick={() => handleDelete(event.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
