import css from "./NotFoundPageImg.module.scss";
import img1 from "../../assets/notFoundPage/img4041x1.png";
import img1x2 from "../../assets/notFoundPage/img4041x2.png";
import img2 from "../../assets/notFoundPage/img4042x1.png";
import img2x2 from "../../assets/notFoundPage/img4042x2.png";
import img3 from "../../assets/notFoundPage/img4043x1.png";
import img3x2 from "../../assets/notFoundPage/img4043x2.png";
import img4 from "../../assets/notFoundPage/img4044x1.png";
import img4x2 from "../../assets/notFoundPage/img4044x2.png";

export const NotFoundPageImg = () => {
  return (
    <div className={css.imgContainer}>
      <img
        className={css.bigImg}
        src={img1}
        srcSet={`${img1} 1x, ${img1x2} 2x,`}
        alt="Nice room background"
      />
      <img
        className={css.smallImg}
        src={img2}
        srcSet={`${img2} 1x, ${img2x2} 2x,`}
        alt="Nice room background"
      />
      <img
        className={css.smallImg}
        src={img3}
        srcSet={`${img3} 1x, ${img3x2} 2x,`}
        alt="Nice room background"
      />
      <img
        className={css.bigImg}
        src={img4}
        srcSet={`${img4} 1x, ${img4x2} 2x,`}
        alt="Nice room background"
      />
    </div>
  );
};
