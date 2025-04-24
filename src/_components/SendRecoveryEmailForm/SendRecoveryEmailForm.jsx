import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./SendRecoveryEmailForm.module.scss";
import clsx from "clsx";

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RecoverySchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegEx, "Enter a valid email address")
    .required("Email required"),
});

export const SendRecoveryEmailForm = () => {
  const handleSubmit = (values, actions) => {
    if (values.email === "") return;

    console.log(values, "values form");
    // dispatch(login(values)); send recovery email
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RecoverySchema}
    >
      {({ touched, errors }) => (
        <Form className={css.form}>
          <h2 className={css.title}>Password Recovery</h2>
          <p className={css.discription}>
            Enter your email address to recover your password
          </p>
          <label className={css.label}>
            Email
            <Field
              className={
                touched.email && errors.email
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              type="text"
              name="email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          <button className={css.button} type="submit">
            Send
            {/* {isLoading ? <Loader /> : "Sign in"} */}
          </button>
        </Form>
      )}
    </Formik>
  );
};
