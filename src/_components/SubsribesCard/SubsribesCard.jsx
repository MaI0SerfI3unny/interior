import clsx from "clsx";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import css from "./SubsribesCard.module.scss";

export const SubsribesCard = ({
  plan: { title, price, feauters, id },
  isSelect,
  handleSelect,
}) => {
  return (
    <div
      className={clsx(css.card, isSelect && css.active)}
      onClick={() => handleSelect(id)}
    >
      <h2 className={css.title}>{title}</h2>
      <div className={css.priceBox}>
        <h2 className={css.price}>$ {price}</h2>
        <span className={css.priceText}> / місяць</span>
      </div>
      <button type="button" className={css.btn}>
        Спробувати
      </button>
      <div className={css.feautersBox}>
        <p>До пакету входить:</p>
        {feauters.map((item, idx) => {
          return (
            <div key={idx} className={css.feauter}>
              <Check />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
