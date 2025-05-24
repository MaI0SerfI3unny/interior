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
import { SubscribePage } from "../../pages/SubscribePage.jsx";
import { NotFoundPage } from "../../pages/NotFoundPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessToken,
  selectError,
  selectUser,
} from "../../redux/user/selectors.js";
import { useEffect } from "react";
import { getUser } from "../../redux/user/operations.js";

import { PrivateRoute } from "../PrivateRoute/PrivateRoute.jsx";
import { setAuthHeader } from "../../api/axios.config.js";
import { toastError } from "../../assets/functions/toastNotification.js";
import { useTranslation } from "react-i18next";

export const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const { t } = useTranslation();

  useEffect(() => {
    if (error === "UNAUTHORIZED") {
      toastError(t("auth.somethingWentWrong"));
      return;
    }
    if (accessToken) setAuthHeader(accessToken);

    const firstLogIn = () => {
      if (accessToken && user.email === "") {
        dispatch(getUser());
      }
    };
    firstLogIn();
  }, [accessToken]);

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
          <Route
            path="/generating"
            element={
              <PrivateRoute redirectTo="/signin">
                <GeneratePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/main"
            element={
              <PrivateRoute redirectTo="/signin">
                <ProfilePageFolders />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/plan"
            element={
              <PrivateRoute redirectTo="/signin">
                <ProfilePagePlan />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/settings"
            element={
              <PrivateRoute redirectTo="/signin">
                <ProfilePageSettings />
              </PrivateRoute>
            }
          />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/subscribes" element={<SubscribePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
