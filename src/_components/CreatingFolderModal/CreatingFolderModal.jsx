import { CreatingFolderModalStyles } from "./CreatingFolderModalStyles.styled";
import { useTranslation } from "react-i18next";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useSelector } from "react-redux";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";
import { useState } from "react";

const CreatingFolderModal = ({
  newFolderName,
  setNewFolderName,
  toggleModal,
  creatingFolder,
}) => {
  const { t } = useTranslation();
  const folders = useSelector(getGenerationFolders);
  const [errorMessage, setErrorMessage] = useState("");

  function checkFolderNames(value) {
    if (folders.some(folder => folder.title === value)) {
      setErrorMessage(t("modal.folderExist"));
    } else {
      setErrorMessage("");
    }
  }

  function handleChangeName(e) {
    setNewFolderName(e.target.value);
    checkFolderNames(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    creatingFolder();

    setTimeout(() => {
      toggleModal();
      // Перенаправляем пользователя в личный кабинет
      // ........
    }, 3000);
  }

  const placeholderValue = t("modal.folderInputPlaceholder");
  return (
    <CreatingFolderModalStyles>
      <CloseModalButton toggleModal={toggleModal} />
      <h2>{t("modal.creatingFolder")}</h2>
      <form onSubmit={handleSubmit}>
        <h3>{t("modal.folderName")}</h3>
        <input
          placeholder={placeholderValue}
          onChange={handleChangeName}
          value={newFolderName}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button disabled={!newFolderName || errorMessage}>
          {t("modal.createFolder")}
        </button>
      </form>
    </CreatingFolderModalStyles>
  );
};

export default CreatingFolderModal;
