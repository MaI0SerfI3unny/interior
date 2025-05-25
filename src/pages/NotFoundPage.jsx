import { NotFoundPageContainer } from "../_components/NotFoundPageContainer/NotFoundPageContainer.jsx";
import { NotFoundPageImg } from "../_components/NotFoundPageImg/NotFoundPageImg.jsx";
import { NotFoundPageTitleBox } from "../_components/NotFoundPageTitleBox/NotFoundPageTitleBox.jsx";

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundPageTitleBox />
      <NotFoundPageImg />
    </NotFoundPageContainer>
  );
};
