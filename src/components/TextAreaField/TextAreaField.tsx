import { Field, ErrorMessage } from "formik";

import css from "./TextAreaField.module.css";

interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
}

export default function TextAreaField({ id, name, label, placeholder }: TextAreaFieldProps) {
  return (
    <div className={css.inputGroup}>
      <label className={css.label} htmlFor={id}>
        {label}:
      </label>
      <Field className={css.textarea} id={id} name={name} as="textarea" placeholder={placeholder} />
      <ErrorMessage className={css.error} name={name} component="span" />
    </div>
  );
}
