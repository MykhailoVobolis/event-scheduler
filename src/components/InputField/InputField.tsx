import { Field, ErrorMessage } from "formik";

import css from "./InputField.module.css";

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

export default function InputField({ id, name, type, label, placeholder }: InputFieldProps) {
  return (
    <div className={css.inputGroup}>
      <label className={css.label} htmlFor={id}>
        {label}:
      </label>
      <Field className={css.input} id={id} name={name} type={type} placeholder={placeholder} />
      <ErrorMessage className={css.error} name={name} component="span" />
    </div>
  );
}
