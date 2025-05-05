import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ModalExitStyles } from "./ModalExitStyles.styled";
import SaveResultButton from "../FooterAnswer/SaveResultButton/SaveResultButton";
import ExitButton from "./ExitButton/ExitButton";

const modalRoot = document.getElementById("modal");

const ModalExit = ({ toggleModal, setResult, retryRef }) => {
  const confirmNavigation = useCallback(() => {
    toggleModal(false);
    setResult(null);
  }, [toggleModal, setResult]);

  useEffect(() => {
    const onEsc = e => {
      if (e.code !== "Escape") return;
      confirmNavigation();
    };

    window.addEventListener("keydown", onEsc);
    const currentRetry = retryRef.current;

    return () => {
      window.removeEventListener("keydown", onEsc);
      if (currentRetry) {
        currentRetry();
      }
    };
  }, [confirmNavigation, retryRef]);

  const onBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    confirmNavigation();
  };

  return createPortal(
    <ModalExitStyles onClick={onBackdrop}>
      <div className="modal">
        <h2 className="title-text">Зберегти до Вашого каталога</h2>
        <div className="catalog-container"></div>
        <div className="buttons-container">
          <ExitButton dontSave={confirmNavigation} />
          <SaveResultButton pdS={49.5} />
        </div>
      </div>
    </ModalExitStyles>,
    modalRoot
  );
};

export default ModalExit;
