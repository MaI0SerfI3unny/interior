import arrow from "@/assets/icons/roadmap_arrow.svg"
import { steps } from "@/mock/landing"
import style from "./style.module.scss"
  
export const RoadMap = () => {
    return(
        <div className={style.roadMap}>
            <div className={style.roadMapContainer}>
                <h2>Як згенерувати дизайн?</h2>
                <p className={style.roadMapContainerDescription}>Дотримуйся інструкції та розроби власний дизайн інтер’єру</p>

                <div className={style.stepsWrapper}>
                    <div className={style.stepsGrid}>
                        {steps.map(({title, desc}, key) => (
                        <div key={key} className={style.stepItem}>
                            <div className={style.circle}>{key+1}</div>
                            <p className={style.stepTitle}>{title}</p>
                            <p className={style.stepDesc}>{desc}</p>
                        </div>
                        ))}
                        <img src={arrow} alt="" className={style.arrow + " " + style.arrow1} />
                        <img src={arrow} alt="" className={style.arrow + " " + style.arrow2} />
                        <img src={arrow} alt="" className={style.arrow + " " + style.arrow3} />
                    </div>
                </div>

                <div className={style.roadMapContainerButton}>
                    <a href="">згенерувати</a>
                </div>
            </div>
        </div>
    )
}