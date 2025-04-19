import css from "./FormContainer.module.scss";
import bg from "../../assets/loginPage/formBGx1.png";
import bgX2 from "../../assets/loginPage/formBGx2.png";
// import { useEffect, useRef } from "react";

export const FormContainer = ({ children }) => {
  // const imgRef = useRef(null);
  // const formRef = useRef(null);

  // useEffect(() => {
  //   const syncWidth = () => {
  //     if (imgRef.current && formRef.current) {
  //       formRef.current.style.width = `${imgRef.current.clientWidth}px`;
  //     }
  //   };

  //   syncWidth();
  //   window.addEventListener("resize", syncWidth);
  //   return () => window.removeEventListener("resize", syncWidth);
  // }, []);

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
