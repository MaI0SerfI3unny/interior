import { Form, Field, Formik, ErrorMessage } from "formik";
// import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import clsx from "clsx";
import { useState } from "react";
import css from "./SignUpForm.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Eye } from "../../assets/icons/eye24.svg";
import { ReactComponent as Hide } from "../../assets/icons/hide24.svg";

// import { selectIsLoading } from "@/redux/user/selectors.js";

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name must be at least 2 characters long")
    .max(64, "The name must be no longer than 64 characters")
    .required("Name required"),
  email: Yup.string()
    .matches(emailRegEx, "Enter a valid email address")
    .required("Email required"),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long")
    .max(64, "The password must be no longer than 64 characters")
    .required("Password required"),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  const emailFieldId = useId();
  const pwdFieldId = useId();

  const handleSubmit = (values, actions) => {
    if (values.email === "" || values.password === "" || values.name === "")
      return;

    console.log(values, "values signup form");
    // dispatch(login(values));
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
          <h2 className={css.title}>Get started now</h2>
          <p className={css.discription}>
            Sign up now for a seamless and rewarding experience
          </p>
          <label className={css.label}>
            Name
            <Field
              className={
                touched.name && errors.name
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="name"
              type="text"
              placeholder="Enter your name"
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
              placeholder="Enter your email"
              id={emailFieldId}
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label}>
            Password
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
              onClick={(e) => {
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
                I agree to the<Link className={css.link}>Terms</Link>and
                <Link className={css.link}>Conditions</Link>.
              </span>
            </label>
          </div>
          <button
            className={css.button}
            type="submit"
            disabled={!values.conditions}
          >
            Get started
            {/* {isLoading ? <Loader /> : "Sign in"} */}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
