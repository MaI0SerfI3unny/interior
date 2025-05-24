import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import css from "./RecoveryPwdForm.module.scss";
import clsx from "clsx";

import { ReactComponent as Eye } from "../../assets/icons/eye24.svg";
import { ReactComponent as Hide } from "../../assets/icons/hide24.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveNewPwd } from "../../redux/user/operations.js";
import { useTranslation } from "react-i18next";

const RecoveryPwdSchema = Yup.object().shape({
  new_password: Yup.string().required("Password required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const RecoveryPwdForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!token) {
    return <p className={css.tokenError}>{t("auth.invalidOrExpiredToken")}</p>;
  }

  const handleSubmit = async (values, actions) => {
    const { detail } = await dispatch(
      saveNewPwd({
        ...values,
        token: token,
        successMessage: t("auth.passwordChangedSuccess"),
        errorMessage: t("auth.invalidOrExpiredToken"),
      })
    ).unwrap();

    if (detail === "PASSWORD_UPDATED") navigate("/signin");
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
      initialValues={{ new_password: "", confirm_password: "" }}
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
                touched.new_password && errors.new_password
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="new_password"
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
              name="new_password"
              component="span"
            />
          </label>
          <label className={css.label}>
            Confirm new password
            <Field
              className={
                touched.confirm_password && errors.confirm_password
                  ? clsx(css.input, css.inputError)
                  : css.input
              }
              name="confirm_password"
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
              name="confirm_password"
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
