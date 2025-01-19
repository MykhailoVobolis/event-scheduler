export interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  category: string;
  description: string;
}

export interface EventState {
  events: Event[];
  currentEvent: Event | null;
  currentPage: number;
  itemsPerPage: number;
}

export interface FilterState {
  title: string;
  date: string;
  category: string;
}
