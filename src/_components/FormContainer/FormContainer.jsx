import css from "./FormContainer.module.scss";
import bg from "../../assets/loginPage/formBGx1.png";
import bgX2 from "../../assets/loginPage/formBGx2.png";

export const FormContainer = ({ children }) => {
  return (
    <div className={css.layout}>
      <div className={css.formContainer}>{children}</div>
      <img
        className={css.bgImg}
        src={bg}
        srcSet={`${bg} 1x, ${bgX2} 2x,`}
        alt="Nice room background"
      />
    </div>
  );
};
