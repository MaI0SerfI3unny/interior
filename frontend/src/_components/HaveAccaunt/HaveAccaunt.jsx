import { Link } from "react-router-dom";
import css from "./HaveAccaunt.module.scss";

export const HaveAccaunt = ({ text, link, path }) => {
  return (
    <div className={css.alredyHave}>
      <p className={css.question}>{text}</p>
      <Link to={path} className={css.link}>
        {link}
      </Link>
    </div>
  );
};
