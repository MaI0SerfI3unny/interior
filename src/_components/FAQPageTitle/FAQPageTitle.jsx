import css from "./FAQPageTitle.module.scss";

export const FAQPageTitle = () => {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.title}>Поширені запитання</h1>
      <p className={css.text}>Ваші запитання — наші відповіді</p>
    </div>
  );
};
