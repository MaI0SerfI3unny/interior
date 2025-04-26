import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing/LandingPage.jsx";
import { SignInPage } from "../../pages/SignInPage.jsx";
import { SignUpPage } from "../../pages/SignUpPage.jsx";
import { FAQPage } from "../../pages/FAQPage/FAQPage.jsx";
import GeneratePage from "../../pages/GeneratePage.jsx";
import Layout from "../Layout/Layout.jsx";
import { SharedLayout } from "../SharedLayout/SharedLayout.jsx";
import { SendRecoveryEmail } from "../../pages/SendRecoveryEmail.jsx";
import { RecoveryPwd } from "../../pages/RecoveryPwd.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/sendemail" element={<SendRecoveryEmail />} />
      <Route path="/recoverypwd" element={<RecoveryPwd />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/generating" element={<GeneratePage />} />
      </Route>
    </Routes>
  );
};
