import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Form } from "formik";
import { useTranslation } from "react-i18next";

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  const { t } = useTranslation();
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
          label={t("userName")}
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
          label={t("firstName")}
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
          label={t("lastName")}
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
          label={t("email")}
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
          label={t("password")}
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          sx={{ width: "30ch" }}
        />
        <Button type="submit" variant="contained">
          {t("register")}
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
