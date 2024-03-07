import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Name should be at least 5 characters"),
  email: Yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: Yup.number()
   .min(10, "Must be more than 10 characters")
   .required("This field is requried"),
  adress: Yup.string()
    .required("Message is required")
    .min(5, "Description should be at least 5 characters"),
});

export default validationSchema;
