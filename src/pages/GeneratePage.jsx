import { useState } from "react";
import GeneratingForm from "../_components/GeneratingForm/GeneratingForm";
import GeneratingAnswer from "../_components/GeneratingAnswer/GeneratingAnswer";
import { GeneratingPageStyles } from "./styles/GeneratingPage.styled";
import MainContainer from "../_components/MainContainer/MainContainer";
import GeneralModal from "../_components/GeneralModal/GeneralModal";
import AddCollectionModalContainer from "../_components/AddCollectionModalContainer/AddCollectionModalContainer";
import { addCollectionStyles } from "../_components/AddCollectionModalContainer/addCollectionStylesProps";

const GeneratePage = () => {
  const [result, setResult] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  function toggleModal(value) {
    setIsShowModal(value);
  }

  return (
    <>
      <GeneratingPageStyles>
        <MainContainer>
          <section>
            <GeneratingForm
              setResult={setResult}
              setIsLoadingAnswer={setIsLoadingAnswer}
              isLoadingAnswer={isLoadingAnswer}
            />
          </section>
          <section>
            <GeneratingAnswer
              result={result}
              toggleModal={toggleModal}
              isLoadingAnswer={isLoadingAnswer}
            />
          </section>
        </MainContainer>
      </GeneratingPageStyles>

      {isShowModal && (
        <GeneralModal
          styleSizes={addCollectionStyles}
          toggleModal={toggleModal}
        >
          <AddCollectionModalContainer result={result} />
        </GeneralModal>
      )}
    </>
  );
};

export default GeneratePage;
