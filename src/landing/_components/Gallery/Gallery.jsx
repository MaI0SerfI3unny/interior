import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import { gallery } from "@/mock/landing";
import arrow from "@/assets/icons/arrows_down.svg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import GeneralModal from "../../../_components/GeneralModal/GeneralModal";
import ProfileAllGenerationsPhotoModal from "../../../_components/ProfileAllGenerationsPhotoModal/ProfileAllGenerationsPhotoModal";
import { ReactComponent as MoreInfoIcon } from "../../../svg/more-info-photo.svg";

const defaultHeights = [3, 2, 2, 3, 3, 2, 3, 3, 4, 3, 2, 2];

export const Gallery = ({ id }) => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12);
  const [heights, setHeights] = useState(defaultHeights);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  function handleCardClick(id) {
    console.log("hello");
    const currentPhoto = gallery.find(photo => id === photo.id);
    setSelectedPhoto({
      result: currentPhoto.modalImage,
      prompt: t(currentPhoto.prompt),
      style: t(currentPhoto.style),
      room: t(currentPhoto.room),
    });

    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
    setSelectedPhoto(null);
  }

  return (
    <section id={id} className={style.gallery}>
      <div className={style.galleryContainer}>
        <div className={style.galleryContainerHead}>
          <h2>{t("gallery.title")}</h2>
          <p>{t("gallery.desc")}</p>
        </div>

        <div className={style.galleryContainerGrid}>
          {heights.slice(0, visibleCount).map((h, i) => (
            <div
              onClick={() => handleCardClick(i)}
              key={i}
              className={`${style.galleryContainerGridItem} ${style[`h${h}`]}`}
            >
              <img src={gallery[i].image} alt={`img-${i}`} />
              <button type="button" className={`${style.moreInfoBtn} }`}>
                <MoreInfoIcon width={40} height={40} />
              </button>
              <div className={`${style.overflow} }`}>
                <div>
                  <p className={`${style.overflowTitle} }`}>Prompt</p>
                  <p className={`${style.overflowPrompt} }`}>
                    {t(`${gallery[i].prompt}`)}
                  </p>
                </div>
              </div>
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
          <NavLink to="/">{t("gallery.more")}</NavLink>
          <img src={arrow} alt="down" />
        </div>
      </div>
      {isOpenModal && selectedPhoto && (
        <GeneralModal toggleModal={closeModal}>
          <ProfileAllGenerationsPhotoModal
            toggleModal={closeModal}
            photo={selectedPhoto}
          />
        </GeneralModal>
      )}
    </section>
  );
};
