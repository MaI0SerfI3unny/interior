import photo from "@/assets/gallery.png"
import style from "./style.module.scss"

const heights = [4, 3, 2, 3, 4, 2, 2, 3, 4, 3, 4, 2, 4, 3, 3, 2];

export const Gallery = () => {
    return(
        <div className={style.gallery}>
            <div className={style.galleryContainer}>
                <h2>Галерея для натхнення</h2>
                <div className={style.galleryContainerDesc}>
                    <p>Надихайся ідеями від тих, хто вже створив власний дизайн за допомогою нашого інструменту</p>
                </div>
                <div className={style.galleryContainerGrid}>
                    {heights.map((h, i) => (
                        <div key={i} className={`${style.galleryContainerGridItem} ${style[`h${h}`]}`}>
                            <img src={photo} alt={`img-${i}`} />
                        </div>))}
                </div>
            </div>
        </div>
    )
}