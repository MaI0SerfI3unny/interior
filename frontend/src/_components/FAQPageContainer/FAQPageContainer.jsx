import css from "./FAQPageContainer.module.scss";

export const FAQPageContainer = ({ children }) => {
  return <div className={css.pageContainer}>{children}</div>;
};
