import React from "react";
import { Box, Button, TextField } from "@mui/material";

import { Form } from "formik";

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
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
  );
};

export default LoginForm;