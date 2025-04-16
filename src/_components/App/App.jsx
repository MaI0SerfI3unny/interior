import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing/LandingPage.jsx";
import { SignInPage } from "../../pages/SignInPage.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element="Register Page" />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
};
