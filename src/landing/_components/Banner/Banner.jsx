
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
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
                    <p>Задай параметри, обери стиль — і отримай візуалізацію простору, що надихає. 
                        Штучний інтелект створює дизайн, ти обираєш настрій.</p>
                </div>
                <div className={style.button}>
                    <a>згенерувати</a>
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