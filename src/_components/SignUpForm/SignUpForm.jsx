import { Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import clsx from "clsx";
import { useState } from "react";
import css from "./SignUpForm.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Eye } from "../../assets/icons/eye24.svg";
import { ReactComponent as Hide } from "../../assets/icons/hide24.svg";
import { useTranslation } from "react-i18next";
// import { selectIsLoading } from "@/redux/user/selectors.js";
import { register } from "../../redux/auth/operations.js";

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const getSignupSchema = t =>
  Yup.object().shape({
    name: Yup.string()
      .min(2, t("validation.nameMin"))
      .max(64, t("validation.nameMax"))
      .required(t("validation.nameRequired")),
    email: Yup.string()
      .matches(emailRegEx, t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    password: Yup.string()
      .min(1, t("validation.passwordMin"))
      .max(64, t("validation.passwordMax"))
      .required(t("validation.passwordRequired")),
  });

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const pwdFieldId = useId();
  const { t } = useTranslation();

  const SignupSchema = getSignupSchema(t);

  const handleSubmit = (values, actions) => {
    if (values.email === "" || values.password === "" || values.name === "")
      return;

    delete values.conditions;

    dispatch(register(values));
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        conditions: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({ touched, errors, values }) => (
        <Form className={css.form}>
          <h2 className={css.title}>{t("register.title")}</h2>
          <p className={css.discription}>{t("register.discription")}</p>
          <label className={css.label}>
            {t("register.inputName")}
            <Field
              className={
                touched.name && errors.name
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="name"
              type="text"
              placeholder={t("register.namePlaceholder")}
              id={emailFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            Email
            <Field
              className={
                touched.email && errors.email
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="email"
              type="email"
              placeholder={t("register.emailPlaceholder")}
              id={emailFieldId}
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label}>
            {t("register.pwd")}
            <Field
              className={
                touched.password && errors.password
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              id={pwdFieldId}
            />
            <span
              className={css.icon}
              width={20}
              height={20}
              onClick={e => {
                e.preventDefault();
                togglePasswordVisibility();
              }}
            >
              {showPassword ? <Eye /> : <Hide />}
            </span>
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <div className={css.remember}>
            <label className={css.customCheckbox}>
              <Field type="checkbox" name="conditions" />
              <span className={css.checkmark}></span>
              <span className={css.agreement}>
                {t("register.agree")}
                <Link to="/terms" className={css.link}>
                  {t("register.terms")}
                </Link>
                {t("register.and")}
                <Link to="/policy" className={css.link}>
                  {t("register.conditions")}
                </Link>
              </span>
            </label>
          </div>
          <button
            className={css.button}
            type="submit"
            disabled={!values.conditions}
          >
            {t("register.submit")}
            {/* {isLoading ? <Loader /> : "Sign in"} */}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
