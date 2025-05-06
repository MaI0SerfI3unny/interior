import { useState } from "react";
import GeneratingForm from "../_components/GeneratingForm/GeneratingForm";
import GeneratingAnswer from "../_components/GeneratingAnswer/GeneratingAnswer";
import { GeneratingPageStyles } from "./styles/GeneratingPage.styled";
import MainContainer from "../_components/MainContainer/MainContainer";
import GeneralModal from "../_components/GeneralModal/GeneralModal";
import AddCollectionModal from "../_components/AddCollectionModal/AddCollectionModal";
import { addCollectionStyles } from "../_components/AddCollectionModal/addCollectionStylesProps";

const GeneratePage = () => {
  const [result, setResult] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  function toggleModal(value) {
    setIsShowModal(value);
  }

  return (
    <>
      <GeneratingPageStyles>
        <MainContainer>
          <section>
            <GeneratingForm setResult={setResult} />
          </section>
          <section>
            <GeneratingAnswer result={result} toggleModal={toggleModal} />
          </section>
        </MainContainer>
      </GeneratingPageStyles>

      {isShowModal && (
        <GeneralModal
          styleSizes={addCollectionStyles}
          toggleModal={toggleModal}
        >
          <AddCollectionModal />
        </GeneralModal>
      )}
    </>
  );
};

export default GeneratePage;
