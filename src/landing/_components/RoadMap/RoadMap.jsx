import style from "./style.module.scss"
import { steps } from "@/mock/landing"
import { Link } from "react-router-dom";
import photo from "@/assets/roadmap.png"

export const RoadMap = () => {
    return(
        <div className={style.roadMap}>
            <div className={style.roadMapContainer}>
                <h2>Як згенерувати дизайн?</h2>

                <div className={style.wrap}>
                    <div>
                        {steps.map(({title, desc}, key) => 
                            <div key={key} className={style.wrapItem}>
                                <div className={style.wrapItemCount}>
                                    <p>0{key+1}/</p>
                                </div>
                                <div className={style.wrapItemInfo}>
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                </div>
                            </div>)}
                    </div>
                    <div className={style.wrapImg}>
                        <img src={photo} alt="roadmap how create design"/>
                    </div>
                </div>

                <div className={style.roadMapContainerButton}>
                    <Link to="/signin">Згенерувати інтер’єр</Link>
                </div>
            </div>
        </div>
    )
}