import css from "./NotFoundPageContainer.module.scss";

export const NotFoundPageContainer = ({ children }) => {
  return <div className={css.pageContainer}>{children}</div>;
};
