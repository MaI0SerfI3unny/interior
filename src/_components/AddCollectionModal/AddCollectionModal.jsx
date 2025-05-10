import SaveResultButton from "../GeneratingAnswer/FooterAnswer/SaveResultButton/SaveResultButton";
import AddRoomButtonContainer from "../AddRoomButton/AddRoomButtonContainer";
import AddRoomCard from "../AddRoomCard/AddRoomCard";
import { AddCollectionModalStyles } from "./AddCollectionModalStyles.styled";
import catKitchen from "../../pictures/cat.jpeg";
import catBedroom from "../../pictures/cat3.jpg";
import catBathroom from "../../pictures/cat10.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SavingPhoto from "../SavingPhoto/SavingPhoto";
import { addCollectionStyles } from "./addCollectionStylesProps";
import CreatingFolderModal from "../CreatingFolderModal/CreatingFolderModal";
import CloseModalButton from "../CloseModalButton/CloseModalButton";

const collection = [
  {
    title: "Кухня",
    count: 1,
    image: catKitchen,
  },
  { title: "Спальня", count: 2, image: catBedroom },
  { title: "Ванна", count: 5, image: catBathroom },
];

const AddCollectionModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [collections, setCollections] = useState(collection);
  const [newFolderName, setNewFolderName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isShowCreating, setIsShowCreating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  function creatingFolder() {
    setCollections([
      ...collections,
      {
        title: newFolderName,
        count: 1,
        image: catBedroom,
      },
    ]);
  }

  function checkFolderNames(value) {
    if (collections.some(col => col.title === value)) {
      setErrorMessage(t("modal.folderExist"));
    } else {
      setErrorMessage("");
    }
  }

  function saveImageToFolder() {
    const updatedCollections = collections.map(collection => {
      if (collection.title === selectedFolder) {
        return { ...collection, count: collection.count + 1 };
      }
      return collection;
    });

    setCollections(updatedCollections);
  }

  function savingSuccessful() {
    saveImageToFolder();
    setIsSaving(true);

    setTimeout(() => {
      toggleModal(false);
    }, 3000);
  }

  function handleSelectedFolder(value) {
    setSelectedFolder(value);
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
            {collections.map(item => (
              <AddRoomCard
                key={item.title}
                roomInfo={item}
                handleSelectedFolder={handleSelectedFolder}
                selectedFolder={selectedFolder}
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
          checkFolderNames={checkFolderNames}
          toggleModal={() => toggleModal(false)}
          errorMessage={errorMessage}
          setIsShowCreating={setIsShowCreating}
          setIsCreating={setIsCreating}
        />
      )}
      {isCreating && !isShowCreating && !isSaving && (
        <SavingPhoto text={creatingFolderText} />
      )}
    </AddCollectionModalStyles>
  );
};

export default AddCollectionModal;
