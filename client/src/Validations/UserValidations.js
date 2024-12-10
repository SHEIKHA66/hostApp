import * as yup from "yup";

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Not valid email format")
    .required("Email is required"),
  password: yup.string().min(6).max(20).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required(),
  number: yup.number("input must be a number").required("number is required"),
  note: yup.string().required("note is required"),
  date: yup.date().required("date is required"),
  time: yup.string().required("time is required"),
});
