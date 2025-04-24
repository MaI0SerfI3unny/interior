import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import css from "./ButtonBack.module.scss";

export const ButtonBack = ({ path }) => {
  return (
    <Link className={css.arrowBack} to={path}>
      <Arrow />
      <span>Back</span>
    </Link>
  );
};
