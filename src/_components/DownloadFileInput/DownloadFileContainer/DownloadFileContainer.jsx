import DeleteImageButton from "./DeleteImageButton/DeleteImageButton"
import { DownloadFileContainerStyles } from "./DownloadFileContainerStyles.styled"

const DownloadFileContainer = ({deleteImage, photo}) => {
  return (
    <DownloadFileContainerStyles>
    <h2>Ваше фото</h2>
    {photo && <DeleteImageButton deleteImage={deleteImage} />}
    </DownloadFileContainerStyles>
  )
}

export default DownloadFileContainer
