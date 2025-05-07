import plus from "@/assets/profile/plus.svg";
import style from "./style.module.scss";

export const ProfileHeader = () => (
  <div className={style.headingProfileGeneration}>
    <h4>Ваші папки</h4>
    <button>
      Створити папку <img src={plus} alt="add" />
    </button>
  </div>
);
