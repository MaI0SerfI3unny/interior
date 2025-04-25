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
                            <lord-icon
                                src={img}
                                trigger="loop"
                                delay="2500"
                                colors="primary:#2b2a29,secondary:#2b2a29"
                                className={style.whyWeIcon}>
                            </lord-icon>
                            <p className={style.whyWeContainerListTitle}>{name}</p>
                            <p className={style.whyWeContainerListDesc}>{desc}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}