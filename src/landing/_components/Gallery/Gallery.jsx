import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import { gallery } from "@/mock/landing";
import arrow from "@/assets/icons/arrows_down.svg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SlideOnScroll } from "../SlideOnScroll/SlideOnScroll"
import "swiper/css";
import "swiper/css/pagination";

const defaultHeights = [3, 2, 2, 3, 3, 2, 3, 3, 4, 3, 2, 2];

export const Gallery = ({ id }) => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12);
  const [heights, setHeights] = useState(defaultHeights);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width <= 550) {
        setVisibleCount(12);
        setHeights([3, 2, 2, 3, 3, 2, 3, 3, 4, 3, 2, 2]);
      } else if (width <= 1255) {
        setVisibleCount(6);
        setHeights([3, 2, 3, 3, 3, 2]);
      } else {
        setVisibleCount(12);
        setHeights(defaultHeights);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section id={id} className={style.gallery}>
      <SlideOnScroll 
        direction="right" 
        className={style.galleryContainer}>
          <div className={style.galleryContainerHead}>
            <h2>{t('gallery.title')}</h2>
            <p>{t('gallery.desc')}</p>
          </div>

          <div className={style.galleryContainerGrid}>
            {heights.slice(0, visibleCount).map((h, i) => (
              <div
                key={i}
                className={`${style.galleryContainerGridItem} ${style[`h${h}`]}`}
              >
                <img src={gallery[i]} alt={`img-${i}`} />
              </div>
            ))}
          </div>

          <div className={style.galleryContainerMobile}>
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {heights.slice(0, 12).map((_, i) => (
                <SwiperSlide key={i}>
                  <div key={i} className={style.galleryContainerGridItem}>
                    <img src={gallery[i]} alt={`img-${i}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={style.more}>
            <NavLink to="/">{t('gallery.more')}</NavLink>
            <img src={arrow} alt="down" />
          </div>
        </SlideOnScroll>
    </section>
  );
};
