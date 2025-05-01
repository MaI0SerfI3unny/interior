import { DeleteImageButtonStyles } from "./DeleteImageButtonStyles.styled"
import {ReactComponent as DeleteIcon} from '../../../../svg/cart.svg'

const DeleteImageButton = ({deleteImage}) => {



  return (
    <DeleteImageButtonStyles onClick={deleteImage}>
        <DeleteIcon width={24} height={24} />
    </DeleteImageButtonStyles>
  )
}

export default DeleteImageButton
