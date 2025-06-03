import { AddCollectionModalFoldersListStyles } from "./AddCollectionModalFolersList.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import AddRoomCard from "../AddRoomCard/AddRoomCard";
import SaveResultButton from "../GeneratingAnswer/FooterAnswer/SaveResultButton/SaveResultButton";
import { useTranslation } from "react-i18next";
import catBedroom from "../../pictures//cat3.jpg";
import AddRoomButtonContainer from "../AddRoomButton/AddRoomButtonContainer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";
import { toastSuccess } from "../../assets/functions/toastNotification";
import { useNavigate } from "react-router-dom";
import { savePhotoToFolder } from "../../redux/generationFolders/generationFoldersOperations";

const AddCollectionModalFoldersList = ({
  toggleModal,
  setIsShowCreating,
  result,
}) => {
  const { t } = useTranslation();
  const [selectedFolder, setSelectedFolder] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const folders = useSelector(getGenerationFolders);

  function saveToFolder() {
    const { title } = folders.find(fold => fold.id === selectedFolder);
    dispatch(
      savePhotoToFolder({ title, photo: result, folderId: selectedFolder })
    );
    toastSuccess(t("modal.savingPhoto"));
    navigate("/profile/main");
  }

  return (
    <AddCollectionModalFoldersListStyles>
      <CloseModalButton toggleModal={() => toggleModal(false)} />
      <h1>{t("modal.title")}</h1>
      <AddRoomButtonContainer handleCreateFolder={setIsShowCreating} />

      <ul className="rooms-list">
        {folders.map(folder => (
          <AddRoomCard
            key={folder.title}
            folder={folder}
            handleSelectedFolder={setSelectedFolder}
            selectedFolder={selectedFolder}
            timePhoto={catBedroom}
          />
        ))}
      </ul>
      <SaveResultButton
        pdS={148}
        wD={"100%"}
        isDisabled={!selectedFolder}
        toggleModal={saveToFolder}
      />
    </AddCollectionModalFoldersListStyles>
  );
};

export default AddCollectionModalFoldersList;
