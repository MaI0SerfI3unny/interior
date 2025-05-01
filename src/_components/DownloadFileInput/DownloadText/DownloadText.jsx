import { DownloadTextContainer } from "./DownloadTextStyles.styled"
import { ReactComponent as AttachmentIcon } from '../../../svg/attachment.svg';
import { useTranslation } from "react-i18next";


const DownloadText = () => {
  const { t } = useTranslation();
  return (<DownloadTextContainer>
        <AttachmentIcon width={24} height={24} />

        <div className="text-container">
        <p>
          <span className="download-text">{t('generate.fileClick')} </span> 
          <span className="drag-text">{t('generate.fileDrag')} </span>
          </p>

          <span className="format">JPG, PNG</span> 
        </div>
            
               </DownloadTextContainer>
  )
}

export default DownloadText
