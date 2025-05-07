import photo from "@/assets/profile/photo_folder.png";
import style from "./style.module.scss";

const list_folder = ["", "", "", ""];

export const ProfileFolderList = () => {
  const isHavePhoto = false;
  return (
    <div className={style.foldersList}>
      {list_folder.map((_, key) => (
        <div key={key} className={style.foldersListItem}>
          <div className={style.foldersListItemPreview}>
            <div className={style.foldersListItemLeft}>
              <img src={photo} alt="main_photo" />
            </div>
            <div className={style.foldersListItemRight}>
              <img src={photo} alt="main_photo" />
              {isHavePhoto ? (
                <img src={photo} alt="main_photo" />
              ) : (
                <div className={style.noPhoto}></div>
              )}
            </div>
          </div>
          <h6 className={style.foldersListItemTitle}>Кухня</h6>
          <p className={style.foldersListItemDesc}>18 генерацій</p>
        </div>
      ))}
    </div>
  );
};
