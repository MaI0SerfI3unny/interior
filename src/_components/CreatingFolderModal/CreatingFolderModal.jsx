import { CreatingFolderModalStyles } from "./CreatingFolderModalStyles.styled";
import { useTranslation } from "react-i18next";
import CloseModalButton from "../CloseModalButton/CloseModalButton";

const CreatingFolderModal = ({
  newFolderName,
  setNewFolderName,
  errorMessage,
  toggleModal,
  handleCreateFolder,
  checkFolderNames,
}) => {
  const { t } = useTranslation();

  function handleChangeName(e) {
    setNewFolderName(e.target.value);
    checkFolderNames(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateFolder();
    setNewFolderName("");
  }

  const placeholderValue = t("modal.folderInputPlaceholder");
  return (
    <CreatingFolderModalStyles>
      <CloseModalButton toggleModal={toggleModal} />
      <h2>{t(`modal.creatingFolder`)}</h2>
      <form onSubmit={handleSubmit}>
        <h3>{t(`modal.folderName`)}</h3>
        <input
          placeholder={placeholderValue}
          onChange={handleChangeName}
          value={newFolderName}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button disabled={!newFolderName || errorMessage}>
          {t(`modal.createFolder`)}
        </button>
      </form>
    </CreatingFolderModalStyles>
  );
};

export default CreatingFolderModal;
