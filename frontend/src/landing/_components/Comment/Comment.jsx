import { Swiper, SwiperSlide } from "swiper/react";
import { SlideOnScroll } from "../SlideOnScroll/SlideOnScroll";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { comment } from "@/mock/landing";
import left from "@/assets/icons/left.svg";
import right from "@/assets/icons/right.svg";
import ReactStars from "react-rating-stars-component";
import comma from "@/assets/icons/comment.svg";
import style from "./style.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";

export const Comment = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className={style.comment}>
      <SlideOnScroll direction="bottom" className={style.commentContainer}>
        <h2>{t("comment.title")}</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            643: {
              slidesPerView: 2,
            },
            1256: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {[...comment, ...comment].map(({ name, date, desc }, index) => (
            <SwiperSlide key={index}>
              <div className={style.sliderItem}>
                <img
                  className={style.sliderItemComma}
                  src={comma}
                  alt="comma"
                />
                <h4 className={style.sliderItemTitle}>
                  {t(`comment.${name}`)}
                </h4>
                <p className={style.sliderItemJob}>{date}</p>
                <div className={style.sliderItemRating}>
                  <ReactStars
                    count={5}
                    size={32}
                    isHalf={true}
                    value={5}
                    activeColor="#FF8E5E"
                    emptyIcon={<i className="far fa-star"></i>}
                    filledIcon={<i className="fas fa-star"></i>}
                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                  />
                </div>
                <p>{t(`comment.${desc}`)}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className={style.navigationButtons}>
            <div className="swiper-button-prev-custom">
              <img src={left} alt="left arrow" />
            </div>
            <div className="swiper-button-next-custom">
              <img src={right} alt="left arrow" />
            </div>
          </div>
        </Swiper>
      </SlideOnScroll>
    </section>
  );
};
