import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing/LandingPage.jsx";
import { SignInPage } from "../../pages/SignInPage.jsx";
import { SignUpPage } from "../../pages/SignUpPage.jsx";
import { FAQPage } from "../../pages/FAQPage.jsx";
import GeneratePage from "../../pages/GeneratePage.jsx";
import Layout from "../Layout/Layout.jsx";
import { SendRecoveryEmail } from "../../pages/SendRecoveryEmail.jsx";
import { RecoveryPwd } from "../../pages/RecoveryPwd.jsx";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop.jsx";

import { ProfilePageFolders } from "../../pages/ProfilePageFolders.jsx";
import { ProfilePagePlan } from "../../pages/ProfilePagePlan.jsx";
import { ProfilePageSettings } from "../../pages/ProfilePageSettings.jsx";

import { TermsOfUsePage } from "../../pages/TermsOfUsePage.jsx";
import { PrivacyPolicyPage } from "../../pages/PrivacyPolicyPage.jsx";

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/sendemail" element={<SendRecoveryEmail />} />
        <Route path="/recoverypwd" element={<RecoveryPwd />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/generating" element={<GeneratePage />} />
          <Route path="/profile/main" element={<ProfilePageFolders />} />
          <Route path="/profile/plan" element={<ProfilePagePlan />} />
          <Route path="/profile/settings" element={<ProfilePageSettings />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </>
  );
};
