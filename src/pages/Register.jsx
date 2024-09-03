import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useAuthCall from "../hooks/useAuthCall";

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
  const { register } = useAuthCall();
  return (
    <div className="py-36 background">
      <Formik
        initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "center",
              }}
            >
              <TextField
                id="username"
                name="username"
                label="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                sx={{ width: "30ch" }}
              />

              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{ width: "30ch" }}
              />
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ width: "30ch" }}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ width: "30ch" }}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ width: "30ch" }}
              />
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
