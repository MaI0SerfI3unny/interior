import { AddRoomCardStyles } from "./AddRoomCardStyles.styled";
import { getEndOfWord } from "../../assets/functions/getEndOfWord";
import { useTranslation } from "react-i18next";

const AddRoomCard = ({ roomInfo, handleSelectedFolder, selectedFolder }) => {
  const { t } = useTranslation();
  const { title, image, count } = roomInfo;
  const generationKey = `modal.${getEndOfWord(count)}`;

  function handleCheckFolder() {
    if (selectedFolder === roomInfo.title) {
      handleSelectedFolder(null);
    } else {
      handleSelectedFolder(roomInfo.title);
    }
  }

  return (
    <AddRoomCardStyles
      onClick={handleCheckFolder}
      $selectedFolder={selectedFolder}
      $value={roomInfo.title}
    >
      <img src={image} alt="cat" />
      <div className="text-container">
        <h2>{title}</h2>
        <p>
          {count} {t(generationKey)}
        </p>
      </div>
    </AddRoomCardStyles>
  );
};

export default AddRoomCard;
