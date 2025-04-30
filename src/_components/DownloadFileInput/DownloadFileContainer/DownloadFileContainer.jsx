import DeleteImageButton from "./DeleteImageButton/DeleteImageButton"
import { DownloadFileContainerStyles } from "./DownloadFileContainerStyles.styled"
import { useTranslation } from "react-i18next";

const DownloadFileContainer = ({deleteImage, photo}) => {
  const { t } = useTranslation();

  return (
    <DownloadFileContainerStyles>
    <h2>{t('generate.yourPhoto')}</h2>
    {photo && <DeleteImageButton deleteImage={deleteImage} />}
    </DownloadFileContainerStyles>
  )
}

export default DownloadFileContainer
