import style from "./style.module.scss"
import { why_me } from "@/mock/landing.js"

export const WhyWe = () => {
    return(
        <div className={style.whyWe}>
            <div className={style.whyWeContainer}>
                <h2>чому варто обрати нас?</h2>                
                <div className={style.whyWeContainerList}>
                    {why_me.map(({name,desc,img},key) => 
                        <div key={key}>
                            <img src={img} alt="why we argument"/>
                            <p className={style.whyWeContainerListTitle}>{name}</p>
                            <p className={style.whyWeContainerListDesc}>{desc}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}