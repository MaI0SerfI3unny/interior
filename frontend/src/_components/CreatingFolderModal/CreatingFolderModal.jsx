import { CreatingFolderModalStyles } from "./CreatingFolderModalStyles.styled";
import { useTranslation } from "react-i18next";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useSelector, useDispatch } from "react-redux";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePhotoToNewFolder } from "../../redux/generationFolders/generationFoldersOperations";
import SmallSpinner from "../SmallSpinner/SmallSpinner";

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
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    await dispatch(
      savePhotoToNewFolder({
        title: newFolderName,
        photo: result,
        successMsg: t("modal.createdFolder"),
        errorMsg: t("settings.error"),
      })
    );

    setIsLoading(false);

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
          {isLoading ? <SmallSpinner /> : t("modal.createFolder")}
        </button>
      </form>
    </CreatingFolderModalStyles>
  );
};

export default CreatingFolderModal;
