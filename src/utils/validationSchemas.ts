import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string(),
});
