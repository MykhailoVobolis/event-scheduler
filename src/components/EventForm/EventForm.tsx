import { Formik, Form } from "formik";
import { Event } from "../../types";
import { nanoid } from "@reduxjs/toolkit";
import { checkEventConflict } from "../../utils/checkEventConflict";
import { validationSchema } from "../../utils/validationSchemas";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentEvent, addEvent, editEvent } from "../../redux/events/slice";
import { selectCurrentEvent, selectEvents } from "../../redux/events/selectors";

import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import TextAreaField from "../TextAreaField/TextAreaField";

import css from "./EventForm.module.css";

export default function EventForm() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const currentEvent = useSelector(selectCurrentEvent);

  const initialValues: Event = currentEvent || {
    id: "",
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    category: "",
    description: "",
  };

  const handleSubmit = (values: Event, actions: { resetForm: () => void }) => {
    const eventToSave = currentEvent ? values : { ...values, id: nanoid() };

    if (checkEventConflict(eventToSave, events)) {
      alert("An event is already scheduled for this time. Please choose another time.");
      return;
    }

    if (currentEvent) {
      dispatch(editEvent(values));
      dispatch(addCurrentEvent(null));
    } else {
      dispatch(addEvent(eventToSave));
    }

    actions.resetForm();
  };

  return (
    <Formik
      key={currentEvent ? currentEvent.id : "new-event"}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <InputField id="title" name="title" type="text" label="Title" placeholder="Title" />
        <InputField id="date" name="date" type="date" label="Date" />
        <InputField id="startTime" name="startTime" type="time" label="Start Time" />
        <InputField id="endTime" name="endTime" type="time" label="End Time" />
        <SelectField id="category" name="category" label="Category" />
        <TextAreaField id="description" name="description" label="Description" placeholder="Description" />
        <button className={css.button} type="submit">
          {currentEvent ? "Update Event" : "Save Event"}
        </button>
      </Form>
    </Formik>
  );
}
