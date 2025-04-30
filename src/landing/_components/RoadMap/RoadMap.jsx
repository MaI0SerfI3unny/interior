import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { steps } from "@/mock/landing";
import { Link } from "react-router-dom";
import photo from "@/assets/roadmap.png";
import { SlideOnScroll } from "../SlideOnScroll/SlideOnScroll"

export const RoadMap = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className={style.roadMap}>
      <SlideOnScroll 
        direction="left" 
        className={style.roadMapContainer}>
        <h2>{t('roadMap.title')}</h2>

        <div className={style.wrap}>
          <div>
            {steps.map((_, key) => (
              <div key={key} className={style.wrapItem}>
                <div className={style.wrapItemCount}>
                  <p>0{key + 1}/</p>
                </div>
                <div className={style.wrapItemInfo}>
                  <h5>{t(`roadMap.title_item_${key}`)}</h5>
                  <p>{t(`roadMap.desc_item_${key}`)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.wrapImg}>
            <img src={photo} alt="roadmap how create design" />
          </div>
        </div>

        <div className={style.roadMapContainerButton}>
          <Link to="/signin">{t('cta.btnName')}</Link>
        </div>
      </SlideOnScroll>
    </section>
  );
};
