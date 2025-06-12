import { AddRoomCardStyles } from "./AddRoomCardStyles.styled";
import { getEndOfWord } from "../../assets/functions/getEndOfWord";
import { useTranslation } from "react-i18next";

const AddRoomCard = ({ folder, handleSelectedFolder, selectedFolder }) => {
  const { t } = useTranslation();
  const { title, photos } = folder;
  const generationKey = `modal.${getEndOfWord(photos.length)}`;

  function handleCheckFolder() {
    if (selectedFolder === folder.id) {
      handleSelectedFolder(null);
    } else {
      handleSelectedFolder(folder.id);
    }
  }

  return (
    <AddRoomCardStyles
      onClick={handleCheckFolder}
      $selectedFolder={selectedFolder}
      $value={folder.id}
    >
      <img
        // eslint-disable-next-line no-undef
        src={`${process.env.REACT_APP_IMG_URL}${folder.photos[0].result}`}
        alt="room"
      />
      <div className="text-container">
        <h2>{title}</h2>
        <p>
          {photos.length} {t(generationKey)}
        </p>
      </div>
    </AddRoomCardStyles>
  );
};

export default AddRoomCard;
