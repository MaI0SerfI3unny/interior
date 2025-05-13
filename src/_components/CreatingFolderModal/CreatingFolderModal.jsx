import { CreatingFolderModalStyles } from "./CreatingFolderModalStyles.styled";
import { useTranslation } from "react-i18next";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useSelector, useDispatch } from "react-redux";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";
import { useState } from "react";
import { createFolder } from "../../redux/generationFolders/generationFoldersSlice";
import { toastSuccess } from "../../assets/functions/toastNotification";
import { useNavigate } from "react-router-dom";

const CreatingFolderModal = ({
  newFolderName,
  setNewFolderName,
  toggleModal,
  result,
}) => {
  const { t } = useTranslation();
  const folders = useSelector(getGenerationFolders);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function checkFolderNames(value) {
    if (folders.some(folder => folder.title === value)) {
      setErrorMessage(t("modal.folderExist"));
    } else {
      setErrorMessage("");
    }
  }

  function handleChangeName(e) {
    setNewFolderName(e.target.value);
    checkFolderNames(e.target.value.trim());
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createFolder({ folderTitle: newFolderName, photo: result }));
    toastSuccess(t("modal.createdFolder"));
    navigate("/profile/main");
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
