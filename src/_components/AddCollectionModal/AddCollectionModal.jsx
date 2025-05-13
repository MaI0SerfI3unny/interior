import SaveResultButton from "../GeneratingAnswer/FooterAnswer/SaveResultButton/SaveResultButton";
import AddRoomButtonContainer from "../AddRoomButton/AddRoomButtonContainer";
import AddRoomCard from "../AddRoomCard/AddRoomCard";
import { AddCollectionModalStyles } from "./AddCollectionModalStyles.styled";
import catBedroom from "../../pictures/cat3.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SavingPhoto from "../SavingPhoto/SavingPhoto";
import { addCollectionStyles } from "./addCollectionStylesProps";
import CreatingFolderModal from "../CreatingFolderModal/CreatingFolderModal";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useSelector, useDispatch } from "react-redux";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";
import {
  savePhoto,
  createFolder,
} from "../../redux/generationFolders/generationFoldersSlice";

const AddCollectionModal = ({ toggleModal, result }) => {
  const { t } = useTranslation();
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [newFolderName, setNewFolderName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isShowCreating, setIsShowCreating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const folders = useSelector(getGenerationFolders);
  const dispatch = useDispatch();

  function creatingFolder() {
    dispatch(createFolder({ folderTitle: newFolderName, photo: result }));

    setIsShowCreating(false);
    setIsCreating(true);
  }

  function savingSuccessful() {
    dispatch(savePhoto({ folderId: selectedFolder, photo: result }));
    setIsSaving(true);

    setTimeout(() => {
      toggleModal(false);
    }, 3000);
  }

  const savingPhotoText = t("modal.savingPhoto");
  const creatingFolderText = t("modal.createdFolder");

  return (
    <AddCollectionModalStyles
      $isSaving={isSaving}
      $styleSizes={addCollectionStyles}
    >
      {!isSaving && !isShowCreating && !isCreating && (
        <>
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
            toggleModal={savingSuccessful}
          />
        </>
      )}

      {isSaving && !isCreating && !isShowCreating && (
        <SavingPhoto text={savingPhotoText} />
      )}
      {isShowCreating && !isSaving && !isCreating && (
        <CreatingFolderModal
          newFolderName={newFolderName}
          setNewFolderName={setNewFolderName}
          creatingFolder={creatingFolder}
          toggleModal={() => toggleModal(false)}
        />
      )}
      {isCreating && !isShowCreating && !isSaving && (
        <SavingPhoto text={creatingFolderText} />
      )}
    </AddCollectionModalStyles>
  );
};

export default AddCollectionModal;
