import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing/LandingPage.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors.js";

export const App = () => {
  const user = useSelector(selectUser);
  console.log(user, "user");

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element="Register Page" />
      <Route path="/login" element="Login page" />
    </Routes>
  );
};
