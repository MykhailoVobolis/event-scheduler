import EventForm from "../EventForm/EventForm";
import Layout from "../Layout/Layout";
import { Event } from "../../types";

import css from "./App.module.css";

export default function App() {
  return (
    <Layout>
      <h1>Event Scheduler</h1>
      <EventForm />
    </Layout>
  );
}
