import photo from "@/assets/gallery.png"
import style from "./style.module.scss"
import {gallery} from "@/mock/landing"

const heights = [3, 2, 2, 3, 3, 2, 3, 3, 4, 3, 2, 2];

export const Gallery = () => {
    return(
        <div className={style.gallery}>
            <div className={style.galleryContainer}>
                <div className={style.galleryContainerHead}>
                    <h2>Галерея для натхнення</h2>
                    <p>Надихайся ідеями від тих, хто вже створив свій власний дизайн </p>
                </div>
            
                <div className={style.galleryContainerGrid}>
                    {heights.map((h, i) => (
                        <div key={i} className={`${style.galleryContainerGridItem} ${style[`h${h}`]}`}>
                            <img src={gallery[i]} alt={`img-${i}`} />
                        </div>))}
                </div>
            </div>
        </div>
    )
}