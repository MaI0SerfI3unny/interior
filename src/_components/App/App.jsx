import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing/LandingPage.jsx";
import { SignInPage } from "../../pages/SignInPage.jsx";
import { SignUpPage } from "../../pages/SignUpPage.jsx";
import { FAQPage } from "../../pages/FAQPage/FAQPage.jsx";
import { SharedLayout } from "../SharedLayout/SharedLayout.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route element={<SharedLayout />}>
        <Route path="/faq" element={<FAQPage />} />
      </Route>
    </Routes>
  );
};
