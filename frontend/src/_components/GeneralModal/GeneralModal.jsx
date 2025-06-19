import { useEffect } from "react";
import { createPortal } from "react-dom";
import { GeneralModalStyles } from "./GeneralModalStyles.styled";
import React from "react";

const modalRoot = document.getElementById("modal");

const GeneralModal = ({ children, toggleModal, styleSizes }) => {
  useEffect(() => {
    const onEsc = e => {
      if (e.code !== "Escape") return;
      toggleModal(false);
    };
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + "px";
    document.body.style.paddingRight = paddingOffSet;

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = 0;
    };
  }, []);

  const onBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    toggleModal(false);
  };

  const childrenWithToggle = React.isValidElement(children)
    ? React.cloneElement(children, { toggleModal })
    : children;

  return createPortal(
    <GeneralModalStyles onClick={onBackdrop} $styleSizes={styleSizes}>
      <div className="modal">{childrenWithToggle}</div>
    </GeneralModalStyles>,
    modalRoot
  );
};

export default GeneralModal;
