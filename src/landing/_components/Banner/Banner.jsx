import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import before from "@/assets/before.webp";
import { SlideOnScroll } from "../SlideOnScroll/SlideOnScroll";
import { BannerHeading } from "./BannerHeading/BannerHeading"
import now from "@/assets/now.webp";
import style from "./style.module.scss";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className={style.banner}>
      <SlideOnScroll direction="bottom" className={style.bannerContainer}>
        <div className={style.bannerContainerLayout}>
          <BannerHeading text={t("banner.name")}/>
        </div>
        <div className={style.bannerContainerLayout}>
          <p>{t("banner.desc")}</p>
        </div>
        <div className={style.button}>
          <Link to="/signin">{t("cta.btnName")}</Link>
        </div>
        <div className={style.bannerContainerSlider}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={before} alt="before" />}
            itemTwo={<ReactCompareSliderImage src={now} alt="now" />}
          />
        </div>
      </SlideOnScroll>
    </div>
  );
};
