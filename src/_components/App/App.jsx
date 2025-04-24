import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing/LandingPage.jsx";
import { SignInPage } from "../../pages/SignInPage.jsx";
import { SignUpPage } from "../../pages/SignUpPage.jsx";
import { FAQPage } from "../../pages/FAQPage/FAQPage.jsx";
import { SharedLayout } from "../SharedLayout/SharedLayout.jsx";
import { SendRecoveryEmail } from "../../pages/SendRecoveryEmail.jsx";
import { RecoveryPwd } from "../../pages/RecoveryPwd.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/sendemail" element={<SendRecoveryEmail />} />
      <Route path="/recoverypwd" element={<RecoveryPwd />} />
      <Route element={<SharedLayout />}>
        <Route path="/faq" element={<FAQPage />} />
      </Route>
    </Routes>
  );
};
