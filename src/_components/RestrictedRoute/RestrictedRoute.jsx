import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/user/selectors.js";
import { Navigate, useLocation } from "react-router-dom";

export const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const location = useLocation();

  console.log(location.pathname, "location");

  return !isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
