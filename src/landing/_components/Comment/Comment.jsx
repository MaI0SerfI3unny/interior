import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
                <p className={style.commentContainerDescription}>Ознайомтесь з враженнями від тих, хто вже створив свій ідеальний інтер'єр!</p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    >
                    {["","","","",""].map((_, index) => (
                        <SwiperSlide key={index}>
                        <div className={style.sliderItem}>
                            <img className={style.sliderItemComma} src={comma} alt="comma"/>
                            <h4 className={style.sliderItemTitle}>Brendan Buck</h4>
                            <p className={style.sliderItemJob}>Park ranger</p>
                            <div className={style.sliderItemRating}>
                                <ReactStars
                                    count={5}
                                    size={32}
                                    isHalf={true}
                                    value={5}
                                    activeColor="#ffd700"
                                    emptyIcon={<i className="far fa-star"></i>}
                                    filledIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}/>
                            </div>
                            <p>Я не є професіоналом у дизайні, але завдяки цій платформі я зміг створити інтер'єр для своєї квартири, 
                                який справді відображає мої вподобання. Це неймовірно просто — я просто вказав свої побажання, а результат був 
                                точно таким, як я уявляв. Велика подяка за такий зручний і інтуїтивно зрозумілий інструмент!</p>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}