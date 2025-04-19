import photo from "@/assets/design_panel.png"
import { design_list } from "../../../mock/landing"
import style from "./style.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom";

export const DesignPanel = () => {
    const [ currentDesign, setCurrentDesign ] = useState(0)
    const current = design_list[currentDesign]

    return(
        <div className={style.designPanel}>
            <div className={style.designPanelContainer}>
            <div className={style.designPanelContainerHead}>
                    <h2>Стильовий гід</h2>
                    <p>Ознайомся з популярними стилями дизайну та обирай той, який підходить саме тобі!</p>
                </div>

                <div className={style.designPanelContainerList}>
                    <div className={style.designPanelContainerListView}>
                        <img src={photo} alt="design photo"/>
                        <div className={style.designPanelContainerListInfo}>
                            <p className={style.designPanelContainerListInfoTitle}>{current.name}</p>
                            <p className={style.designPanelContainerListInfoDesc}>{current.desc}</p>
                        </div>
                    </div>
                    <div className={style.designPanelContainerListControl}>
                        <div className={style.designPanelContainerListControlContainer}>
                            <div className={style.designPanelContainerListControlList}>
                                {design_list.map(({name},key) =>  
                                    <div 
                                        key={key} 
                                        onClick={() => setCurrentDesign(key)}
                                        className={`${style.designPanelContainerListControlListItem} ${currentDesign === key && style.active}`}>{name}</div>)}
                            </div>
                            <Link to="/signin" className={style.designPanelContainerListControlButton}>Згенерувати інтер’єр</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}