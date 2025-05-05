import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import css from "./RecoveryPwdForm.module.scss";
import clsx from "clsx";

import { ReactComponent as Eye } from "../../assets/icons/eye24.svg";
import { ReactComponent as Hide } from "../../assets/icons/hide24.svg";

const RecoveryPwdSchema = Yup.object().shape({
  password: Yup.string().required("Password required"),
  confirmPwd: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const RecoveryPwdForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const handleSubmit = (values, actions) => {
    if (
      values.password === "" ||
      values.confirmPwd === "" ||
      values.password !== values.confirmPwd
    ) {
      return;
    }

    // dispath save new pwd
    console.log(values, "values recovery email form");
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPwdVisibility = () => {
    setShowConfirmPwd(!showConfirmPwd);
  };

  return (
    <Formik
      initialValues={{ password: "", confirmPwd: "" }}
      onSubmit={handleSubmit}
      validationSchema={RecoveryPwdSchema}
    >
      {({ touched, errors }) => (
        <Form className={css.form}>
          {" "}
          <h2 className={css.title}>Recovery Password</h2>
          <p className={css.discription}>
            Input the new password for your accaunt
          </p>
          <label className={css.label}>
            New password
            <Field
              className={
                touched.password && errors.password
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="*******"
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
          <label className={css.label}>
            Confirm new password
            <Field
              className={
                touched.confirmPwd && errors.confirmPwd
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="confirmPwd"
              type={showConfirmPwd ? "text" : "password"}
              placeholder="*******"
            />
            <span
              className={css.icon}
              width={20}
              height={20}
              onClick={e => {
                e.preventDefault();
                toggleConfirmPwdVisibility();
              }}
            >
              {showConfirmPwd ? <Eye /> : <Hide />}
            </span>
            <ErrorMessage
              className={css.error}
              name="confirmPwd"
              component="span"
            />
          </label>
          <div className={css.remember}>
            <label className={css.customCheckbox}>
              <Field type="checkbox" name="rememberMe" />
              <span className={css.checkmark}></span>Remember password
            </label>
          </div>
          <button className={css.button} type="submit">
            Save
            {/* {isLoading ? <Loader /> : "Sign in"} */}
          </button>
        </Form>
      )}
    </Formik>
  );
};
