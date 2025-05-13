import { AddCollectionModalContainerStyles } from "./AddCollectionModalContainerStyles.styled";
import { useState } from "react";
import { addCollectionStyles } from "./addCollectionStylesProps";
import CreatingFolderModal from "../CreatingFolderModal/CreatingFolderModal";

import AddCollectionModalFoldersList from "../AddCollectionModalFoldersList/AddCollectionModalFoldersList";

const AddCollectionModalContainer = ({ toggleModal, result }) => {
  const [newFolderName, setNewFolderName] = useState("");
  const [isShowCreating, setIsShowCreating] = useState(false);

  return (
    <AddCollectionModalContainerStyles $styleSizes={addCollectionStyles}>
      {!isShowCreating && (
        <AddCollectionModalFoldersList
          toggleModal={() => toggleModal(false)}
          setIsShowCreating={setIsShowCreating}
          result={result}
        />
      )}
      {isShowCreating && (
        <CreatingFolderModal
          newFolderName={newFolderName}
          setNewFolderName={setNewFolderName}
          toggleModal={() => toggleModal(false)}
          result={result}
        />
      )}
    </AddCollectionModalContainerStyles>
  );
};

export default AddCollectionModalContainer;
