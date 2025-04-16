import { Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useId } from "react";
import clsx from "clsx";
import { useState } from "react";
import css from "./SignInForm.module.css";
import { login } from "@/redux/user/operations";

import { ReactComponent as Logo } from "../../assets/icons/true.svg";
import { GoogleLoginButton } from "../GoogleLoginButton/GoogleLoginButton.jsx";
// import { selectIsLoading } from "@/redux/user/selectors.js";
// import GoogleLoginButton from "../GoogleLoginButton/GoogleLoginButton.jsx";

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
  // const isError = useSelector(selectAuthError);

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
    <div className={css.pageContainer}>
      <div className={css.formContainer}>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
        >
          {({ touched, errors }) => (
            <Form className={css.form}>
              <Logo />
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
                  placeholder="Enter your password"
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
                />
              </label>
              <div className={css.remember}>
                <label className={css.customCheckbox}>
                  <Field type="checkbox" name="rememberMe" />
                  <span className={css.checkmark}></span>Remember me
                </label>

                <span className={css.forgotPwd}>Forgot password?</span>
              </div>
              <button className={css.button} type="submit">
                Sign in
                {/* {isLoading ? <Loader /> : "Sign in"} */}
              </button>
              <span className={css.or}>Or</span> <GoogleLoginButton />
              <div className={css.alredyHave}>
                <p className={css.question}>Don’t have an account?</p>
                <Link to="/signup" className={css.link}>
                  Sign up
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        {/* <GoogleLoginButton>Sign In with Google</GoogleLoginButton> */}

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

export default SignInForm;
