import css from "./SubscribePageContainer.module.scss";

export const SubscribePageContainer = ({ children }) => {
  return <div className={css.pageContainer}>{children}</div>;
};
