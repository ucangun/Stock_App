import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { login } = useAuthCall();

  return (
    <div className="py-48 background">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <LoginForm {...props} />}
      ></Formik>
    </div>
  );
};

export default Login;
