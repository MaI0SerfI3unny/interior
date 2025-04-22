import DeleteImageButton from "./DeleteImageButton/DeleteImageButton"
import { HeaderContainerStyles } from "./HeaderContainerStyles.styled"

const HeaderContainer = ({deleteImage, photo}) => {
  return (
    <HeaderContainerStyles>
    <h2>Ваше фото</h2>
    {photo && <DeleteImageButton deleteImage={deleteImage} />}
    </HeaderContainerStyles>
  )
}

export default HeaderContainer
