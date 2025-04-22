import { DeleteImageButtonStyles } from "./DeleteImageButtonStyles.styled"
import {ReactComponent as DeleteIcon} from '../../../../svg/cart.svg'

const DeleteImageButton = ({deleteImage}) => {



  return (
    <DeleteImageButtonStyles onClick={deleteImage}>
        <DeleteIcon width={18} height={18} />
    </DeleteImageButtonStyles>
  )
}

export default DeleteImageButton
