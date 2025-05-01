
import { MainContainerStyles } from "./MainContainerStyles.styled"

const MainContainer = ({children}) => {
  return (
    <MainContainerStyles className="container">
      {children}
    </MainContainerStyles>
  )
}

export default MainContainer
