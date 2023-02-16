import * as Yup from "yup";

export const RegisterationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a registered email")
    .email()
    .label("Email"),
  first_name: Yup.string()
    .required("First Name is required")
    .min(3)
    .label("First Name"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(3)
    .label("Last Name"),
  password: Yup.string()
    .required()
    .min(8, "Password must have at least 6 characters")
    .label("Password"),
  username: Yup.string()
    .matches(/^[0-9]+$/, "Should be only digits")
    .label("Your referrer code")
    .min(5, "should be more than 4 digits")
    .max(10, "should be less than 10 digits"),
});
