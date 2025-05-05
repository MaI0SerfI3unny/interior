import { design_list } from "../../../mock/landing";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DesignPanel = () => {
  const { t } = useTranslation();
  const [currentDesign, setCurrentDesign] = useState(0);
  const current = design_list[currentDesign];

  return (
    <div className={style.designPanel}>
      <div className={style.designPanelContainer}>
        <div className={style.designPanelContainerHead}>
          <h2>{t("design_panel.title")}</h2>
          <p>{t("design_panel.desc")}</p>
        </div>

        <div className={style.designPanelContainerList}>
          <div className={style.designPanelContainerListView}>
            <img src={current.img} alt="design photos" />
            <div className={style.designPanelContainerListInfo}>
              <p className={style.designPanelContainerListInfoTitle}>
                {t(`design_panel.${current.name}`)}
              </p>
              <p className={style.designPanelContainerListInfoDesc}>
                {t(`design_panel.${current.desc}`)}
              </p>
            </div>
          </div>
          <div className={style.designPanelContainerListControl}>
            <div className={style.designPanelContainerListControlContainer}>
              <div className={style.designPanelContainerListControlList}>
                {design_list.map(({ name }, key) => (
                  <div
                    key={key}
                    onClick={() => setCurrentDesign(key)}
                    className={`${style.designPanelContainerListControlListItem} ${currentDesign === key && style.active}`}>
                    {t(`design_panel.${name}`)}
                  </div>
                ))}
              </div>
              <Link
                to="/signin"
                className={style.designPanelContainerListControlButton}>
                {t("cta.btnName")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
