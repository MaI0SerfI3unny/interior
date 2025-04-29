import { DownloadTextContainer } from "./DownloadTextStyles.styled"
import { ReactComponent as AttachmentIcon } from '../../../svg/attachment.svg';



const DownloadText = () => {
  return (<DownloadTextContainer>
    <div>
        <AttachmentIcon width={24} height={24} />
        <p>
        <span className="download-text">Click to upload </span> 
        <span className="drag-text">or drag and drop </span>
        </p>
    </div>
    <span className="format">JPG, PNG</span> 
            
               </DownloadTextContainer>
  )
}

export default DownloadText
