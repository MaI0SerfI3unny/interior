import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/user/selectors.js";
import { Navigate, useLocation } from "react-router-dom";
// import { toastError } from "../../assets/functions/toastNotification.js";
// import { useEffect } from "react";

export const PrivateRoute = ({ children, redirectTo = "/signin" }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const location = useLocation();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     toastError("Для генерації необхідно зареєстуватись/залогінитись");
  //   }
  // }, [isLoggedIn]);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};
