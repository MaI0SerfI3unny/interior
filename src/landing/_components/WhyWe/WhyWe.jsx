import style from "./style.module.scss"
import { why_me } from "@/mock/landing.js"
import why from "@/assets/why_me.png"

export const WhyWe = () => {
    return(
        <div className={style.whyWe}>
            <div className={style.whyWeContainer}>
                <h2>Від ідеї до готового інтер’єру — за хвилини</h2>
                <p className={style.whyWeContainerDescription}>Все просто: обери тип кімнати, стиль та кольори, або завантаж фото — і опиши, що хочеш побачити. 
                    Наш AI згенерує унікальний дизайн за лічені секунди. Ти можеш зберегти його, поділитись чи відправити на реалізацію.</p>
                
                <div className={style.whyWeContainerList}>
                    {why_me.map(({name,desc},key) => 
                        <div key={key}>
                            <img src={why} alt="why we photo"/>
                            <p className={style.whyWeContainerListTitle}>{name}</p>
                            <p className={style.whyWeContainerListDesc}>{desc}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}