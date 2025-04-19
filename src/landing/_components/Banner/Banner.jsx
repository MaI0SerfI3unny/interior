
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import before from "@/assets/before.webp"
import now from "@/assets/now.webp"
import style from "./style.module.scss"

export const Banner = () => {
    return(
        <div className={style.banner}>
            <div className={style.bannerContainer}>
                <div className={style.bannerContainerLayout}>
                    <h1>
                        <Typewriter
                            words={["Interior — Твій інтер'єр в одному кліку"]}
                            loop={1}
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}/>
                    </h1>
                </div>
                <div className={style.bannerContainerLayout}>
                    <p>Перетвори мрії про ідеальний інтер'єр у реальність за лічені секунди. 
                        Отримай персоналізовану візуалізацію простору, що надихає!</p>
                </div>
                <div className={style.button}>
                    <Link to="/signin">Згенерувати інтер’єр</Link>
                </div>
                <div className={style.bannerContainerSlider}>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={before} alt="before" />}
                        itemTwo={<ReactCompareSliderImage src={now} alt="now" />}/>
                </div>
            </div>
        </div>
    )
}