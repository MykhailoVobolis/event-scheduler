import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.string().required("Date is required"),
  startTime: Yup.string().required("Time is required"),
  endTime: Yup.string()
    .required("Time is required")
    .test("is-end-time-valid", "End time cannot be earlier than start time", function (value) {
      const { startTime } = this.parent;
      if (startTime && value) {
        const start = startTime.split(":").map(Number);
        const end = value.split(":").map(Number);
        const startMinutes = start[0] * 60 + start[1];
        const endMinutes = end[0] * 60 + end[1];
        return endMinutes >= startMinutes;
      }
      return true;
    }),
  category: Yup.string().required("Category is required"),
  description: Yup.string(),
});
