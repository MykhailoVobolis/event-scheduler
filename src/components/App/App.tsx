import { useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/selectors";

import EventForm from "../EventForm/EventForm";
import Layout from "../Layout/Layout";
import EventList from "../EventList/EventList";
import FilterBar from "../FilterBar/FilterBar";

import css from "./App.module.css";

export default function App() {
  const events = useSelector(selectEvents);

  return (
    <Layout>
      <h1>Event Scheduler App</h1>
      <div className={css.container}>
        <EventForm />
        <div>
          {events.length > 0 && <FilterBar />}
          <EventList />
        </div>
      </div>
    </Layout>
  );
}
