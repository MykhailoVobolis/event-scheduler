import { Field, ErrorMessage } from "formik";

import css from "./SelectField.module.css";

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
}

export default function SelectField({ id, name, label }: SelectFieldProps) {
  return (
    <div className={css.inputGroup}>
      <label className={css.label} htmlFor={id}>
        {label}:
      </label>
      <Field className={css.select} as="select" id={id} name={name}>
        <option value="">Select category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Education">Education</option>
      </Field>
      <ErrorMessage className={css.error} name={name} component="span" />
    </div>
  );
}
