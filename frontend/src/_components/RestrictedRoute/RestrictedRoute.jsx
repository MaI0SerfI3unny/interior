import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/user/selectors.js";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  // const location = useLocation();

  return !isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
