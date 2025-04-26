import { Form, Field, Formik, ErrorMessage } from "formik";
// import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { useId } from "react";
import clsx from "clsx";
import { useState } from "react";
import css from "./SignInForm.module.scss";

// import { login } from "@/redux/user/operations";

import { ReactComponent as Eye } from "../../assets/icons/eye24.svg";
import { ReactComponent as Hide } from "../../assets/icons/hide24.svg";
import { Link } from "react-router-dom";

// import { selectIsLoading } from "@/redux/user/selectors.js";

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegEx, "Enter a valid email address")
    .required("Email required"),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long")
    .max(64, "The password must be no longer than 64 characters")
    .required("Password required"),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  const emailFieldId = useId();
  const pwdFieldId = useId();

  const handleSubmit = (values, actions) => {
    if (values.email === "" || values.password === "") return;

    console.log(values, "values signin form");
    // dispatch(login(values));
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      onSubmit={handleSubmit}
      validationSchema={SigninSchema}
    >
      {({ touched, errors }) => (
        <Form className={css.form}>
          <h2 className={css.title}>Welcome back!</h2>
          <p className={css.discription}>
            Please enter your details to get started
          </p>
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
              autoComplete="off"
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
              <Field type="checkbox" name="rememberMe" />
              <span className={css.checkmark}></span>Remember me
            </label>

            <Link to="/sendemail" className={css.forgotPwd}>
              Forgot password?
            </Link>
          </div>
          <button className={css.button} type="submit">
            Sign in
            {/* {isLoading ? <Loader /> : "Sign in"} */}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
