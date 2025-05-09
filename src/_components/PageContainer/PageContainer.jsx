import css from "./PageContainer.module.scss";

export const PageContainer = ({ children }) => {
  return <div className={css.pageContainer}>{children}</div>;
};
