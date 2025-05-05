import { useState } from "react";
import GeneratingForm from "../_components/GeneratingForm/GeneratingForm";
import GeneratingAnswer from "../_components/GeneratingAnswer/GeneratingAnswer";
import { GeneratingPageStyles } from "./styles/GeneratingPage.styled";
import MainContainer from "../_components/MainContainer/MainContainer";
// import ModalExit from '../components/GeneratingAnswer/ModalExit/ModalExit'
// import { useBlocker } from '../hooks/useBlocker'

const GeneratePage = () => {
  const [result, setResult] = useState(null);
  // const [isShowModal, setIsShowModal] = useState(false);
  // const retryRef = useRef(null);

  // function toggleModal(value) {
  //   setIsShowModal(value)
  //     retryRef.current();

  // }

  // useBlocker((tx) => {
  //   retryRef.current = tx.retry;
  //   setIsShowModal(true);
  // }, !!result)

  return (
    <>
      <GeneratingPageStyles>
        <MainContainer>
          <section>
            <GeneratingForm setResult={setResult} />
          </section>
          <section>
            <GeneratingAnswer result={result} />
          </section>
          {/* {isShowModal && (
          <ModalExit
            toggleModal={toggleModal}
            setResult={setResult}
            retryRef={retryRef} 
            result={result}
          />
        )} */}
        </MainContainer>
      </GeneratingPageStyles>
    </>
  );
};

export default GeneratePage;
