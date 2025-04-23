import {ReactComponent as CloudIcon} from '../../../../svg/cloud.svg'
import { FooterIconButtonStyles } from '../FooterButtonIconStyles.styled.'

const DownloadResultButton = () => {
  return (
    <FooterIconButtonStyles>
      <CloudIcon width={24} height={24} />
    </FooterIconButtonStyles>
  )
}

export default DownloadResultButton
