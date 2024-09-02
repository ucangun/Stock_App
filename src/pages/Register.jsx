import { Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required")
    .min(3, "username must be at least 3 characters!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "password must contain at least one digit!")
    .matches(/[a-z]/, "must contain lowercase letters!")
    .matches(/[A-Z]/, "must contain uppercase letters!")
    .matches(
      /[@$?!%&*.]+/,
      "must contain at least one special character(@$?!%&*.)"
    ),
});

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => <Form></Form>}
      </Formik>
    </div>
  );
};

export default Register;
