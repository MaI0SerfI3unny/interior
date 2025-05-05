import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { why_me } from "@/mock/landing.js";
import { SlideOnScroll } from "../SlideOnScroll/SlideOnScroll";

export const WhyWe = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className={style.whyWe}>
      <SlideOnScroll className={style.whyWeContainer} direction="left">
        <h2>{t("whyWe.name")}</h2>
        <div className={style.whyWeContainerList}>
          {why_me.map(({ img }, key) => (
            <div key={key}>
              <lord-icon
                src={img}
                trigger="loop"
                delay="2500"
                colors="primary:#2b2a29,secondary:#2b2a29"
                className={style.whyWeIcon}
              ></lord-icon>
              <p className={style.whyWeContainerListTitle}>
                {t(`whyWe.title_item_${key}`)}
              </p>
              <p className={style.whyWeContainerListDesc}>
                {t(`whyWe.desc_item_${key}`)}
              </p>
            </div>
          ))}
        </div>
      </SlideOnScroll>
    </section>
  );
};
