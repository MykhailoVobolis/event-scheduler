import { Formik, Form } from "formik";
import { Event } from "../../types";
import { nanoid } from "@reduxjs/toolkit";
import { checkEventConflict } from "../../utils/checkEventConflict";
import { validationSchema } from "../../utils/validationSchemas";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../redux/events/slice";
import { selectEvents } from "../../redux/events/selectors";
import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import TextAreaField from "../TextAreaField/TextAreaField";

import css from "./EventForm.module.css";

export default function EventForm() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  const initialValues: Event = {
    id: "",
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    category: "",
    description: "",
  };

  const handleSubmit = (values: Event, actions: { resetForm: () => void }) => {
    const event = { ...values, id: nanoid() };

    if (checkEventConflict(event, events)) {
      alert("An event is already scheduled for this time. Please choose another time.");
      return;
    }

    dispatch(addEvent(event));

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <InputField id="title" name="title" type="text" label="Title" placeholder="Title" />
        <InputField id="date" name="date" type="date" label="Date" />
        <InputField id="startTime" name="startTime" type="time" label="Start Time" />
        <InputField id="endTime" name="endTime" type="time" label="End Time" />
        <SelectField id="category" name="category" label="Category" />
        <TextAreaField id="description" name="description" label="Description" placeholder="Description" />
        <button className={css.button} type="submit">
          Save Event
        </button>
      </Form>
    </Formik>
  );
}
