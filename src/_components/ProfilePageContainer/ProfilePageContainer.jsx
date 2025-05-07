import style from "./style.module.scss";

export const ProfilePageContainer = ({ children }) => {
  return (
    <div className={style.pageContainer}>
      <div className={style.main}>{children}</div>
    </div>
  );
};
