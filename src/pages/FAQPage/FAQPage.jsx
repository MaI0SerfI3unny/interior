import AccordionDemo from "@Components/Accordion/Accordion.jsx";
import css from "./FAQPage.module.scss";

export const FAQPage = () => {
  return (
    <div className={css.pageContainer}>
      <div className="sidebar">
        <h1 className={css.title}>Питання, що часто виникають</h1>
        <p className={css.text}>Ваші запитання — наші відповіді</p>
      </div>

      <AccordionDemo />
    </div>
  );
};
