import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { comment } from "@/mock/landing"
import ReactStars from "react-rating-stars-component";
import comma from "@/assets/icons/comment.svg"
import style from "./style.module.scss"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import 'swiper/css/pagination';


export const Comment = () => {
    return(
        <div className={style.comment}>
            <div className={style.commentContainer}>
                <h2>Відгуки користувачів</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    >
                    {comment.map(({name, date,desc}, index) => (
                        <SwiperSlide key={index}>
                        <div className={style.sliderItem}>
                            <img className={style.sliderItemComma} src={comma} alt="comma"/>
                            <h4 className={style.sliderItemTitle}>{name}</h4>
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
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}/>
                            </div>
                            <p>{desc}</p>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}