import { Formik, Form, Field, ErrorMessage } from "formik";
import { Event } from "../../types";
import { nanoid } from "@reduxjs/toolkit";
import { validationSchema } from "../../utils/validationSchemas";

import css from "./EventForm.module.css";

export default function EventForm() {
  const initialValues: Event = {
    id: "",
    title: "",
    date: "",
    time: "",
    category: "",
    description: "",
  };

  const handleSubmit = (values: Event, actions: { resetForm: () => void }) => {
    const event = { ...values, id: nanoid() };

    console.log("Submitted Event:", event);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="title">Title:</label>
          <Field id="title" name="title" placeholder="Название" />
          <ErrorMessage className={css.error} name="title" component="span" />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <Field id="date" name="date" type="date" />
          <ErrorMessage className={css.error} name="date" component="span" />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <Field id="time" name="time" type="time" />
          <ErrorMessage className={css.error} name="time" component="span" />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <Field as="select" id="category" name="category">
            <option value="">Select category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Education">Education</option>
          </Field>
          <ErrorMessage className={css.error} name="category" component="span" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <Field id="description" name="description" as="textarea" placeholder="Описание" />
          <ErrorMessage className={css.error} name="description" component="span" />
        </div>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
}
