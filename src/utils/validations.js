import * as Yup from "yup";

export const RegisterationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter an active email address").email(),
  username: Yup.string().required("First Name is required").min(3),
  password: Yup.string().required().min(3),
  confirm_password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
});
