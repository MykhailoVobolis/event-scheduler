import { Event } from "../types";

export const checkEventConflict = (newEvent: Event, events: Event[]): boolean => {
  return events.some((event) => {
    const eventStartTime = new Date(`${newEvent.date}T${newEvent.startTime}`).getTime();
    const eventEndTime = new Date(`${newEvent.date}T${newEvent.endTime}`).getTime();
    const existingEventStartTime = new Date(`${event.date}T${event.startTime}`).getTime();
    const existingEventEndTime = new Date(`${event.date}T${event.endTime}`).getTime();

    return eventStartTime < existingEventEndTime && eventEndTime > existingEventStartTime;
  });
};
