import download from "@/assets/profile/download.svg";
import photo from "@/assets/profile/photo_folder.png";
import more from "@/assets/profile/more.svg";
import style from "./style.module.scss";

const list_generation = ["", "", "", "", "", "", "", "", "", "", "", ""];

export const ProfileGenerationList = () => {
  return (
    <div className={style.generation}>
      <div className={style.generationListHead}>
        <h4>Усі генерації</h4>
        <p>24 генерації</p>
      </div>

      <div className={style.generationList}>
        {list_generation.map((_, key) => (
          <div key={key} className={style.generationListItem}>
            <div className={style.imageWrapper}>
              <img src={photo} alt="generation photo" />
              <div className={style.overlay}>
                <img src={more} alt="more" />
              </div>
            </div>
            <div className={style.downloadBtn}>
              <img src={download} alt="download" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
