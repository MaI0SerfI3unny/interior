import AccordionDemo from "@Components/App/Accordion/Accordion.jsx";
import css from "./FAQPage.module.css";

export const FAQPage = () => {
  return (
    <div className={css.pageContainer}>
      <div className="sidebar">
        <h1 className={css.title}>Питання, що часто виникають</h1>
        <p className={css.text}>Ваші запитання — наші відповіді</p>
      </div>
      <div className="accordeon">
        <AccordionDemo />
      </div>
    </div>
  );
};
