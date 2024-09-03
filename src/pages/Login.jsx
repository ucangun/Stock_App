import { Box, Button, TextField } from "@mui/material";
import useAuthCall from "../hooks/useAuthCall";
import { Form, Formik } from "formik";

const Login = () => {
  const { login } = useAuthCall();
  return (
    <div className="py-48 background">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          login(values);
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
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
