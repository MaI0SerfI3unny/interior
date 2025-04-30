import { DownloadTextContainer } from "./DownloadTextStyles.styled"
import { ReactComponent as AttachmentIcon } from '../../../svg/attachment.svg';
import { useTranslation } from "react-i18next";


const DownloadText = () => {
  const { t } = useTranslation();
  return (<DownloadTextContainer>
    <div>
        <AttachmentIcon width={24} height={24} />
        <p>
        <span className="download-text">{t('generate.fileClick')} </span> 
        <span className="drag-text">{t('generate.fileDrag')} </span>
        </p>
    </div>
    <span className="format">JPG, PNG</span> 
            
               </DownloadTextContainer>
  )
}

export default DownloadText
