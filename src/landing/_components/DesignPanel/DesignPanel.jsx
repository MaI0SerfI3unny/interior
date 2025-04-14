import photo from "@/assets/design_panel.png"
import { design_list } from "../../../mock/landing"
import style from "./style.module.scss"
import { useState } from "react"

export const DesignPanel = () => {
    const [ currentDesign, setCurrentDesign ] = useState(0)
    const current = design_list[currentDesign]

    return(
        <div className={style.designPanel}>
            <div className={style.designPanelContainer}>
                <h2>Стильовий гід</h2>
                <div className={style.designPanelContainerDesc}>
                    <p>Ознайомся з популярними стилями дизайну та обирай той, що найкраще підходить саме тобі!</p>
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
                        <div className={style.designPanelContainerListControlList}>
                            {design_list.map(({name},key) =>  
                                <div 
                                    key={key} 
                                    onClick={() => setCurrentDesign(key)}
                                    className={`${style.designPanelContainerListControlListItem} ${currentDesign === key && style.active}`}>{name}</div>)}
                        </div>
                        <a href="" className={style.designPanelContainerListControlButton}>Згенерувати дизайн</a>
                    </div>
                </div>
            </div>
        </div>
    )
}