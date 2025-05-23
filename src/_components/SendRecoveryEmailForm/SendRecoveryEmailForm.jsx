import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./SendRecoveryEmailForm.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { sendRecoveryPwdEmail } from "../../redux/user/operations.js";
import { useTranslation } from "react-i18next";

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RecoverySchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegEx, "Enter a valid email address")
    .required("Email required"),
});

export const SendRecoveryEmailForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (values, actions) => {
    if (values.email === "") return;

    // eslint-disable-next-line no-undef
    values.link_to_redirect = process.env.REACT_APP_RECOVERY_URL;
    console.log(values, "values form");

    dispatch(
      sendRecoveryPwdEmail({
        ...values,
        successMessage: t("auth.emailSentSuccess"),
        notFoundMessage: t("auth.emailNotFound"),
        errorMessage: t("auth.somethingWentWrong"),
      })
    );
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
