import { Form, Field, Formik, ErrorMessage } from "formik";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useId } from "react";
import clsx from "clsx";
import { useState } from "react";
import css from "./SignUpForm.module.scss";

import { ReactComponent as Logo } from "../../assets/icons/true.svg";
import { GoogleLoginButton } from "../GoogleLoginButton/GoogleLoginButton.jsx";
// import { selectIsLoading } from "@/redux/user/selectors.js";

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SigninSchema = Yup.object().shape({
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
    <div className={css.pageContainer}>
      <div className={css.formContainer}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            conditions: false,
          }}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
        >
          {({ touched, errors, values }) => (
            <Form className={css.form}>
              <Logo />
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
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
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
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
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
                  placeholder="Create a password"
                  id={pwdFieldId}
                />
                <svg
                  className={css.icon}
                  width={16}
                  height={16}
                  onClick={(e) => {
                    e.preventDefault();
                    togglePasswordVisibility();
                  }}
                >
                  {/* <use
                  href={`${sprite}#${
                    showPassword ? "icon-eye" : "icon-eye-hidden"
                  }`}
                /> */}
                </svg>
                <ErrorMessage
                  className={css.error}
                  name="password"
                  component="span"
                />{" "}
                <p className={css.placeholder}>
                  Must be at least 8 characters.
                </p>
              </label>
              <div className={css.remember}>
                <label className={css.customCheckbox}>
                  <Field type="checkbox" name="conditions" />
                  <span className={css.checkmark}></span>I agree to the terms
                  and conditions.
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
              <span className={css.or}>Or</span> <GoogleLoginButton />
              <div className={css.alredyHave}>
                <p className={css.question}>Already have an account?</p>
                <Link to="/signin" className={css.link}>
                  Sign in
                </Link>
              </div>
            </Form>
          )}
        </Formik>

        {/* <span className={css.forgotPwd} onClick={"openModal"}>
          Forgot password
        </span> */}
        {/* {isModalOpen && ( 
        <ModalContainer>
          <ForgotPasswordForm onClose={closeModal} />
        </ModalContainer>
      )} */}
      </div>
    </div>
  );
};

export default SignUpForm;
